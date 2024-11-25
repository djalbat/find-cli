"use strict";

function helpAction() {
  console.log(`Usage: 
  
  find [<options>] [<command>] [<argument>]

Commands:

  help                                     Show this help
 
  version                                  Show the version

  initialise                               Create a configuration file  

  add-root-directory                       Add a root directory

  remove-root-directory                    Remove a root directory

  list-root-directories                    List the root directories

Options:

  --help|-h                                Show this help

  --version|-v                             Show the version

  --quietly|-q                             Execute shell commands without printing to the console

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/find-cli
`);
}

module.exports = helpAction;
