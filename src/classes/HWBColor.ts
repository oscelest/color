import {HexColor} from "./HexColor";
import {HSVColor} from "./HSVColor";

export class HWBColor {
  
  public readonly hue: number;
  public readonly whiteness: number;
  public readonly blackness: number;
  public readonly alpha: number;
  
  constructor(hue: number, whiteness: number, blackness: number, alpha: number = 1) {
    if (hue < 0 || hue > 360) throw new Error("Hue value must be a number between 0 and 360");
    this.hue = hue;
    
    if (whiteness < 0 || whiteness > 1) throw new Error("Whiteness value must be a number between 0 and 1");
    this.whiteness = whiteness;
    
    if (blackness < 0 || blackness > 1) throw new Error("Blackness value must be a number between 0 and 1");
    this.blackness = blackness;
    
    if (alpha < 0 || alpha > 1) throw new Error("Alpha channel must be a number between 0 and 1");
    this.alpha = alpha;
  }
  
  public toString(): string {
    return this.alpha === 1 ? this.toHWBString() : this.toHWBAString();
  }
  
  public toHWBString() {
    return `hwb(${this.hue}deg, ${this.whiteness * 100}%, ${this.blackness * 100}%)`;
  }
  
  public toHWBAString() {
    return `hwba(${this.hue}deg, ${this.whiteness * 100}%, ${this.blackness * 100}%, ${this.alpha})`;
  }
  
  public toHex(): HexColor {
    return this.toRGB().toHex();
  }
  
  public toRGB() {
    return this.toHSV().toRGB();
  }
  
  public toHSV() {
    const saturation = 1 - this.whiteness / (1 - this.blackness);
    const value = 1 - this.blackness;
  
    return new HSVColor(this.hue, saturation, value);
  }
  
  public toHSL() {
    return this.toHSV().toHSL();
  }
  
  public toCMYK() {
    return this.toRGB().toCMYK();
  }
}
