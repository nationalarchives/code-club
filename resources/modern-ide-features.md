# Useful features of modern Integrated Development Environments (IDEs)

The examples shown here are from PhpStorm and will be largely available in other JetBrains IDEs. Some of these features will also be available in other IDEs (Such as Visual Studio or Eclipse) and even some more modern text editors (such as Atom and Sublime Text).

## General coding assistance

* Automated refactoring - make changes across a project with confidence
* 'Hector the inspector' - configure inspections by language and level
* Framework and library support provides coding assistance beyond the language 

## Multiple cursors

The ability to simultaneously change the code at several points is really useful.

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

## Find action

The `Cmd+Shift+A` combination reveals a search box for ‘actions’ in PhpStorm. So, what’s an action? In PhpStorm actions are the commands of the main menu and various context menus, commands performed through the toolbar buttons of the main toolbar and tool windows. I like this because it means no more digging around in menus looking for a specific command.

## Emmet

* The [Emmet](https://emmet.io/) plugin is a huge benefit when you're generating HTML 

## Built in Terminal

Having a terminal that you can switch to with a keyboard shortcut - and not leave the IDE - helps both productivity and the problems associated with switching context. It's also handy that it supports tabs and defaults to the project directory.

## Other features

This is really only scratching the surface of what's possible. Other capabilities that will help you be as productive as possible are:

* The 'Settings repository' feature allows a team to share IDE settings via GitHub - which can be very helpful when working in an environment of shared standards
* Configurable code formatting (via keyboard shortcut) 
* Code quality analysis: errors, simplifications and code smells.