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

  --format|-f                              Formatted output, shown only once the search completes.

  --glob|-g                                Treat the argument as a glob, which is the default.

  --regex|-g                               Treat the argument as a regular expression.

  --string|-s                              Treat the argument as a string.

  --previous|-p                            Give a choice of previous rules.

  --interactive|-i                         Interactive mode, allowing the argument to be provided via stdin.
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
    find -q /"[^"]*"/

The `-q` flag here suppresses the path matching messages.
Only the occurrences will be shown once the search is complete.

### Converting globs to regular expressions

Find differentiates between directory and file paths and this is important when converting globs.
Directory paths *must* end with a slash.
So:

    /        // root directory
    ./       // current directory
    ../      // parent directory
    foo/  
    foo/bar/

Find will add the trailing slashes when matching directory paths.
For example:

    Ignore ../Sites/account.xomi.cloud/template/ */template/**/

Note that the root directory has been prepended, but only for clarity when showing messages. 
It is not prepended for the purpose of matching.
A trailing slash has been prepended, however, and this has a bearing on how the glob is converted.

One thing to note is that you do not have to remember to prepend trailing slashes yourself when prompted for globs, strings or regular expressions ot match directory paths.
Find will always add them.

Although non-standard, The presence of a trailing slash for directory paths means makes the conversion of globs to regular expressions easier.
Here is a list of some of the conversions:

| Glob  | Regular expression | Description          |
|-------|--------------------|----------------------|
| `**/` | `(?:[^/]*\\/)*`    | Repeated directories |
| `*/`  | `[^/]*\\/`         | Single directory     |
| `/`   | `\\/`              | Directory            |
| `**`  | `.*`               | Repeated wildcard    |
| `*`   | `.+?`              | Single wildcard      |

Character classes and alternatives are also supported. 
Their conversions are more or less standard.

### Command line considerations

Node is only supplied with the parsed command string and since shells remove double quotes, the following...

    find -q "START_OF_CONTENT"

...may as well be:

    find -q START_OF_CONTENT

In either case the argument will be treated as a glob because Find does not see any double quotes.

There are two ways around this.

1. You can use the interactive mode:

```
find -qi
```

This will allow you to input `"START_OF_CONTENT"` by hand, so to speak. Since Node is now reading `stdin` rather than a parsed command string, the quotes will remain.

2. Use the `-s` flag:

```
find -qs START_OF_CONTENT
```

This coerces Find into treating the argument as a string irregardless of the missing double quotes.

There is also the `-r` flag for regular expressions if you do not want to type the `/` regular expression delimiters, by the way. 
And lastly, the `-g` flag for globs is provided for the sake of completeness but since globs are the default it is never really needed.

## Contact

* james.smith@djalbat.com
