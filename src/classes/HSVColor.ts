import {HSV2RGBDecimalType} from "../enums";
import {HSLColor} from "./HSLColor";
import {HWBColor} from "./HWBColor";
import {RGBColor} from "./RGBColor";

export class HSVColor {
  
  public readonly hue: number;
  public readonly saturation: number;
  public readonly value: number;
  public readonly alpha: number;
  
  constructor(hue: number, saturation: number, value: number, alpha: number = 1) {
    if (hue < 0 || hue > 360) throw new Error("Hue value must be a number between 0 and 360");
    this.hue = hue;
  
    if (saturation < 0 || saturation > 1) throw new Error("Saturation value must be a number between 0 and 1");
    this.saturation = saturation;
  
    if (value < 0 || value > 1) throw new Error("Value must be a number between 0 and 1");
    this.value = value;
  
    this.alpha = alpha;
  }
  
  public equalTo(value: HSVColor) {
    return this.hue === value.hue && this.saturation === value.saturation && this.value === value.value && this.alpha === value.alpha;
  }
  
  public toString(): string {
    return this.alpha === 1 ? this.toHSVString() : this.toHSVAString();
  }
  
  public toHSVString() {
    return `hsv(${this.hue}deg, ${this.saturation * 100}%, ${this.value * 100}%)`;
  }
  
  public toHSVAString() {
    return `hsva(${this.hue}deg, ${this.saturation * 100}%, ${this.value * 100}%, ${this.alpha})`;
  }
  
  public toHex() {
    return this.toRGB().toHex();
  }
  
  public toRGB(): RGBColor {
    const red = this.toRGBDecimal(HSV2RGBDecimalType.RED);
    const green = this.toRGBDecimal(HSV2RGBDecimalType.GREEN);
    const blue = this.toRGBDecimal(HSV2RGBDecimalType.BLUE);
    
    return new RGBColor(red * 255, green * 255, blue * 255, this.alpha);
  }
  
  private toRGBDecimal(n: HSV2RGBDecimalType): number {
    const k = (n + this.hue / 60) % 6;
    
    return this.value - this.value * this.saturation * Math.max(Math.min(k, 4 - k, 1), 0);
  }
  
  public toHSL() {
    const lightness = this.value * (1 - this.saturation / 2);
    const saturation = lightness !== 0 && lightness !== 1 ? (this.value - lightness) / Math.min(lightness, 1 - lightness) : 0;
  
    return new HSLColor(this.hue, saturation, lightness);
  }
  
  public toHWB() {
    const whiteness = this.value * (1 - this.saturation);
    const blackness = 1 - this.value;
  
    return new HWBColor(this.hue, whiteness, blackness);
  }
  
  public toCMYK() {
    return this.toRGB().toCMYK();
  }
}
