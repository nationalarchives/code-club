# Code school

The purpose of this repository is to contain useful information and resources covered during weekly code school sessions with apprentice software developers 

This includes coding exercises that will allow apprentice software developers to practice their coding skills and discuss the approach they have taken.

## Notes from session on 26 September 2017

We discussed:

* the way that we can iterate over data structures and dynamically generate HTML, rather than having large blocks of HTML in our PHP files with several `echo` statements. [Here](examples/looping-over-a-data-structure.php) is an example of doing this with arrays.
* the potential for associative arrays in PHP (aka 'dictionary' or 'map' in other languages) to keep information related to an item together, and how objects can do this even better
* the potential for the `default` case within a `switch` statement to remove redundant code, and why you might - in some cases - choose not to do this for reasons of clarity

We also touched upon some advanced concepts, including: 

* the benefits of separating 'logic' from 'data' and 'presentation' and (briefly, despite it being a bit advanced) the existence of established software design patterns (the three main categories of which are _creational_, _structural_ and _behavioural_).
    * See [examples of these patterns in PHP](http://designpatternsphp.readthedocs.io/en/latest/)
    * See the ['Gang of four'](https://en.wikipedia.org/wiki/Design_Patterns) book
* the concept of [loose coupling](https://en.wikipedia.org/wiki/Loose_coupling) as a means of making a code base more maintainable and [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) a popular mechanism for allowing program designs to be loosely coupled.

## Exercises

Each exercise is contained in its own file within the repository.

* [Anagram checker](exercises/anagram-checker.md)
* [Printing quotes](exercises/printing-quotes.md)
* [Creating JSON from DOM](exercises/create-json-from-dom.md)