import {HexColor} from "../src";
import {TestUtility} from "./TestUtility";

const black_value = new HexColor("#00000000");
const white_value = new HexColor("#ffffffff");
const color_value = new HexColor("#a12bc34d");

test("Hex Init", () => {
  const {red, blue, green, alpha} = color_value;
  
  expect(red).toBe(161);
  expect(green).toBe(43);
  expect(blue).toBe(195);
  expect(alpha).toBe(77);
});

test("Sanitize hex", () => {
  const hex = HexColor.sanitize("asdf5435tlægdfklæ43");
  expect(hex).toBe("#adf5435d");
});

test("Sanitize hex (with #)", () => {
  const hex = HexColor.sanitize("#ig43okfpej239jfc32k1o");
  expect(hex).toBe("#43fe239f");
});

// CMYK

test("Hex to CMYK (black)", () => {
  const {cyan, magenta, yellow, black} = black_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(1);
});

test("Hex to CMYK (white)", () => {
  const {cyan, magenta, yellow, black} = white_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0);
});

test("Hex to CMYK (color)", () => {
  const {cyan, magenta, yellow, black} = color_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.17);
  expect(TestUtility.toPrecision(magenta)).toBe(0.78);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0.24);
});

// HSL

test("Hex to HSL (black)", () => {
  const {hue, saturation, lightness} = black_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(0);
});

test("Hex to HSL (white)", () => {
  const {hue, saturation, lightness} = white_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(1);
});

test("Hex to HSL (color)", () => {
  const {hue, saturation, lightness} = color_value.toHSL();
  
  expect(Math.round(hue)).toBe(287);
  expect(TestUtility.toPrecision(saturation)).toBe(0.64);
  expect(TestUtility.toPrecision(lightness)).toBe(0.47);
});

// HSV

test("Hex to HSV (black)", () => {
  const {hue, saturation, value} = black_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(0);
});

test("Hex to HSV (white)", () => {
  const {hue, saturation, value} = white_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(1);
});

test("Hex to HSV (color)", () => {
  const {hue, saturation, value} = color_value.toHSV();
  
  expect(Math.round(hue)).toBe(287);
  expect(TestUtility.toPrecision(saturation)).toBe(0.78);
  expect(TestUtility.toPrecision(value)).toBe(0.76);
});

// HWB

test("Hex to HWB (black)", () => {
  const {hue, whiteness, blackness} = black_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(0);
  expect(TestUtility.toPrecision(blackness)).toBe(1);
});

test("Hex to HWB (white)", () => {
  const {hue, whiteness, blackness} = white_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(1);
  expect(TestUtility.toPrecision(blackness)).toBe(0);
});

test("Hex to HWB (color)", () => {
  const {hue, whiteness, blackness} = color_value.toHWB();
  
  expect(Math.round(hue)).toBe(287);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.17);
  expect(TestUtility.toPrecision(blackness)).toBe(0.24);
});

// RGB

test("Hex to RGB (black)", () => {
  const {red, green, blue} = black_value.toRGB();
  
  expect(Math.round(red)).toBe(0);
  expect(Math.round(green)).toBe(0);
  expect(Math.round(blue)).toBe(0);
});

test("Hex to RGB (white)", () => {
  const {red, green, blue} = white_value.toRGB();
  
  expect(Math.round(red)).toBe(255);
  expect(Math.round(green)).toBe(255);
  expect(Math.round(blue)).toBe(255);
});

test("Hex to RGB (color)", () => {
  const {red, green, blue} = color_value.toRGB();
  
  expect(Math.round(red)).toBe(161);
  expect(Math.round(green)).toBe(43);
  expect(Math.round(blue)).toBe(195);
});
