# asBoolean

## Introduction

`asBoolean` is a small library to help cast common types in Javascript as boolean instead of having to rely on hacks directly in your code.

The main motivation is to create a more reliable way of interaction with booleans in a human friendly way. This point, however, is certainly arguable.

## Installation

To install run the following command:

```
npm install @noxy/as-boolean@latest
```

Typescript types are already available in the library so no need to get external types.

## Usage

To use this library, simply import the function from the library and call it with the value you want converted to a boolean:

```typescript 
import {asBoolean} from "@noxy/as-boolean";

const bool: boolean = asBoolean("true");

// writes the boolean: true
console.log(bool);

```

### With strings

The following values are regarded as `true`:

- "1"
- "+"
- "y"
- "yes"
- "true"

The following values are regarded as `false`:

- "-1"
- "0"
- "-"
- "n"
- "no"
- "false"

Strings are case-insensitive. Any other string will return an error.

### With numbers or bigint

The number `1` is regarded as `true`, the numbers `0` and `-1` are regarded as `false`
Bigint follow the same rules as the `number` primitive type.

### With objects

In general, objects are regarded as `true` if they contain any properties, and as `false` if they contain no properties.
The following are exceptions to that rule:

#### With arrays

Arrays are regarded as `true` if they contain any elements, and are regarded as `false` if they contain no elements.

#### With Buffer objects

Buffer objects are regarded as `true` if they contain any data, and are regarded as `false` if they contain no data.

#### With Date objects

Date objects are regarded as `true` if their UNIX timestamp value is greater than 0, and `false` if they are equal to or less than 0.

#### With asBoolean method

If the object contains an `asBoolean()` method, it will be invoked with the `this` argument being the object itself and no arguments.
The resulting value of the method will be used as the return value of the `asBoolean` call.

### With symbols

Symbols have their string value read and are then regarded as strings

### With functions

Functions are always regarded as `true`

### With undefined and null

Undefined and null are always regarded as `false`

