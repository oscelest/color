import {Hex} from "./Hex";
import {RGB} from "./RGB";

export class CMYK {
  
  public cyan: number;
  public magenta: number;
  public yellow: number;
  public black: number;
  public alpha: number;
  
  constructor(cyan: number, magenta: number, yellow: number, black: number, alpha: number = 1) {
    if (cyan < 0 || cyan > 1) throw new Error("Cyan color must be a number between 0 and 1");
    this.cyan = cyan;
    
    if (magenta < 0 || magenta > 1) throw new Error("Magenta color must be a number between 0 and 1");
    this.magenta = magenta;
    
    if (yellow < 0 || yellow > 1) throw new Error("Yellow color must be a number between 0 and 1");
    this.yellow = yellow;
    
    if (black < 0 || black > 1) throw new Error("Black color must be a number between 0 and 1");
    this.black = black;
    
    if (alpha < 0 || alpha > 1) throw new Error("Alpha channel must be a number between 0 and 1");
    this.alpha = alpha;
  }
  
  public toString(): string {
    return this.alpha >= 0 && this.alpha < 1
           ? `cmyk(${(this.cyan * 100)}%, ${this.magenta * 100}%, ${this.yellow * 100}%, ${this.black * 100}%, ${this.alpha})`
           : `cmyk(${(this.cyan * 100)}%, ${this.magenta * 100}%, ${this.yellow * 100}%, ${this.black * 100}%)`;
  }
  
  public toHex(): Hex {
    return this.toRGB().toHex();
  }
  
  public toRGB() {
    const red = 255 * (1 - this.cyan) * (1 - this.black);
    const green = 255 * (1 - this.magenta) * (1 - this.black);
    const blue = 255 * (1 - this.yellow) * (1 - this.black);
    
    return new RGB(red, green, blue, this.alpha);
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
}
