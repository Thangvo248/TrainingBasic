# JS SYNTAX
## JSON 
JSON syntax is derived from JavaScript object notation syntax:

+ Data is in name/value pairs
+ Data is separated by commas
+ Curly braces hold objects
+ Square brackets hold arrays

+ Use the JavaScript function JSON.parse() to convert text into a JavaScript object.
+ Use the JavaScript function JSON.stringify() to convert it into a string.

## Array
+ The JavaScript method toString() converts an array to a string of (comma separated) array values.
+ The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator.
+ The pop() method removes the last element from an array.
+ The push() method adds a new element to an array (at the end):
+ The shift() method removes the first array element and "shifts" all other elements to a lower index.
+ The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
+ The length property provides an easy way to append a new element to an array.
+ The concat() method creates a new array by merging (concatenating) existing arrays.
+ The splice() method can be used to add new items to an array.
+ The slice() method slices out a piece of an array into a new array.
+ The sort() method sorts an array alphabetically.
+ The reverse() method reverses the elements in an array.
+ You can use Math.max.apply to find the highest number in an array.
+ You can use Math.min.apply to find the lowest number in an array.

## Lodash
+ Lodash is a powerful JavaScript library used to handle Arrays, Objects, Functions, Collections..etc. Functional utilities are divided into the following main groups

### Some functions work with arrays
+ _.join(array, [separator=',']) Convert array to string separating elements by the character you pass input.
+ _.last(array) Get last element in array
+ _.chunk(array, [size= option ]) Creates a new array from the existing array, consisting of subarrays with optional number of elements passed.
+ _.fill(array, value, [start=0], [end=array.length]) Overwrites the array element from the start position to before the end position.
+ _.findIndex(array, [predicate=_.identity], [fromIndex=0]) This function allows us to find elements in an array with specified conditions. And returns the position of that element in the array.
+ _.drop(array, [n=1]) Creates a new array that cuts n elements from the input array, counting from the starting position.

### Some functions work with Collection
+ _.filter(collection, [predicate=_.identity]) Iterates through all the elements in the array, finding the element with the specified condition. And return the element found if present.
+ _.sortBy(collection, [iteratees=[_.identity]]) This function is used to sort the collection according to specified conditions.
+ _.includes(collection, value, [fromIndex=0]) Checks whether the values we passed are in the collection or not. If yes, return true and vice versa.

### Some functions work with object
+ _.has(object, path) Checks if a key, value, or element exists in the object.
+ _.findKey(object, [predicate=_.identity]) Finds and returns the key of an element in the object, either searching by key name, or finding the value and then returning the key.
+ _.pick(object, [paths]) Creates an array from an existing array by retrieving the specified elements.












