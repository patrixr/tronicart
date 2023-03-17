import { copySync, writeFileSync } from 'fs-extra';
import { execSync } from 'child_process';
import path from 'node:path';
import yargs from 'yargs-interactive';

const ROOT_FOLDER = path.join(__dirname, '..');

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

yargs()
  .usage('$0 <cmd> [args]')
  .interactive({
    interactive: { default: true },
    name: { type: 'input', describe: 'Sketch name' }
  })
  .then((result: { name: string }) => {
    const templatePath = path.join(__dirname, '../templates/p5-ts');
    const newProjectPath = path.join(__dirname, '../sketches', result.name);

    console.info('=== Creating sketch ' + result.name + ' from template');

    copySync(templatePath, newProjectPath);

    updatePackageJson(newProjectPath, (pkg: any) => {
      pkg.name = result.name;
    });

    sh('pnpm install');

    console.info('=== Done');
  });
