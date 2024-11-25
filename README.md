# Find-CLI

Find...

## Installation

You can install Find via [npm](https://www.npmjs.com/):

    npm install --global find-cli

You may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo), depending on your setup.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/find-cli.git

...then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

Find has the following commands and options:

```
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

  --dry-run|-d                             Traverse the directories and files but do not search

  --quietly|-q                             Execute shell commands without printing to the console
```

In the directory that contains the sub-directories holding your project's packages and binaries, run the following command:

    find initialise

## Contact

* james.smith@djalbat.com
