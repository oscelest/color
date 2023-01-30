import {HSVColor} from "../src";
import {TestUtility} from "./TestUtility";

const black_value = new HSVColor(0, 0, 0, 1);
const white_value = new HSVColor(0, 0, 1, 1);
const color_value = new HSVColor(180, 0.33, 0.66, 0.8);

test("HSV Init", () => {
  expect(color_value.hue).toBe(180);
  expect(color_value.saturation).toBe(0.33);
  expect(color_value.value).toBe(0.66);
  expect(color_value.alpha).toBe(0.8);
});

// CMYK

test("HSV to CMYK", () => {
  const {cyan, magenta, yellow, black} = color_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.33);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0.34);
});

// Hex

test("HSV to Hex (black)", () => {
  const hex = black_value.toHex();
  
  expect(hex.getRedString()).toBe("00");
  expect(hex.getGreenString()).toBe("00");
  expect(hex.getBlueString()).toBe("00");
});

test("HSV to Hex (white)", () => {
  const hex = white_value.toHex();
  
  expect(hex.getRedString()).toBe("ff");
  expect(hex.getGreenString()).toBe("ff");
  expect(hex.getBlueString()).toBe("ff");
});

test("HSV to Hex", () => {
  const hex = color_value.toHex();
  
  expect(hex.getRedString()).toBe("71");
  expect(hex.getGreenString()).toBe("a8");
  expect(hex.getBlueString()).toBe("a8");
  expect(hex.getAlphaString()).toBe("cc");
});

// HSL

test("HSV to HSL (black)", () => {
  const {hue, saturation, lightness} = black_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(0);
});

test("HSV to HSL (white)", () => {
  const {hue, saturation, lightness} = white_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(1);
});

test("HSV to HSL", () => {
  const {hue, saturation, lightness} = color_value.toHSL();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(saturation)).toBe(0.24);
  expect(TestUtility.toPrecision(lightness)).toBe(0.55);
});

// HWB

test("HSV to HWB", () => {
  const {hue, whiteness, blackness} = color_value.toHWB();
  
  expect(Math.round(hue)).toBe(180);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.44);
  expect(TestUtility.toPrecision(blackness)).toBe(0.34);
});

test("HSV to HWB (black)", () => {
  const {hue, whiteness, blackness} = black_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(0);
  expect(TestUtility.toPrecision(blackness)).toBe(1);
});

test("HSV to HWB (white)", () => {
  const {hue, whiteness, blackness} = white_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(1);
  expect(TestUtility.toPrecision(blackness)).toBe(0);
});

// RGB

test("HSV to RGB (black)", () => {
  const {red, green, blue} = black_value.toRGB();
  
  expect(Math.round(red)).toBe(0);
  expect(Math.round(green)).toBe(0);
  expect(Math.round(blue)).toBe(0);
});

test("HSV to RGB (white)", () => {
  const {red, green, blue} = white_value.toRGB();
  
  expect(Math.round(red)).toBe(255);
  expect(Math.round(green)).toBe(255);
  expect(Math.round(blue)).toBe(255);
});

test("HSV to RGB", () => {
  const {red, green, blue} = color_value.toRGB();
  
  expect(Math.round(red)).toBe(113);
  expect(Math.round(green)).toBe(168);
  expect(Math.round(blue)).toBe(168);
});
