# Query the DOM to create JSON

The challenge of this task is to create a JSON (JavaScript Object Notation) representation from the DOM (Document Object Model), something that 
is quite common when progressively enhancing HTML to be a dynamic, interactive application. 

For the Cloud project we need to progressively enhance the Research Guides filters to be a single-page application. To achieve this, Chris will be 
creating a WordPress template that returns all research guides and categories in a pre-defined structure. Your task is to take this HTML structure 
and create an array of corresponding JSON objects. 

The HTML structure and corresponding JSON are available [here](https://github.com/nationalarchives/research-guides-single-page-iteration-two/blob/master/proposed-html-structure.html)

## Constraints 

* Use JavaScript as the programming language for this task
* No jQuery for this one, I'm afraid. Since it wont be available at runtime (this is going to be an Angular application ultimately and I'd like to use native DOM within Angular without introducing unnecessary complexity)
* You'll need to ensure that the DOM methods you're using work in IE9 (some of the newer methods are only supported in newer browsers). Use [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/) as the reference for this task and to identify browser compatibility. For example, `Element.classList` is available in IE10+ only
* The HTML shown is a sample only. The actual number of items will be much larger, and your code will need to handle that. 
* If any attribute is missing, log an appropriate message to the console.
* Once completed, log a meaningful message to the console with the number of items in each array.
