import {Hex} from "../src";
import {TestUtility} from "./TestUtility";

const default_value = "#a12bc3";

test("Hex (no alpha) Init", () => {
  const {red, blue, green} = new Hex(default_value);
  
  expect(red).toBe(161);
  expect(green).toBe(43);
  expect(blue).toBe(195);
});

test("Hex (alpha) Init", () => {
  const {red, blue, green, alpha} = new Hex(`${default_value}cc`);
  
  expect(red).toBe(161);
  expect(green).toBe(43);
  expect(blue).toBe(195);
  expect(alpha).toBe(204);
});


test("Hex to CMYK", () => {
  const hex = new Hex(default_value);
  const {cyan, magenta, yellow, black} = hex.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.17);
  expect(TestUtility.toPrecision(magenta)).toBe(0.78);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0.24);
});

test("Hex to HSL", () => {
  const hex = new Hex(default_value);
  const {hue, saturation, lightness} = hex.toHSL();
  
  expect(Math.round(hue)).toBe(287);
  expect(TestUtility.toPrecision(saturation)).toBe(0.64);
  expect(TestUtility.toPrecision(lightness)).toBe(0.47);
});

test("Hex to HSV", () => {
  const hex = new Hex(default_value);
  const {hue, saturation, value} = hex.toHSV();
  
  expect(Math.round(hue)).toBe(287);
  expect(TestUtility.toPrecision(saturation)).toBe(0.78);
  expect(TestUtility.toPrecision(value)).toBe(0.76);
});

test("Hex to HWB", () => {
  const hex = new Hex(default_value);
  const {hue, whiteness, blackness} = hex.toHWB();
  
  expect(Math.round(hue)).toBe(287);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.17);
  expect(TestUtility.toPrecision(blackness)).toBe(0.24);
});

test("Hex to RGB", () => {
  const hex = new Hex(default_value);
  const {red, green, blue} = hex.toRGB();
  
  expect(Math.round(red)).toBe(161);
  expect(Math.round(green)).toBe(43);
  expect(Math.round(blue)).toBe(195);
});
