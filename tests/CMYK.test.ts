import {CMYK} from "../src";

test("CMYK (no alpha) Init", () => {
  const color = new CMYK(0.5, 0.5, 0.5, 0.5);
  expect(color.toString()).toBe(`cmyk(50%, 50%, 50%, 50%)`);
});
