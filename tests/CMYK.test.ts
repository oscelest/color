import {CMYKColor} from "../src";
import {TestUtility} from "./TestUtility";

test("CMYK (no alpha) Init", () => {
  const {cyan, magenta, yellow, black} = new CMYKColor(0.8, 0.3, 0.55, 0.1);
  
  expect(cyan).toBe(0.8);
  expect(magenta).toBe(0.3);
  expect(yellow).toBe(0.55);
  expect(black).toBe(0.1);
});

test("CMYK (alpha) Init", () => {
  const {cyan, magenta, yellow, black, alpha} = new CMYKColor(0.8, 0.3, 0.55, 0.1, 0.5);
  
  expect(cyan).toBe(0.8);
  expect(magenta).toBe(0.3);
  expect(yellow).toBe(0.55);
  expect(black).toBe(0.1);
  expect(alpha).toBe(0.5);
});

test("CMYK to Hex", () => {
  const cmyk = new CMYKColor(0.8, 0.3, 0.55, 0.1);
  const hex = cmyk.toHex();
  
  expect(hex.toString()).toBe("#2ea167");
});

test("CMYK to HSL", () => {
  const cmyk = new CMYKColor(0.8, 0.3, 0.55, 0.1);
  const {hue, saturation, lightness} = cmyk.toHSL();
  
  expect(Math.round(hue)).toBe(150);
  expect(TestUtility.toPrecision(saturation)).toBe(0.56);
  expect(TestUtility.toPrecision(lightness)).toBe(0.41);
});

test("CMYK to HSV", () => {
  const cmyk = new CMYKColor(0.8, 0.3, 0.55, 0.1);
  const {hue, saturation, value} = cmyk.toHSV();
  
  expect(Math.round(hue)).toBe(150);
  expect(TestUtility.toPrecision(saturation)).toBe(0.71);
  expect(TestUtility.toPrecision(value)).toBe(0.63);
});

test("CMYK to HWB", () => {
  const cmyk = new CMYKColor(0.8, 0.3, 0.55, 0.1);
  const {hue, whiteness, blackness} = cmyk.toHWB();
  
  expect(Math.round(hue)).toBe(150);
  expect(TestUtility.toPrecision(whiteness)).toBe(0.18);
  expect(TestUtility.toPrecision(blackness)).toBe(0.37);
});

test("CMYK to RGB", () => {
  const cmyk = new CMYKColor(0.8, 0.3, 0.55, 0.1);
  const {red, green, blue} = cmyk.toRGB();
  
  expect(Math.round(red)).toBe(46);
  expect(Math.round(green)).toBe(161);
  expect(Math.round(blue)).toBe(103);
});
