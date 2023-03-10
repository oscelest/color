import {RGBColor} from "./RGBColor";

export class HexColor {
  
  public readonly red: number;
  public readonly green: number;
  public readonly blue: number;
  public readonly alpha: number;
  
  constructor(value: string) {
    const start = value[0] === "#" ? 1 : 0;
    value = value.slice(start, start + 8);
    
    const red_part = value.slice(0, 2);
    const red = parseInt(red_part, 16);
    if (isNaN(red)) throw new Error(`Red color (character 1 and 2) of hex must be characters between 0-9 and a-f. '${red_part}' given.`);
    this.red = red;
    
    const green_part = value.slice(2, 4);
    const green = parseInt(green_part, 16);
    if (isNaN(green)) throw new Error(`Green color (character 3 and 4) of hex must be characters between 0-9 and a-f. '${green_part}' given.`);
    this.green = green;
    
    const blue_part = value.slice(4, 6);
    const blue = parseInt(blue_part, 16);
    if (isNaN(green)) throw new Error(`Blue color (character 5 and 6) of hex must be characters between 0-9 and a-f. '${blue_part}' given.`);
    this.blue = blue;
    
    const alpha_part = value.slice(6, 8);
    if (alpha_part.length) {
      const alpha = parseInt(alpha_part, 16);
      if (isNaN(alpha)) throw new Error(`Alpha channel (character 7 and 8) of hex must be characters between 0-9 and a-f. '${alpha_part}' given.`);
      this.alpha = alpha;
    }
    else {
      this.alpha = 255;
    }
  }
  
  public static sanitize(hex: string) {
    return `#${hex.replace(/[^A-F0-9]/gi, "").slice(0, 8).padEnd(6, "0").padEnd(8, "f").toLowerCase()}`;
  }
  
  public getRedString() {
    return this.red.toString(16).padStart(2, "0");
  }
  
  public getGreenString() {
    return this.green.toString(16).padStart(2, "0");
  }
  
  public getBlueString() {
    return this.blue.toString(16).padStart(2, "0");
  }
  
  public getAlphaString() {
    return this.alpha.toString(16).padStart(2, "0");
  }
  
  public equalTo(value: HexColor) {
    return this.red === value.red && this.green === value.green && this.blue === value.blue && this.alpha === value.alpha;
  }
  
  public toString(): string {
    return this.alpha === 255 ? this.toHexString() : this.toHexAString();
  }
  
  public toHexString() {
    return `#${this.getRedString()}${this.getGreenString()}${this.getBlueString()}`;
  }
  
  public toHexAString() {
    return `${this.toHexString()}${this.getAlphaString()}`;
  }
  
  public toRGB(): RGBColor {
    return new RGBColor(this.red, this.green, this.blue, this.alpha / 255);
  }
  
  public toHSV() {
    return this.toRGB().toHSV();
  }
  
  public toHSL() {
    return this.toRGB().toHSL();
  }
  
  public toHWB() {
    return this.toRGB().toHWB();
  }
  
  public toCMYK() {
    return this.toRGB().toCMYK();
  }
}
