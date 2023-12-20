const fs = require('fs');
const path = require('path');
const debug = require('debug')('url-replacer');

const targetDir = path.join(__dirname, "../static");

function replaceContent(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      debug(`Error reading file: ${filePath}`, err);
      return console.error(err);
    }

    const updatedData = data
          .replace(/http:\/\/localhost:2368/g, 'https://tronica.io')
          .replace(/localhost:2368/g, 'tronica.io');

    if (updatedData !== data) {
      try {
        fs.writeFileSync(filePath, updatedData, 'utf8');
        debug(`File updated: ${filePath}`);
      } catch (writeErr) {
        debug(`Error writing file: ${filePath}`, writeErr);
        console.error(writeErr);
      }
    } else {
      debug(`No changes made to the file: ${filePath}`);
    }
  });
}

// Function to walk through the directory recursively
function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    debug(`Processing file: ${fullPath}`);
    if (fs.lstatSync(fullPath).isDirectory()) {
      debug(`Entering directory: ${fullPath}`);
      walkDir(fullPath);
    } else {
      replaceContent(fullPath);
    }
  });
}

debug(`Starting to walk through the directory: ${targetDir}`);
walkDir(targetDir);
