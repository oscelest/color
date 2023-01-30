import {HWBColor} from "../src";
import {TestUtility} from "./TestUtility";

const black_value = new HWBColor(0, 0, 1, 1);
const white_value = new HWBColor(0, 1, 0, 1);
const color_value = new HWBColor(120, 0.1, 0.15, 0.55);

test("HWB Init", () => {
  expect(color_value.hue).toBe(120);
  expect(color_value.whiteness).toBe(0.10);
  expect(color_value.blackness).toBe(0.15);
  expect(color_value.alpha).toBe(0.55);
});

// CMYK

test("HWB to CMYK (black)", () => {
  const {cyan, magenta, yellow, black} = black_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(1);
});

test("HWB to CMYK (white)", () => {
  const {cyan, magenta, yellow, black} = white_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0);
  expect(TestUtility.toPrecision(black)).toBe(0);
});

test("HWB to CMYK (color)", () => {
  const {cyan, magenta, yellow, black} = color_value.toCMYK();
  
  expect(TestUtility.toPrecision(cyan)).toBe(0.88);
  expect(TestUtility.toPrecision(magenta)).toBe(0);
  expect(TestUtility.toPrecision(yellow)).toBe(0.88);
  expect(TestUtility.toPrecision(black)).toBe(0.15);
});

// Hex

test("HWB to Hex (black)", () => {
  const hex = black_value.toHex();
  
  expect(hex.getRedString()).toBe("00");
  expect(hex.getGreenString()).toBe("00");
  expect(hex.getBlueString()).toBe("00");
});

test("HWB to Hex (white)", () => {
  const hex = white_value.toHex();
  
  expect(hex.getRedString()).toBe("ff");
  expect(hex.getGreenString()).toBe("ff");
  expect(hex.getBlueString()).toBe("ff");
});

test("HWB to Hex (color)", () => {
  const hex = color_value.toHex();
  
  expect(hex.getRedString()).toBe("19");
  expect(hex.getGreenString()).toBe("d9");
  expect(hex.getBlueString()).toBe("19");
  expect(hex.getAlphaString()).toBe("8c");
});

// HSL

test("HWB to HSL (black)", () => {
  const {hue, saturation, lightness} = black_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(0);
});

test("HWB to HSL (white)", () => {
  const {hue, saturation, lightness} = white_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(1);
});

test("HWB to HSL (color)", () => {
  const {hue, saturation, lightness} = color_value.toHSL();
  
  expect(Math.round(hue)).toBe(120);
  expect(TestUtility.toPrecision(saturation)).toBe(0.79);
  expect(TestUtility.toPrecision(lightness)).toBe(0.48);
});

// HSV

test("HWB to HSV (black)", () => {
  const {hue, saturation, value} = black_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(0);
});

test("HWB to HSV (white)", () => {
  const {hue, saturation, value} = white_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(1);
});

test("HWB to HSV (color)", () => {
  const {hue, saturation, value} = color_value.toHSV();
  
  expect(Math.round(hue)).toBe(120);
  expect(TestUtility.toPrecision(saturation)).toBe(0.88);
  expect(TestUtility.toPrecision(value)).toBe(0.85);
});

// RGB

test("HWB to RGB (black)", () => {
  const {red, green, blue} = black_value.toRGB();
  
  expect(Math.round(red)).toBe(0);
  expect(Math.round(green)).toBe(0);
  expect(Math.round(blue)).toBe(0);
});

test("HWB to RGB (white)", () => {
  const {red, green, blue} = white_value.toRGB();
  
  expect(Math.round(red)).toBe(255);
  expect(Math.round(green)).toBe(255);
  expect(Math.round(blue)).toBe(255);
});

test("HWB to RGB (color)", () => {
  const {red, green, blue} = color_value.toRGB();
  
  expect(Math.round(red)).toBe(25);
  expect(Math.round(green)).toBe(217);
  expect(Math.round(blue)).toBe(25);
});

