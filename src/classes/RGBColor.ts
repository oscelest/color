import {CMYKColor} from "./CMYKColor";
import {HexColor} from "./HexColor";
import {HSLColor} from "./HSLColor";
import {HSVColor} from "./HSVColor";
import {HWBColor} from "./HWBColor";

export class RGBColor {
  
  public readonly red: number;
  public readonly green: number;
  public readonly blue: number;
  public readonly alpha: number;
  
  constructor(red: number, green: number, blue: number, alpha: number = 1) {
    if (red < 0 || red > 255) throw new Error("Red color must be a number between 0 and 255");
    this.red = red;
  
    if (green < 0 || green > 255) throw new Error("Green color must be a number between 0 and 255");
    this.green = green;
  
    if (blue < 0 || blue > 255) throw new Error("Blue color must be a number between 0 and 255");
    this.blue = blue;
  
    if (alpha < 0 || alpha > 1) throw new Error("Alpha channel must be a number between 0 and 1");
    this.alpha = alpha;
  }
  
  public equalTo(value: RGBColor) {
    return this.red === value.red && this.green === value.green && this.blue === value.blue && this.alpha === value.alpha;
  }
  
  public toString(): string {
    return this.alpha === 1 ? this.toRGBString() : this.toRGBAString();
  }
  
  public toRGBString() {
    return `rgb(${this.red.toFixed(0)}, ${this.green.toFixed(0)}, ${this.blue.toFixed(0)})`;
  }
  
  public toRGBAString() {
    return `rgba(${this.red.toFixed(0)}, ${this.green.toFixed(0)}, ${this.blue.toFixed(0)}, ${this.alpha})`;
  }
  
  public toHex(): HexColor {
    const red = Math.round(this.red).toString(16).padStart(2, "0");
    const blue = Math.round(this.blue).toString(16).padStart(2, "0");
    const green = Math.round(this.green).toString(16).padStart(2, "0");
    const alpha = Math.round(this.alpha * 255).toString(16).padStart(2, "0");
    return new HexColor(`#${red}${green}${blue}${alpha}`);
  }
  
  public toHSV() {
    const value = Math.max(this.red, this.green, this.blue);
    const chroma = value - Math.min(this.red, this.green, this.blue);
    const hue = this.getHue(value, chroma);
    const saturation = value !== 0 ? chroma / value : 0;
  
    return new HSVColor(hue, saturation, value / 255, this.alpha);
  }
  
  public toHSL() {
    const value = Math.max(this.red, this.green, this.blue);
    const chroma = value - Math.min(this.red, this.green, this.blue);
    const lightness = value - chroma / 2;
    const hue = this.getHue(value, chroma);
    const saturation = lightness !== 0 && lightness !== 255 ? (value - lightness) / Math.min(lightness, 255 - lightness) : 0;
  
    return new HSLColor(hue, saturation, lightness / 255, this.alpha);
  }
  
  public toHWB() {
    const value = Math.max(this.red, this.green, this.blue);
    const whiteness = Math.min(this.red, this.green, this.blue);
    const chroma = value - whiteness;
    const blackness = 255 - value;
    const hue = this.getHue(value, chroma);
  
    return new HWBColor(hue, whiteness / 255, blackness / 255, this.alpha);
  }
  
  private getHue(value: number, chroma: number): number {
    if (chroma === 0) return 0;
    
    let hue: number;
    if (value === this.red) {
      hue = (this.green - this.blue) / chroma;
    }
    else if (value === this.green) {
      hue = 2 + (this.blue - this.red) / chroma;
    }
    else if (value === this.blue) {
      hue = 4 + (this.red - this.green) / chroma;
    }
    else {
      hue = 0;
    }
    
    return 60 * (hue < 0 ? hue + 6 : hue);
  }
  
  public toCMYK() {
    const black = 255 - Math.max(this.red, this.green, this.blue);
    const cyan = (255 - this.red - black) / Math.max(1, 255 - black);
    const magenta = (255 - this.green - black) / Math.max(1, 255 - black);
    const yellow = (255 - this.blue - black) / Math.max(1, 255 - black);
  
    return new CMYKColor(cyan, magenta, yellow, black / 255, this.alpha);
  }
}
