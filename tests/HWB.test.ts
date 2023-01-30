import {HWBColor} from "../src";
import {TestUtility} from "./TestUtility";

const default_value = new HWBColor(120, 0.1, 0.15, 0.55);

test("HWB (no alpha) Init", () => {
  expect(default_value.hue).toBe(120);
  expect(default_value.whiteness).toBe(0.10);
  expect(default_value.blackness).toBe(0.15);
});

test("HWB (alpha) Init", () => {
  expect(default_value.hue).toBe(120);
  expect(default_value.whiteness).toBe(0.10);
  expect(default_value.blackness).toBe(0.15);
  expect(default_value.alpha).toBe(0.55);
});

test("HWB to CMYK", () => {
  const {cyan, magenta, yellow, black} = default_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.88);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0.88);
  expect(TestUtility.toPrecision(black)).toBe(0.15);
});

test("HWB to Hex", () => {
  const hex = default_value.toHex();
  
  expect(hex.toString()).toBe("#19d919");
});

test("HWB to HSL", () => {
  const {hue, saturation, lightness} = default_value.toHSL();
  
  expect(Math.round(hue)).toBe(120);
  expect(TestUtility.toPrecision(saturation)).toBe(0.79);
  expect(TestUtility.toPrecision(lightness)).toBe(0.48);
});

test("HWB to HSV", () => {
  const {hue, saturation, value} = default_value.toHSV();
  
  expect(Math.round(hue)).toBe(120);
  expect(TestUtility.toPrecision(saturation)).toBe(0.88);
  expect(TestUtility.toPrecision(value)).toBe(0.85);
});

test("HWB to RGB", () => {
  const {red, green, blue} = default_value.toRGB();
  
  expect(Math.round(red)).toBe(25);
  expect(Math.round(green)).toBe(217);
  expect(Math.round(blue)).toBe(25);
});
