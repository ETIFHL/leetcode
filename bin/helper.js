#!/usr/bin/env node
const childProcess = require("child_process");
const fs = require("fs-extra");
const path = require("path");

const { Command } = require("commander");
const program = new Command();
program.version("0.0.1");

program
  .option("-d, --debug", "output extra debugging")
  .option("-l, --level <level>", "这题啥难度")
  .option("-t, --tag <tag>", "这题啥(标签/套路/解法)")
  .option("-n, --number <number...>", "哪道题");

program.parse();

const options = program.opts();

if (options.debug) console.log(options);

const { number = [], level, tag } = options;

const storeDir = path.resolve(__dirname, "../store");
const fileList = fs.readdirSync(storeDir);

fileList.forEach((file) => {
  const { name } = path.parse(file);
  const fileNum = name.split(".")[0];
  if (number.includes(fileNum)) {
    const absFilePath = path.resolve(storeDir, file);
    stageFile(absFilePath).then(() => {
      commit({ filename: name, level, tag }).then(() => {
        push();
      });
    });
  }
});

function stageFile(filePath) {
  return new Promise((resolve) => {
    childProcess.execSync(`git stage ${filePath}`);
    resolve();
  });
}

function commit({ filename, level = "", tag = "" }) {
  return new Promise((resolve) => {
    const infoArr = [filename, level, tag];
    const info = `resolve: ${infoArr.join(" ")}`;
    childProcess.execSync(`git commit -m "${info}"`);
    resolve();
  });
}

function push() {
  childProcess.execSync("git push origin master");
}
