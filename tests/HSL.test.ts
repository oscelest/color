import {HSL} from "../src";

test("HSL (no alpha) Init", () => {
  const color = new HSL(180, 0.5, 0.5);
  expect(color.toString()).toBe(`hsl(180deg, 50%, 50%)`);
});
