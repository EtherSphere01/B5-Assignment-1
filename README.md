# Blog Task

### 1 -> What are some difference between interface and types in TypeScripts

---

**Syntax**

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

**Extending Property**

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

**Primitives, Unions and Tuples(only with `type`)**

Interface can't define `primitives`, `unions` or `tuples` but Type can

```ts
type password = string | number; // Union
type Value = [number, number]; // Tuple
type ClickMe = () => void; // Function

//interface password = String | number; // not possible
```

**Declaration Merging (only with `interfaces`)**

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

**Class implementation**

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
