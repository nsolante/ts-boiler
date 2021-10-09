// keyof and Lookup Types

interface Person {
  name: string;
  age: number;
  location: string;
}
type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string

type P1 = Person["name"]; // string
type P2 = Person["name" | "age"]; // string | number
type P3 = string["charAt"]; // (pos: number) => string
type P4 = string[]["push"]; // (...items: string[]) => number
type P5 = string[][0]; // string

// These methods are safe to use as a typesafe lookup

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

let x = { foo: 10, bar: "hello!" };

// reference x as the object therefore x if it had an interface would look like
// interface letter {
// foo: number;
// bar: string
// }
// therefore x: letter

let foo = getProperty(x, "foo"); // number
let bar = getProperty(x, "bar"); // string
// let oops = getProperty(x, "wargarbl"); // Error! "wargarbl" is not "foo" | "bar"
//
// setProperty(x, "foo", "string"); // Error!, string expected number

// Mapped Types

interface Person {
  name: string;
  age: number;
  location: string;
}

// PartialP takes in a type which is where <T> is the insertion point and
// P is a key in T which is either name, person or location
// [P in keyof T]?: : T[P]; the array of keys in T will be optional
type PartialP<T> = {
  [P in keyof T]?: T[P];
};

type PartialPerson = PartialP<Person>;

// Keep types the same, but make each property to be read-only.
type ReadonlyP<T> = {
  readonly [P in keyof T]: T[P];
};

// Same property names, but make the value a promise instead of a concrete one
type Deferred<T> = {
  [P in keyof T]: Promise<T[P]>;
};

// Wrap proxies around properties of T
type Proxify<T> = {
  [P in keyof T]: { get(): T[P]; set(v: T[P]): void };
};

// From T pick a set of properties K
function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  return obj;
}
