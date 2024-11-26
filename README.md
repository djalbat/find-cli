# Find-CLI

An alternative to `grep`.

Find looks for occurrences in files' contents that match a supplied glob, string or regular expression.
It filters files and directories by way of configurable path matching rules that are also based on globs, strings and regular expressions.
It is quite like `grep` but it is arguably more user friendly and surprisingly just as fast.

Find uses globs by default for matching both content and paths.
Its use of them is slightly non-standard but hopefully de-mystifying.
In fact there is is a section below devoted to how they are converted to regular expressions.

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

  --dry-run|-d                             Traverse the directories and files only

  --quietly|-q                             Do not show the directory and file path matching
```

### Setup

Suppose that you want to search your `~/Development` directory.
First run the following commands:

    cd ~/Development
    find initialise

This creates a `.findrc` configuration file in the `~/Development` directory that under normal circumstances should not be edited by hand.

Now suppose that you also want to search a sibling `~/Sites` directory.
You can configure this additional root directory and see the results with the following commands: 

    find add-root-directory ../Sites/
    find list-root-directories

### Path rules

Once you have the root directories set up you can start to add the rules that filter the file and directory paths.
Start with a dry run so that there is no need to specify what to search for:

    find -d

Find works from four collections of rules for ignoring and permitting file and directory paths.
It ignores paths first but can subsequently permit them.
It must be able to match a rule to each path that it encounters.
If not it will prompt you to configure one.
For example, the very first file that it encounters may be its own `.findrc` configuration file.
In that case it will ask you whether you want to ignore or permit that path and then prompt you for a glob, string or regular expression to match the path as a whole.
The choice is yours but globs are the default and do not have delimiters.

    .findrc     // gllob
    ".findrc"   // string
    /\.findrc/  // regular expression

You may have several thousand files and directories that need matching and wildcards will obviously be needed.
It can take several minutes to answer all the prompts but you can opt out at any time by hitting the enter key three times at any prompt.
A little patience with the process and a couple of tries at it are recommended.

Once the rules are set up there is little more to do other than to search for occurrences, again using globs, strings or regular expressions.
For example:

   find -q START_OF_CONTENT
   find -q "Query.fromExpression"
   find -q /"'[^"]+/

The `-q` flag here suppresses the path matching messages.
Only the cocurrences will be shown once the search is complete.

### Converting globs to regular expressions



## Contact

* james.smith@djalbat.com
