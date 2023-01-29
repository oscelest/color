import {HSV2RGBDecimalType} from "../enums";
import {HSL} from "./HSL";
import {HWB} from "./HWB";
import {RGB} from "./RGB";

export class HSV {
  
  public hue: number;
  public saturation: number;
  public value: number;
  public alpha: number;
  
  constructor(hue: number, saturation: number, value: number, alpha: number = 1) {
    if (hue < 0 || hue > 360) throw new Error("Hue value must be a number between 0 and 360");
    this.hue = hue;
    
    if (saturation < 0 || saturation > 1) throw new Error("Saturation value must be a number between 0 and 1");
    this.saturation = saturation;
    
    if (value < 0 || value > 1) throw new Error("Value must be a number between 0 and 1");
    this.value = value;
    
    this.alpha = alpha;
  }
  
  public toString(): string {
    return `hsv(${this.hue}deg, ${this.saturation * 100}%, ${this.value * 100}%)`;
  }
  
  public toHex() {
    return this.toRGB().toHex();
  }
  
  public toRGB(): RGB {
    const red = this.toRGBDecimal(HSV2RGBDecimalType.RED);
    const green = this.toRGBDecimal(HSV2RGBDecimalType.GREEN);
    const blue = this.toRGBDecimal(HSV2RGBDecimalType.BLUE);
    
    return new RGB(red, green, blue);
  }
  
  private toRGBDecimal(n: HSV2RGBDecimalType): number {
    const k = (n + this.hue / 60) % 6;
    
    return this.value - this.value * this.saturation * Math.max(Math.min(k, 4 - k, 1), 0);
  }
  
  public toHSL() {
    const lightness = this.value * (1 - this.saturation / 2);
    const saturation = lightness !== 0 && lightness !== 1 ? (this.value - lightness) / Math.min(lightness, 1 - lightness) : 0;
    
    return new HSL(this.hue, saturation, lightness);
  }
  
  public toHWB() {
    const whiteness = this.value * (1 - this.saturation);
    const blackness = 1 - this.value;
    
    return new HWB(this.hue, whiteness, blackness);
  }
  
  public toCMYK() {
    return this.toRGB().toCMYK();
  }
}
