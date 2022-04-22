import colorConverter from 'color-convert'
import { TtfCmyk, TtfHsl } from "../../../commons/src/model/Color"

export function convert(color: TtfCmyk): TtfHsl  {
    const colorToConvert: TtfCmyk = color;
    const convertedColor = colorConverter.cmyk.hsl([colorToConvert.cyan,colorToConvert.magenta,colorToConvert.yellow,colorToConvert.black]);;
    return { hue:convertedColor[0], saturation:convertedColor[1], lightness:convertedColor[2] } as TtfHsl;
}
