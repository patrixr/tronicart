import { copySync, writeFileSync } from 'fs-extra';
import { execSync } from 'child_process';
import path from 'node:path';
import yargs from 'yargs-interactive';
import fs from 'node:fs';

const ROOT_FOLDER = path.join(__dirname, '..');
const PACKAGES_FOLDER = path.join(ROOT_FOLDER, 'packages');

function updatePackageJson(folder: string, cb: Function) {
  const fullPath = path.join(folder, 'package.json');
  const packageJson = require(fullPath);
  cb(packageJson);
  writeFileSync(fullPath, JSON.stringify(packageJson, null, 2));
}

function sh(cmd: string, folder = ROOT_FOLDER) {
  execSync(cmd, {
    cwd: folder,
    stdio: 'inherit'
  });
}

const packagesAvailable = fs
  .readdirSync(PACKAGES_FOLDER)
  .filter((folder) => fs.existsSync(path.join(PACKAGES_FOLDER, folder, 'package.json')))
  .map((folder) => require(path.join(PACKAGES_FOLDER, folder, 'package.json')).name);

yargs()
  .usage('$0 <cmd> [args]')
  .interactive({
    interactive: { default: true },
    kind: {
      type: 'list',
      choices: ['sketch', 'package'],
      describe: 'What kind of module are you creating ?'
    },
    name: { type: 'input', describe: 'Module name' },
    dependencies: {
      type: 'checkbox',
      describe: 'Add dependencies',
      choices: packagesAvailable
    }
  })
  .then((result: { kind: string; name: string; dependencies: string[] }) => {
    const templatePath = path.join(__dirname, `./templates/base-${result.kind}`);
    const outputFolderName = result.kind === 'sketch' ? 'sketches' : 'packages';
    const newProjectPath = path.join(__dirname, '..', outputFolderName, result.name);

    console.info('=== Creating sketch ' + result.name + ' from template');
    copySync(templatePath, newProjectPath);

    updatePackageJson(newProjectPath, (pkg: any) => {
      if (result.kind === 'package' && !/^@/.test(result.name)) {
        pkg.name = `@tronicart/${result.name}`;
        pkg.main = `dist/packages/${result.name}/index.js`;
        pkg.types = `dist/packages/${result.name}/index.d.js`;
      } else {
        pkg.name = result.name;
      }

      pkg.dependencies ??= {};

      result.dependencies.forEach((dep) => {
        if (!pkg.dependencies[dep]) {
          pkg.dependencies[dep] = 'workspace:*';
        }
      });
    });

    console.info('=== Installing dependencies');

    sh('pnpm install');

    if (result.kind === 'sketch') {
      console.info('=== Adding a startup script to main package.json');
      updatePackageJson(ROOT_FOLDER, (pkg: any) => {
        pkg.scripts ??= {};
        if (pkg.scripts[result.name]) {
          console.warn(`=== Could not add a script named ${result.name} due to a conflict`);
          return;
        }
        pkg.scripts[result.name] = `turbo run serve --filter="${result.name}"`;
      });
    }

    console.info('=== Done');
  });
