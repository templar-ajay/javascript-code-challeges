### JavaScript Challenges to Test Your JS skills

###### source - linkedin learning - javascript code challenges

summary of the script files and the topics they cover

1. create objects from class syntax and function syntax

2. create objects from class syntax and function syntax

3. Array.prototype.filter() to filter out vegetarian dishes from all dishes

- example> const arr2 = arr1.filter(element=>element>10)
  this will return a new array of the elements of arr1 who were greater than 10

4. Inheritance -

   - exporting and importing fucntions and classes is used more often to inherit classes
   - to export a class or function
     - first make sure you make a new `.js` file with just the class of function , if there is any other content then importing the class will also inherit the content of parent `.js` file with it and it's not cool
     - to export a class or function just put export before the class or function declaration .
       Examples are

   ```JavaScript
    export function foo(){
      console.log("hey there, export me ")
      }
   ```

   for class syntax

   ```JavaScript
   export class foo{
    constructor (a,b,c){
        this.a = a;
        -----------
        -----------

    --------------------
    -------------------
    }
   }
   ```

   to import this class or function in a script file just write

   ```javascript
   import { foo } from "<file-path-of-the-module>";
   ```

   there is another syntax to export a class by using `export default`

   ```js
   export default foo{

   constructor(a,b,c,......){
    this.a = a;
    this.b = b
    ---------
    ---------
   }
   ------
   ------


   }
   ```

   how ever then you should not use `{}` to import the class. use `import foo from "<file-path>"` instead

   ```js
   import foo from "<file-path>";
   ```
