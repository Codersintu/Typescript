What is typescript?
TypeScript is a programming language developed and maintained by Microsoft. 
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
<!-- ************************************* -->

Where/How does typescript code run?
Typescript code never runs in your browser. Your browser can only understand javascript. 
Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
Typescript is something that compiles down to javascript
When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 
<!-- ******************************************** -->

Typescript compiler
tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
1.esbuild
2.swc
<!-- *********************************************** -->
Step 1 - Install tsc/typescript globally
npm install -g typescript
Step 2 - Initialize an empty Node.js project with typescript
mkdir node-app
cd node-app
npm init -y
npx tsc --init

Step 4 - Basic Types in TypeScript
Typescript provides you some basic types
number, string, boolean, null, undefined.

Step 5 - The tsconfig file
The tsconfig file has a bunch of options that you can change to change the compilation process.
Some of these include

2. rootDir
Where should the compiler look for .ts files. Good practise is for this to be the src folder
3. outDir
Where should the compiler look for spit out the .js files.
4. noImplicitAny
Try enabling it and see the compilation errors on the following code - 


<!-- next*********** important topic-->
Interface and Types 
1. What are interfaces
How can you assign types to objects? For example, a user object that looks like this - 

What are types?
Very similar to interfaces , types let you aggregate data together.

<!--  -->
Union(|):Accept any one of the types listed.
Intersection(&):require all types combined.
<!--  -->
 
 <!-- interf and taceypes se related code index.ts mein hai -->

<!-- for 14.2 class go to index2.md && ts  -->