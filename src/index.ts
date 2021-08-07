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
    .requiredOption('-d, --dir <dir...>', 'Directory to component.' )
    .action((name, options) => {
        console.log('create dir for component %s', options.dir);
        console.log('create component %s', name);
        createComponent(path.join(...options.dir), name)
    }).addHelpText('after', `
Examples:
  $ deploy exec sequential
  $ deploy exec async`
);

program.parse();
