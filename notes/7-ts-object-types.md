# TypeScript Object Types

- [Type Inference](#type-inference)
- [Optional Properties](#optional-properties)
- [Index Signatures](#index-signatures)

TypeScript has a specific syntax for typing objects.

Read more about objects in our [JavaScript Objects chapter]().

```ts
const car: { make: string, model: string, year: number } = {
    make: "Toyota",
    model: "Corolla",
    year: 2009
}
```

Object types like this can also be written separately, and even be reused, look at [interfaces](https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php) for more detail.


## Type Inference

TypeScript can infer the types of properties based on their values.

```ts
const car = {
    make: "Toyota",
};

car.make = "Ford"; // No error
car.make = 2; // Error: Type 'number' is not assignable to type 'string'.
```

## Optional Properties


Optional properties are properties that don't have to be defined in the object definition.

*Example **without** an optional property*

```ts
const car: { make: string, mileage: number } = {
                                                                        /* 
    Error: property 'mileage' is missing in type '{ make: string }'
    but required in type '{ make: string, mileage: number; }'.
                                                                        */
    make: "Toyota",
}
car.mileage = 2000;
```
<br>

*Example **with** an optional property*

```ts
const car: { make: string, mileage?: number } = {
    // no error
    make: "Toyota"
};
car.mileage = 2000;

```



## Index Signatures

Index signature can be used for objects without a defined list of properties.

### Example

```ts

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // No error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

```

Index signatures like this one can also be expressed with utility types like `Record<string, number>`.

Learn more about utility types like this in our [TypeScript Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php)
