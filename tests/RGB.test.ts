import {RGB} from "../src";

test("RGB (no alpha) Init", () => {
  const color = new RGB(125, 125, 125);
  expect(color.toString()).toBe(`rgb(125, 125, 125)`);
});
