import {RGBColor} from "../src";
import {TestUtility} from "./TestUtility";

const black_value = new RGBColor(0, 0, 0, 1);
const white_value = new RGBColor(255, 255, 255, 1);
const color_value = new RGBColor(191, 107, 29, 0.67);

test("RGB Init", () => {
  expect(color_value.red).toBe(191);
  expect(color_value.green).toBe(107);
  expect(color_value.blue).toBe(29);
  expect(color_value.alpha).toBe(0.67);
});

// CMYK

test("RGB to CMYK (black)", () => {
  const {cyan, magenta, yellow, black} = black_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(1);
});

test("RGB to CMYK (white)", () => {
  const {cyan, magenta, yellow, black} = white_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0);
});

test("RGB to CMYK (color)", () => {
  const {cyan, magenta, yellow, black} = color_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0.44);
  expect(TestUtility.toPrecision(yellow)).toBe(0.85);
  expect(TestUtility.toPrecision(black)).toBe(0.25);
});

// Hex

test("RGB to Hex (black)", () => {
  const hex = black_value.toHex();
  
  expect(hex.getRedString()).toBe("00");
  expect(hex.getGreenString()).toBe("00");
  expect(hex.getBlueString()).toBe("00");
});

test("RGB to Hex (white)", () => {
  const hex = white_value.toHex();
  
  expect(hex.getRedString()).toBe("ff");
  expect(hex.getGreenString()).toBe("ff");
  expect(hex.getBlueString()).toBe("ff");
});

test("RGB to Hex (color)", () => {
  const hex = color_value.toHex();
  
  expect(hex.getRedString()).toBe("bf");
  expect(hex.getGreenString()).toBe("6b");
  expect(hex.getBlueString()).toBe("1d");
  expect(hex.getAlphaString()).toBe("ab");
});

// HSL

test("RGB to HSL (black)", () => {
  const {hue, saturation, lightness} = black_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(0);
});

test("RGB to HSL (white)", () => {
  const {hue, saturation, lightness} = white_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(1);
});

test("RGB to HSL (color)", () => {
  const {hue, saturation, lightness} = color_value.toHSL();
  
  expect(Math.round(hue)).toBe(29);
  expect(TestUtility.toPrecision(saturation)).toBe(0.74);
  expect(TestUtility.toPrecision(lightness)).toBe(0.43);
});

// HSV

test("RGB to HSV (black)", () => {
  const {hue, saturation, value} = black_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(0);
});

test("RGB to HSV (white)", () => {
  const {hue, saturation, value} = white_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(1);
});

test("RGB to HSV (color)", () => {
  const {hue, saturation, value} = color_value.toHSV();
  
  expect(Math.round(hue)).toBe(29);
  expect(TestUtility.toPrecision(saturation)).toBe(0.85);
  expect(TestUtility.toPrecision(value)).toBe(0.75);
});

// HWB

test("RGB to HWB (black)", () => {
  const {hue, whiteness, blackness} = black_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(0);
  expect(TestUtility.toPrecision(blackness)).toBe(1);
});

test("RGB to HWB (white)", () => {
  const {hue, whiteness, blackness} = white_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(1);
  expect(TestUtility.toPrecision(blackness)).toBe(0);
});

test("RGB to HWB (color)", () => {
  const {hue, whiteness, blackness} = color_value.toHWB();
  
  expect(Math.round(hue)).toBe(29);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.11);
  expect(TestUtility.toPrecision(blackness)).toBe(0.25);
});

