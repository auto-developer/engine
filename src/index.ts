#!/usr/bin/env node
import {Command} from 'commander';
import {createComponent} from "./file-creater";

const program = new Command()
    .version('0.0.1')
    .description('An command line tool auto create react application')


program
    .command('component', {isDefault: true})
    .description('Auto create a react component.')
    .argument('<name>', 'Component name')
    .option('-d, --dir <dir...>', 'Directory to component.' )
    .option('-f, --force [force]', 'Force cover exist files.', false )
    .option('-c, --config [config]', 'Create from config file.' )
    .action((name, options) => {
        console.log(options)
        createComponent(name, options)
    }).addHelpText('after', `
Examples:
  $ auto create MyButton
  $ auto create MyButton -d App
  $ auto create MyButton -c config.json
  $ auto create MyButton -dir App -f`
);

program
    .command('store')
    .description('Auto create a mobx store.')
    .argument('<name>', 'Store name')
    .option('-f, --force [force]', 'Force cover exist files.', false )
    .option('-c, --config [config]', 'Create from config file.' )
    .action((name, options) => {
        console.log(options)
        createComponent(name, options)
    }).addHelpText('after', `
Examples:
  $ auto create UserStore
  $ auto create UserStore -c config.json
  $ auto create UserStore -dir App -f`
);

program.parse();
