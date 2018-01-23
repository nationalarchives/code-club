# Learning Back-End Development

## Session 1

### Introduction to C\#

In this session we learned a few similarities and differences between C\# and Java, such as a 'namespace' in C\# being similar to a 'package' in Java, C\# using 'var' for mutable variable types, and C\# using 'base' as opposed to 'super' in Java.

---

We were also shown some of the coding standards in use by The National Archives, such as placing 'm_' in from of member variables to classify them as such. Similarly, classes are intended to be mostly marked as public, and not internal or private.


Along with these, we discussed the difference between 'value' and 'reference' type variables:

* "A Value Type stores its contents in memory allocated on the stack."
* "Reference Types are used by a reference which holds a reference (address) to the object but not the object itself."

[src.](http://net-informations.com/faq/general/valuetype-referencetype.htm)

---

Some more C\# tidbits that we learned:

* The formatting whe giving a class an interface to inherit from follows: " *class name* **:** *interface name* "
* The '*Controller*' interface is .NET native.
* Declaring a method with the '*virtual*' keyword means that it must be overwritten by any child classes.

---

### SOLID PRINCIPLES

#### **S** - Single Responsibility

This principle entails that a class should only have *one* purpose, and that if a clas is to handle many purposes then it should be broken down into many separate classes.

#### **O** - Open/Closed

Classes should eb open for extension, and closed for modification. This means to put any 'deprecated' 

#### **L** - Liskov Substitution

The Liskov Substitution Principle states that objects should be replaceable by objects of their subtype.

#### **I** - Interface Segregation

This necessitates that having many client-specific interfaces is better than having one big one.

#### **D** - Dependancy Inversion

Classes should depend on abstractions, not completions.

## Session 2

### Recommended Books

* Robert Martin Books
* The Pragmatic Programmer

### Design Patterns

There are 22 of them!

### API

**A**pplication **P**rogramming **I**nterface

APIs access data by exposing methods to the client, allowing users to retrieve data of their choosing.