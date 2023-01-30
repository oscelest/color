import {RGBColor} from "../src";
import {TestUtility} from "./TestUtility";

const default_value = new RGBColor(191, 107, 29, 0.67);

test("RGB (no alpha) Init", () => {
  expect(default_value.red).toBe(191);
  expect(default_value.green).toBe(107);
  expect(default_value.blue).toBe(29);
});

test("RGB (alpha) Init", () => {
  expect(default_value.red).toBe(191);
  expect(default_value.green).toBe(107);
  expect(default_value.blue).toBe(29);
  expect(default_value.alpha).toBe(0.67);
});

test("RGB to CMYK", () => {
  const {cyan, magenta, yellow, black} = default_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0.44);
  expect(TestUtility.toPrecision(yellow)).toBe(0.85);
  expect(TestUtility.toPrecision(black)).toBe(0.25);
});

test("RGB to Hex", () => {
  const hex = default_value.toHex();
  
  expect(hex.toString()).toBe("#bf6b1dab");
});

test("RGB to Hex (leading 0)", () => {
  const rgb = new RGBColor(5, 5, 5, 0.02);
  
  expect(rgb.toHex().toString()).toBe("#05050505");
});

test("RGB to HSL", () => {
  const {hue, saturation, lightness} = default_value.toHSL();
  
  expect(Math.round(hue)).toBe(29);
  expect(TestUtility.toPrecision(saturation)).toBe(0.74);
  expect(TestUtility.toPrecision(lightness)).toBe(0.43);
});

test("RGB to HSV", () => {
  const {hue, saturation, value} = default_value.toHSV();
  
  expect(Math.round(hue)).toBe(29);
  expect(TestUtility.toPrecision(saturation)).toBe(0.85);
  expect(TestUtility.toPrecision(value)).toBe(0.75);
});

test("RGB to HWB", () => {
  const {hue, whiteness, blackness} = default_value.toHWB();
  
  expect(Math.round(hue)).toBe(29);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.11);
  expect(TestUtility.toPrecision(blackness)).toBe(0.25);
});

