# Find-CLI

An alternative to `grep`.

Find looks for occurrences that match a supplied glob, string or regular expression in files' contents.
It filters files and directories by way of a set of path matching rules also based on globs, strings and regular expressions.
It is very much like `grep` but is arguably more user friendly and surprisingly just as fast.

Find's use of globs is slightly non-standard but but hopefully to de-mystifies them.
They are the default for matching but content and paths and there is a section devoted to how Find converts them to regular expressions below.

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

### Setup

Suppose you want to search the `~/Development` directory.
First run the following commands:

    cv ~/Development
    find initialise

This creates a `.findrc` configuration file that under normal circumstances should not be edited by hand.
Suppose that you also want to search a sibling `~/Sites` directory.
You can add the additional root directory and see the result with the following commands: 

    find add-root-directory ../Sites/
    find list-root-directories

### Path rules

Once you have the directories set up you can start to add the rules that filter the paths of the files and directories that Find searches.
Start with a dry run so that there is no need to specify what to search for:

    find -d

Find works from four collections of rules for ignoring and permitting file and directory paths.
It ignores paths first but affords the opportunity to subsequently permit them.
Every path that it encounters must have a corresponding rule that matches, otherwise Find will prompt you to give one.
For example, the very first file that it encounters may be its `.findrc` configuration file.
In that case it will ask you whether you want to ignore or permit that path and then prompt you for a glob, string or regular expression to match the path as a whole.

    .findrc     // gllob
    ".findrc"   // string
    /\/findrc/  // regular expression

You may have several thousand files and directories that need matching and wildcards will obviously be needed.
It can take several minutes to answer all the prompts but you can opt out at any time by 

## Contact

* james.smith@djalbat.com
