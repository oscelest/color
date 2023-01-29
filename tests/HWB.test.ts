import {HWB} from "../src";

test("HWB (no alpha) Init", () => {
  const color = new HWB(180, 0.5, 0.5);
  expect(color.toString()).toBe(`hwb(180deg, 50%, 50%)`);
});
