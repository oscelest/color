import {HSLColor} from "../src";
import {TestUtility} from "./TestUtility";

const black_value = new HSLColor(0, 0, 0, 0);
const white_value = new HSLColor(0, 0, 1, 0);
const color_value = new HSLColor(180, 0.33, 0.66, 0.3);

test("HSL Init", () => {
  expect(color_value.hue).toBe(180);
  expect(color_value.saturation).toBe(0.33);
  expect(color_value.lightness).toBe(0.66);
  expect(color_value.alpha).toBe(0.3);
});

// CMYK

test("HSL to CMYK (black)", () => {
  const {cyan, magenta, yellow, black} = black_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(1);
});

test("HSL to CMYK (white)", () => {
  const {cyan, magenta, yellow, black} = white_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0);
});

test("HSL to CMYK (color)", () => {
  const {cyan, magenta, yellow, black} = color_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.29);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0.23);
});

// Hex

test("HSL to Hex (black)", () => {
  const hex = black_value.toHex();
  
  expect(hex.getRedString()).toBe("00");
  expect(hex.getGreenString()).toBe("00");
  expect(hex.getBlueString()).toBe("00");
});

test("HSL to Hex (white)", () => {
  const hex = white_value.toHex();
  
  expect(hex.getRedString()).toBe("ff");
  expect(hex.getGreenString()).toBe("ff");
  expect(hex.getBlueString()).toBe("ff");
});

test("HSL to Hex (color)", () => {
  const hex = color_value.toHex();
  
  expect(hex.getRedString()).toBe("8c");
  expect(hex.getGreenString()).toBe("c5");
  expect(hex.getBlueString()).toBe("c5");
  expect(hex.getAlphaString()).toBe("4d");
});

// HSV

test("HSL to HSV (black)", () => {
  const {hue, saturation, value} = black_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(0);
});

test("HSL to HSV (white)", () => {
  const {hue, saturation, value} = white_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(1);
});

test("HSL to HSV (color)", () => {
  const {hue, saturation, value} = color_value.toHSV();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(saturation)).toBe(0.29);
  expect(TestUtility.toPrecision(value)).toBe(0.77);
});

// HWB

test("HSL to HWB (black)", () => {
  const {hue, whiteness, blackness} = black_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(0);
  expect(TestUtility.toPrecision(blackness)).toBe(1);
});

test("HSL to HWB (white)", () => {
  const {hue, whiteness, blackness} = white_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(1);
  expect(TestUtility.toPrecision(blackness)).toBe(0);
});

test("HSL to HWB (color)", () => {
  const {hue, whiteness, blackness} = color_value.toHWB();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.55);
  expect(TestUtility.toPrecision(blackness)).toBe(0.23);
});

// RGB

test("HSL to RGB (black)", () => {
  const {red, green, blue} = black_value.toRGB();
  
  expect(Math.round(red)).toBe(0);
  expect(Math.round(green)).toBe(0);
  expect(Math.round(blue)).toBe(0);
});

test("HSL to RGB (white)", () => {
  const {red, green, blue} = white_value.toRGB();
  
  expect(Math.round(red)).toBe(255);
  expect(Math.round(green)).toBe(255);
  expect(Math.round(blue)).toBe(255);
});

test("HSL to RGB (color)", () => {
  const {red, green, blue} = color_value.toRGB();
  
  expect(Math.round(red)).toBe(140);
  expect(Math.round(green)).toBe(197);
  expect(Math.round(blue)).toBe(197);
});
