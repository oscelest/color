import {HSVColor} from "../src";
import {TestUtility} from "./TestUtility";

const default_value = new HSVColor(180, 0.33, 0.66, 0.8);

test("HSV (no alpha) Init", () => {
  expect(default_value.hue).toBe(180);
  expect(default_value.saturation).toBe(0.33);
  expect(default_value.value).toBe(0.66);
});

test("HSV (alpha) Init", () => {
  expect(default_value.hue).toBe(180);
  expect(default_value.saturation).toBe(0.33);
  expect(default_value.value).toBe(0.66);
  expect(default_value.alpha).toBe(0.8);
});

test("HSV to CMYK", () => {
  const {cyan, magenta, yellow, black} = default_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.33);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0.34);
});

test("HSV to Hex", () => {
  const hex = default_value.toHex();
  
  expect(hex.toString()).toBe("#71a8a8cc");
});

test("HSV to HSL", () => {
  const {hue, saturation, lightness} = default_value.toHSL();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(saturation)).toBe(0.24);
  expect(TestUtility.toPrecision(lightness)).toBe(0.55);
});

test("HSV to HWB", () => {
  const {hue, whiteness, blackness} = default_value.toHWB();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.44);
  expect(TestUtility.toPrecision(blackness)).toBe(0.34);
});

test("HSV to RGB", () => {
  const {red, green, blue} = default_value.toRGB();
  
  expect(Math.round(red)).toBe(113);
  expect(Math.round(green)).toBe(168);
  expect(Math.round(blue)).toBe(168);
});
