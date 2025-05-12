# React + TypeScript
***Adding Type Safety To React Apps***

- What & Why?
- TypeScript Basics
- Combining React & TypeScript

**What & Why?**

TypeScript is a **superset** to JavaScript

TypeScript adds **static typing** to JavaScript

JavaScript on its own is **dynamically typed**

**TypeScript Null / Undefined Operators Cheatsheet**

1. **Nullish Coalescing Operator (`??`)**

Returns the right-hand default value if the left-hand side is `null` or `undefined`.

```
const result = null ?? 'default'; // 'default'
const result2 = 0 ?? 42; // 0 (because 0 is a valid value)
```

---

2. **Optional Chaining Operator (`?.`)**

Stops execution if an object or function in the chain is `null` or `undefined`.

```
const user = { name: 'Alice', address: null };
const city = user.address?.city; // undefined
```

---

3. **Non-null Assertion Operator (`!`)**

You assert that the value is not `null` or `undefined`.

```
const name: string | null = getName();
const length = name!.length; // you assert name is not null
```

---

4. **Type Guard (`!= null`)**

Checks for both `null` and `undefined`.

```
if (value != null) {
  // value is neither null nor undefined
}
```

---

5. **Ternary Operator (`? :`)**

Conditional value assignment based on null or undefined check.

```
const message = name ? `Hello, ${name}` : 'Guest';
```

[JavaScript With Syntax For Types.](https://www.typescriptlang.org/)

[Adding TypeScript | Create React App](https://create-react-app.dev/docs/adding-typescript)

[Getting Started](https://vite.dev/guide/)

[input: The HTML Input element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)
