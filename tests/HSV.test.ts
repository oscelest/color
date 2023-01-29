import {HSV} from "../src";

test("HSV (no alpha) Init", () => {
  const color = new HSV(180, 0.5, 0.5);
  expect(color.toString()).toBe(`hsv(180deg, 50%, 50%)`);
});
