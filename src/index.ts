#!/usr/bin/env node
import {Command} from 'commander';
import * as path from 'path'
import createComponent from "./file-creater";

const program = new Command()
    .version('0.0.1')
    .description('An command line tool auto create react application')


program
    .command('create', {isDefault: true})
    .description('Auto create a react component.')
    .argument('<name>', 'Component name')
    .option('-d, --dir <dir...>', 'Directory to component.' )
    .option('-f, --force <force>', 'Force cover exist files.' )
    .action((name, options) => {
        createComponent(name, options)
    }).addHelpText('after', `
Examples:
  $ deploy exec sequential
  $ deploy exec async`
);

program.parse();
