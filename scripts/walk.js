const fs = require("fs");
const path = require("path");

const Chapter = { content: new Array() };
const dir = './';

main();

// Function
async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function main() {
  for await (const p of walk(dir)) {
    // 选择 html 文件
    if (path.extname(p) === '.html') {
      const file = path.parse(p);
      const dir = file.dir.split(/\\/);
      // Chapter.content.push(`'${p.slice(4)}'`);

      switch (Number(dir[0].slice(-1))) {
        // case 1:
        // case 2:
        // case 3:
        // case 4:
        // case 5:
        // case 6:
        // case 7:
        case 8:
          // console.log(`'${p.slice(4)}',`);
          Chapter.content.push(`'${p.slice(4)}'`);
          break;
      }
    }
  }
  console.log(Chapter);
}
