# Useful features of modern Integrated Development Environments (IDEs)

The examples shown here are from PhpStorm and will be largely available in other JetBrains IDEs. Some of these features will also be available in other IDEs (Such as Visual Studio or Eclipse) and even some more modern text editors (such as Atom and Sublime Text).

## General coding assistance

* Automated refactoring - make changes across a project with confidence
* Framework and library support provides coding assistance beyond the language 

### Inspections 

* The icon at the top right of the editor window and coloured lines at the right of the editor window (yellow is warning, etc.) indicate any problems with your code that PhpStorm has identified (via analysis of the code).
* 'Hector the inspector' at the bottom left of the application allows you to see and configure inspections by language and change level. **Note:** reducing the level of inspection will save battery - so it's good to know this when you're in a situation where you need to conserve battery. 

### Intentions

* Help you code more quickly. Can be triggered using `Alt+Enter` or by clicking on the 'lightbulb' icons that sometimes appear. The suggestions provided by intentions can also be a useful way to learn about ways your code might be improved. 

## Code Generation

* `Cmd+n` provides a contextual way of generating things (the options it provides will differ according to the cursor location or active panel)

### Live Templates

* These are essentially shorthands for code snipplets, and PhpStorm comes with many, many of these - across languages. For example: typing `forek` while in a `.php` file and hitting `Tab` will expand to the 'key/value' variant of a foreach and place your cursor where you'd want it to type the iterable name. Having entered the iterable name you hit `Tab` again moves the cursor to the next useful point, and so on. 
* **You can create your own Live Templates** so if, like me, you type `console.log` 900 times a day in JavaScript files you could instead create a live template that expanded `cl` to console log (and limit this scope to JavaScript files). This is really helpful

## Multiple cursors

The ability to simultaneously change the code at several points is really useful. 

* Select __the next__ occurence with `Ctrl+G`
* Select __all__ occurences with `Ctrl+Cmd+G`

## Version Control System (VCS) support

PhpStorm has pretty solid support for Git and GitHub (and many others), including: 

* The ability to create a new project from a GitHub repository
* The VCS operations popup (available via a shortcut) provides quick access to all the usual pull, commit, add etc. actions
* The ability to create a Gist from selected text

### Local History

This is a kind of version control lite which is very handy for retrieving those changes you've made that were never committed to Git. I use this every day. 

### Show changes 

This is very useful when reviewing the code you are planning to commit. It provides a nice clean 'diff' view which helps avoid accidentally adding code to Git. 

## PHPUnit integration

This allows you to run your unit tests upon changes to a file, and provides a nice GUI for doing so. You'll find this very useful when you begin working with testing. 

## Finding things: 

* **Search everywhere**: `shift + shift` reveals a search box that will search files, actions, classnames and [symbols](https://www.jetbrains.com/help/phpstorm/symbols.html) 

* **Search actions**: The `Cmd+Shift+A` combination reveals a search box for ‘actions’ in PhpStorm. So, what’s an action? In PhpStorm actions are the commands of the main menu and various context menus, commands performed through the toolbar buttons of the main toolbar and tool windows. I like this because it means no more digging around in menus looking for a specific command.

* **Search files**: The `Cmd+Shift+O` reveals a search box for files (only)

* ****Search/Replace in path**: provides rich search across your project.

**Note:** these support fuzzy searching so, if you're looking for a file called `modern-ide-features.md` then it would appear in the results for `mf`

## Selecting things

* **Expand selection**: `Alt+Up` allows you to expand a selection in a way that is meaningful for the current context. This is best demonstrated. 
* **Duplicate a line**: `Cmd+D`
* **Delete a line**: `Cmd+Backspace`

### Moving selections

* **Move a line**: `Alt+Shift+[Up|Down]` allows you to move the current lines
* **Move a block**: `Cmd+Shift+[Up|Down]` moves a block

### Moving around quickly

* **Jump to the last changed line**: `Cmd+Shift+Backspace`

### Multiple cursors === multiple edits


## Emmet

* The [Emmet](https://emmet.io/) plugin is a huge benefit when you're generating HTML 

## Built in Terminal

Having a terminal that you can switch to with a keyboard shortcut - and not leave the IDE - helps both productivity and the problems associated with switching context. It's also handy that it supports tabs and defaults to the project directory.

## Other features

This is really only scratching the surface of what's possible. Other capabilities that will help you be as productive as possible are:

* The 'Settings repository' feature allows a team to share IDE settings via GitHub - which can be very helpful when working in an environment of shared standards
* Configurable code formatting (via keyboard shortcut) 
* Code quality analysis: errors, simplifications and code smells.

### Test RESTful web service

Within the 'Tools' menu there's an item titled 'Test RESTful web service' (but you don't need to remember that because you can find it at any time using `Cmd+Shift+A`) which provides a really easy way to test an API from within the IDE. It does everything from formatting responses to setting authorisation headers. Very cool indeed (especially when you're writing your own APIs)