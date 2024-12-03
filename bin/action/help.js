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

  --dry-run|-d                             Traverse the directories and files only

  --quietly|-q                             Do not show the directory and file path matching

  --format|-f                              Formatted output, shown only once the search completes.

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/find-cli
`);
}

module.exports = helpAction;
