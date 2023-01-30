# color

## Introduction

`color` is a light-weight library for creating colors in different color spaces and converting between them.

Currently supports converting between Hex, RGB, HSL, HSV, HWB, and CMYK.

## Installation

To install run the following command:

```
npm install @noxy/color@latest
```

Typescript types are already available in the library so no need to get external types.

## Usage

To use this library, simply import the function from the library and call it with the value you want converted to a boolean:

```typescript 
import {color, RGBColor} from "@noxy/color";

const rgb = new RGBColor(255, 255, 255);

// Writes the RGB value as CSS frieldly string: rgb(255, 255, 255)
console.log(rgb);

```
