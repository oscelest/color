import {HSLColor} from "../src";
import {TestUtility} from "./TestUtility";

const default_value = new HSLColor(180, 0.33, 0.66, 0.3);

test("HSL (no alpha) Init", () => {
  expect(default_value.hue).toBe(180);
  expect(default_value.saturation).toBe(0.33);
  expect(default_value.lightness).toBe(0.66);
});

test("HSL (alpha) Init", () => {
  expect(default_value.hue).toBe(180);
  expect(default_value.saturation).toBe(0.33);
  expect(default_value.lightness).toBe(0.66);
  expect(default_value.alpha).toBe(0.3);
});

test("HSL to CMYK", () => {
  const {cyan, magenta, yellow, black} = default_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.29);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0.23);
});

test("HSL to Hex", () => {
  const hex = default_value.toHex();
  
  expect(hex.toString()).toBe("#8cc5c54d");
});

test("HSL to HSV", () => {
  const {hue, saturation, value} = default_value.toHSV();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(saturation)).toBe(0.29);
  expect(TestUtility.toPrecision(value)).toBe(0.77);
});

test("HSL to HWB", () => {
  const {hue, whiteness, blackness} = default_value.toHWB();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.55);
  expect(TestUtility.toPrecision(blackness)).toBe(0.23);
});

test("HSL to RGB", () => {
  const {red, green, blue} = default_value.toRGB();
  
  expect(Math.round(red)).toBe(140);
  expect(Math.round(green)).toBe(197);
  expect(Math.round(blue)).toBe(197);
});
