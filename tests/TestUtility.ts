export module TestUtility {
  
  export function toPrecision(value: number, precision: number = 2): number {
    return Number(Math.round(parseFloat(value + "e" + precision)) + "e-" + precision);
  }
  
}
