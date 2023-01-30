import {CMYKColor} from "../src";
import {TestUtility} from "./TestUtility";

const black_value = new CMYKColor(0, 0, 0, 1, 1);
const white_value = new CMYKColor(0, 0, 0, 0, 1);
const color_value = new CMYKColor(0.71, 0, 0.36, 0.37, 0.5);

test("CMYK Init", () => {
  const {cyan, magenta, yellow, black, alpha} = color_value;
  
  expect(cyan).toBe(0.71);
  expect(magenta).toBe(0);
  expect(yellow).toBe(0.36);
  expect(black).toBe(0.37);
  expect(alpha).toBe(0.5);
});

// Hex

test("CMYK to Hex (black)", () => {
  const hex = black_value.toHex();
  
  expect(hex.getRedString()).toBe("00");
  expect(hex.getGreenString()).toBe("00");
  expect(hex.getBlueString()).toBe("00");
});

test("CMYK to Hex (white)", () => {
  const hex = white_value.toHex();
  
  expect(hex.getRedString()).toBe("ff");
  expect(hex.getGreenString()).toBe("ff");
  expect(hex.getBlueString()).toBe("ff");
});

test("CMYK to Hex (color)", () => {
  const hex = color_value.toHex();
  
  expect(hex.getRedString()).toBe("2f");
  expect(hex.getGreenString()).toBe("a1");
  expect(hex.getBlueString()).toBe("67");
  expect(hex.getAlphaString()).toBe("80");
});

// HSL

test("CMYK to HSL (black)", () => {
  const {hue, saturation, lightness} = black_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(0);
});

test("CMYK to HSL (white)", () => {
  const {hue, saturation, lightness} = white_value.toHSL();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(lightness)).toBe(1);
});

test("CMYK to HSL (color)", () => {
  const {hue, saturation, lightness} = color_value.toHSL();
  
  expect(Math.round(hue)).toBe(150);
  expect(TestUtility.toPrecision(saturation)).toBe(0.55);
  expect(TestUtility.toPrecision(lightness)).toBe(0.41);
});

// HSV

test("CMYK to HSV (black)", () => {
  const {hue, saturation, value} = black_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(0);
});

test("CMYK to HSV (white)", () => {
  const {hue, saturation, value} = white_value.toHSV();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(saturation)).toBe(0);
  expect(TestUtility.toPrecision(value)).toBe(1);
});

test("CMYK to HSV (color)", () => {
  const {hue, saturation, value} = color_value.toHSV();
  
  expect(Math.round(hue)).toBe(150);
  expect(TestUtility.toPrecision(saturation)).toBe(0.71);
  expect(TestUtility.toPrecision(value)).toBe(0.63);
});

// HWB

test("CMYK to HWB (black)", () => {
  const {hue, whiteness, blackness} = black_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(0);
  expect(TestUtility.toPrecision(blackness)).toBe(1);
});

test("CMYK to HWB (white)", () => {
  const {hue, whiteness, blackness} = white_value.toHWB();
  
  expect(Math.round(hue)).toBe(0);
  expect(TestUtility.toPrecision(whiteness)).toBe(1);
  expect(TestUtility.toPrecision(blackness)).toBe(0);
});

test("CMYK to HWB (color)", () => {
  const {hue, whiteness, blackness} = color_value.toHWB();
  
  expect(Math.round(hue)).toBe(150);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.18);
  expect(TestUtility.toPrecision(blackness)).toBe(0.37);
});

// RGB

test("CMYK to RGB (black)", () => {
  const {red, green, blue} = black_value.toRGB();
  
  expect(Math.round(red)).toBe(0);
  expect(Math.round(green)).toBe(0);
  expect(Math.round(blue)).toBe(0);
});

test("CMYK to RGB (white)", () => {
  const {red, green, blue} = white_value.toRGB();
  
  expect(Math.round(red)).toBe(255);
  expect(Math.round(green)).toBe(255);
  expect(Math.round(blue)).toBe(255);
});

test("CMYK to RGB (color)", () => {
  const {red, green, blue} = color_value.toRGB();
  
  expect(Math.round(red)).toBe(47);
  expect(Math.round(green)).toBe(161);
  expect(Math.round(blue)).toBe(103);
});
