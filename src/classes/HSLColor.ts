import {HSL2RGBDecimalType} from "../enums";
import {HSVColor} from "./HSVColor";
import {RGBColor} from "./RGBColor";

export class HSLColor {
  
  public readonly hue: number;
  public readonly saturation: number;
  public readonly lightness: number;
  public readonly alpha: number;
  
  constructor(hue: number, saturation: number, lightness: number, alpha: number = 1) {
    if (hue < 0 || hue > 360) throw new Error("Hue value must be a number between 0 and 360");
    this.hue = hue;
  
    if (saturation < 0 || saturation > 1) throw new Error("Saturation value must be a number between 0 and 1");
    this.saturation = saturation;
  
    if (lightness < 0 || lightness > 1) throw new Error("Lightness value must be a number between 0 and 1");
    this.lightness = lightness;
  
    this.alpha = alpha;
  }
  
  public equalTo(value: HSLColor) {
    return this.hue === value.hue && this.saturation === value.saturation && this.lightness === value.lightness && this.alpha === value.alpha;
  }
  
  public toString(): string {
    return this.alpha === 1 ? this.toHSLString() : this.toHSLAString();
  }
  
  public toHSLString() {
    return `hsl(${this.hue}deg, ${this.saturation * 100}%, ${this.lightness * 100}%)`;
  }
  
  public toHSLAString() {
    return `hsla(${this.hue}deg, ${this.saturation * 100}%, ${this.lightness * 100}%, ${this.alpha})`;
  }
  
  public toHex() {
    return this.toRGB().toHex();
  }
  
  public toRGB(): RGBColor {
    const red = this.toRGBDecimal(HSL2RGBDecimalType.RED);
    const green = this.toRGBDecimal(HSL2RGBDecimalType.GREEN);
    const blue = this.toRGBDecimal(HSL2RGBDecimalType.BLUE);
    
    return new RGBColor(red * 255, green * 255, blue * 255, this.alpha);
  }
  
  public toHSV() {
    const value = this.lightness + this.saturation * Math.min(this.lightness, 1 - this.lightness);
    const saturation = value !== 0 ? 2 * (1 - this.lightness / value) : 0;
  
    return new HSVColor(this.hue, saturation, value, this.alpha);
  }
  
  public toHWB() {
    return this.toHSV().toHWB();
  }
  
  public toCMYK() {
    return this.toRGB().toCMYK();
  }
  
  private toRGBDecimal(n: HSL2RGBDecimalType): number {
    const k = (n + this.hue / 30) % 12;
    const a = this.saturation * Math.min(this.lightness, 1 - this.lightness);
    
    return this.lightness - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  }
}
