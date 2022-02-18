# Require
To include a module, use the require() function with the name of the module:

# Import and Export
The ES6 is a JavaScript standard. With the help of ES6, we can create modules in JavaScript. In a module, there can be classes, functions, variables, and objects as well. To make all these available in another file, we can use export and import. The export and import are the keywords used for exporting and importing one or more members in a module.

## Export: 
You can export a variable using the export keyword in front of that variable declaration. You can also export a function and a class by doing the same.

+ Syntax for variable:

    <pre><code>export let variable_name;</code></pre>
+ Syntax for function:
    <pre><code>export function function_name() {
  // Statements
}
</code></pre>
+ Syntax for class:
    <pre><code>export class Class_Name {
  constructor() {
    // Statements
  }
}
</code></pre>

## Import: 
You can import a variable using import keyword. You can specify one of all the members that you want to import from a JavaScript file.

+ Syntax:
    <pre><code>import member_to_import from “path_to_js_file”;</code></pre>


