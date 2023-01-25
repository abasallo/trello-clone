const archiver = require('archiver');
const fs = require('fs');

const output = fs.createWriteStream(__dirname + '/lambda.zip');
const archive = archiver('zip', {
    zlib: { level: 9 }
});

output.on('close', () => {
    console.log(`lambda.zip created, total bytes: ${archive.pointer()}`);
});

archive.pipe(output);
archive.directory(__dirname + '/build', false);
archive.finalize();