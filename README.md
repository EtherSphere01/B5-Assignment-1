# Blog Task

---

## 1. What are some difference between `interface` and `types` in TypeScripts

---

## 1. 🔤 Syntax

Interface uses `interface` keyword :

```ts
interface MyInterface {
  name: string;
  email: string;
  age: number;
}
```

Type uses the `type` keyword and an equal sign :

```ts
type MyType = {
  name: string;
  email: string;
  age: number;
};
```

## 2. 📚 Extending Properties

Interface uses the `extends` keyword :

```ts
interface IUser extends MyInterface {
  password: string;
}
```

Type uses `intersections (&)` :

```ts
type TUser = MyType & { role: string };
```

## 3. 🔗 Unions, Tuples, and Function Types (only with `type`)

Interface can't define `primitives`, `unions` or `tuples` but Type can

```ts
type password = string | number; // Union
type Value = [number, number]; // Tuple
type ClickMe = () => void; // Function

//interface password = String | number; // ❌ Not allowed
```

## 4. 🧬 Declaration Merging (only with `interfaces`)

```ts
interface Home {
  presentAddress: string;
}

interface Home {
  permanentAddress: string;
}

/**
 * Home interface will become
 * interface Home {
 * presentAddress : string;
 * permanentAddress : string;
 * }
 */
// `type` declarations can't be merged this way
```

## 5. 🏗️ Class Implementation

Both `type` and `interface` can be used to define class :

```ts
interface IStudent {
  name: string;
  id: string;
}

type TStudent = {
  name: string;
  id: string;
};

class Abul implements IStudent {
  name = "Abul";
  id = "22-3423-1";
}

class Babul implements TStudent {
  name = "Babul";
  id = "22-3432-2";
}
```

---

## 2. what is the use of the `keyof` keyword in TypeScript?

---

## 🔑 What is `keyof` ?

`keyof` keyword in TypeScript is used to create a union type of all the property name of a given object type.

## 🧠 Why use `keyof`

- To get the property(key) of a type as a union of string literal types.
- To create a dynamic and type-safe function (most use in generic function).
- To improve code readability, autocompletion, require less code and reduce runtime errors.

## 🔍 Syntax

```ts
type Person = keyof TypeName;

// Example

type Vehicle = {
  name: string;
  model: string;
  year: number;
};

type Car = keyof Vehicle;

const myCar: Car = "name"; // ✅ Valid
// const myCar : Car = "modified" // ❌ Error: Invalid

//Use in Generic
function getProperty<T, P extends keyof T>(object: T, property: P): T[P] {
  return object[property];
}

const myVehicle: Vehicle = {
  name: "Toyota",
  model: "Corolla",
  year: 2020,
};

const carName = getProperty(myVehicle, "name"); // "Toyota"
const carModel = getProperty(myVehicle, "model"); // "Corolla"
const carYear = getProperty(myVehicle, "year"); // 2020
//   const carName2 = getProperty(myVehicle, "name2"); // ❌ Error: Argument of type '"name2"' is not assignable to parameter of type '"name" | "model" | "year"'.
```

---

## 3. Explain the difference between `any`, `unknown` and `never` types in TypeScript

---

## any

- The any type is used for skip the type checking in TypeScript. You can assign any type of data if you give `any` as a type, but you will loss the type safety.

```ts
let anything: any;
anything = 10;
anything = "hello";
anything.toFixed(2); // This will not throw an error at compile time, but will throw and error at runtime if value is not a number
```

## unknown

- It is similar like `any` but a safer alternative of `any`. The type should be checked before use any property of a specific type. Otherwise it will cause an error in compile time;

```ts
let value: unknown;
value = 10;
value = "hello";

//❌ value.toFixed(2); This will cause a TypeScript error because `value` is of type `unknown`

if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```

## never

- This `never` type is used to signal unreachable code path or in a function that never return or throws an error. 

```ts
function loop(): never {
  while (true) {}
}

```

---
