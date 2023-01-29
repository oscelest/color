import {Hex} from "../src";

test("Hex (no alpha) Init", () => {
  const color = new Hex("#7d7d7d");
  expect(color.toString()).toBe(`#7d7d7d`);
});
