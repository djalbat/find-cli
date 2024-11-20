"use strict";

function helpAction() {
  console.log(`Usage: 
  
  find [<options>] [<command>] [<argument>]

Commands:

  help                                     Show this help
 
  version                                  Show the version

  initialise                               Create a configuration file
  
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
