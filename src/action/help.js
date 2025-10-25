"use strict";

export default function helpAction() {
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

  --glob|-g                                Treat the argument as a glob, which is the default.

  --regex|-g                               Treat the argument as a regular expression.

  --string|-s                              Treat the argument as a string.

  --previous|-p                            Give a choice of previous rules.

  --interactive|-i                         Interactive mode, allowing the argument to be provided via stdin.

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/find-cli
`);
}
