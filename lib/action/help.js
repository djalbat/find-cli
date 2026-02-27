"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return helpAction;
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vaGVscC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVscEFjdGlvbigpIHtcbiAgY29uc29sZS5sb2coYFVzYWdlOiBcbiAgXG4gIGZpbmQgWzxvcHRpb25zPl0gWzxjb21tYW5kPl0gWzxhcmd1bWVudD5dXG5cbkNvbW1hbmRzOlxuXG4gIGhlbHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGlzIGhlbHBcbiBcbiAgdmVyc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoZSB2ZXJzaW9uXG5cbiAgaW5pdGlhbGlzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBjb25maWd1cmF0aW9uIGZpbGUgIFxuXG4gIGFkZC1yb290LWRpcmVjdG9yeSAgICAgICAgICAgICAgICAgICAgICAgQWRkIGEgcm9vdCBkaXJlY3RvcnlcblxuICByZW1vdmUtcm9vdC1kaXJlY3RvcnkgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBhIHJvb3QgZGlyZWN0b3J5XG5cbiAgbGlzdC1yb290LWRpcmVjdG9yaWVzICAgICAgICAgICAgICAgICAgICBMaXN0IHRoZSByb290IGRpcmVjdG9yaWVzXG5cbk9wdGlvbnM6XG5cbiAgLS1oZWxwfC1oICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoaXMgaGVscFxuXG4gIC0tdmVyc2lvbnwtdiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGUgdmVyc2lvblxuXG4gIC0tZHJ5LXJ1bnwtZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhdmVyc2UgdGhlIGRpcmVjdG9yaWVzIGFuZCBmaWxlcyBvbmx5XG5cbiAgLS1xdWlldGx5fC1xICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEbyBub3Qgc2hvdyB0aGUgZGlyZWN0b3J5IGFuZCBmaWxlIHBhdGggbWF0Y2hpbmdcblxuICAtLWZvcm1hdHwtZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1hdHRlZCBvdXRwdXQsIHNob3duIG9ubHkgb25jZSB0aGUgc2VhcmNoIGNvbXBsZXRlcy5cblxuICAtLWdsb2J8LWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyZWF0IHRoZSBhcmd1bWVudCBhcyBhIGdsb2IsIHdoaWNoIGlzIHRoZSBkZWZhdWx0LlxuXG4gIC0tcmVnZXh8LWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJlYXQgdGhlIGFyZ3VtZW50IGFzIGEgcmVndWxhciBleHByZXNzaW9uLlxuXG4gIC0tc3RyaW5nfC1zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJlYXQgdGhlIGFyZ3VtZW50IGFzIGEgc3RyaW5nLlxuXG4gIC0tcHJldmlvdXN8LXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l2ZSBhIGNob2ljZSBvZiBwcmV2aW91cyBydWxlcy5cblxuICAtLWludGVyYWN0aXZlfC1pICAgICAgICAgICAgICAgICAgICAgICAgIEludGVyYWN0aXZlIG1vZGUsIGFsbG93aW5nIHRoZSBhcmd1bWVudCB0byBiZSBwcm92aWRlZCB2aWEgc3RkaW4uXG5cbkZ1cnRoZXIgaW5mb3JtYXRpb246XG5cblBsZWFzZSBzZWUgdGhlIHJlYWRtZSBmaWxlIG9uIEdpdEh1YjpcblxuICBodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9maW5kLWNsaVxuYCk7XG59XG4iXSwibmFtZXMiOlsiaGVscEFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQTtJQUN0QkMsUUFBUUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDZixDQUFDO0FBQ0QifQ==