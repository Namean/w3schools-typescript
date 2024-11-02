# TypeScript Simple Types

## On This Page

- [Type Assignment](#type-assignment)
- [Explicit Type](#explicit-type)
- [Implicit Type](#implicit-type)
- [Error in Type Assignment](#error-in-type-assignment)
- [Unable to Infer](#unable-to-infer)




TypeScript support some simple types i.e. *`primitives`* you may know.




There are three main primitives in JavaScript and TypeScript.

- `boolean` - true or false values
- `number` - whole numbers and floating point values
- `string` - text values like "TypeScript Rocks"

There are also two less common primitives used in later versions of JavaScript and TypeScript.

- `bigint` - Whole numbers and floating point values, but allows larger negative and postive numbers than the `number` type.

- `symbol` - Symbols are used to create a globally unique identifier.


## Type Assignment

When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit
- Implicit

In both examples below `firstName` is of type `string`.


## Explicit Type

**Explicit** - writing out the type:

```ts
 let firstName: string = "Dylan";
```
**Explicit** type assignment are easier to read and more intentional.*

## Implicit Type

**Implicit** - TypeScript will "guess" the type, based on the assigned value:

```ts
let firstName = "Dylan";
```

> **Note**: Having TypeScript "guess" the type of value is called **infer**.


Implicit assignment forces TypeScript to **infer** the value.

**Implicit** type assignment are shorter, faster to type, and often used when developing and testing.

## Error in Type Assignment

TypeScript will throw an error if data types do not match.

```ts
let firstName: string = "Dylan"; // type string
firstName = 33; // Attemps to re-assign the value to a different type
```

**Implicit** type assignment would have made `firstName` less noticeable as a `string`, but both will throw an error:

```ts
let firstName: string = "Dylan"; // type string
firstName = 33; // Attemps to re-assign the value to a different type
```

**JavaScript** will **not** throw an error for mismatched types.

## Unable to Infer

TypeScript may not always properly infer what the type of a varaible may be. In such cases, it will set the type to `any` which disables type checking.

```ts
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
```

The behavior can be disabled by enabling `noImplicitAny` as an option in TypeScript's project `tsconfig.json`. That is a JSON config file for customizing how the TypeScript compiler behaves.


> **Note**: You may see primitives types capitalized like `Boolean`.

`boolean` !== `Boolean`

For this tutorial just know to use lower-cased values, the upper-case ones are for very specific circumstances.