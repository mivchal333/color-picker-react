export const toRgb = (cmyk) => {
    let result = {};

    let c = cmyk.c / 100;
    let m = cmyk.m / 100;
    let y = cmyk.y / 100;
    let k = cmyk.k / 100;

    result.r = 1 - Math.min(1, c * (1 - k) + k);
    result.g = 1 - Math.min(1, m * (1 - k) + k);
    result.b = 1 - Math.min(1, y * (1 - k) + k);

    result.r = Math.round(result.r * 255);
    result.g = Math.round(result.g * 255);
    result.b = Math.round(result.b * 255);

    return result;
}

export const toCmyk = (rgb) => {
    let result = {}

    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    result.k = Math.min(1 - r, 1 - g, 1 - b);
    result.c = (1 - r - result.k) / (1 - result.k);
    result.m = (1 - g - result.k) / (1 - result.k);
    result.y = (1 - b - result.k) / (1 - result.k);

    result.c = Math.round(result.c * 100);
    result.m = Math.round(result.m * 100);
    result.y = Math.round(result.y * 100);
    result.k = Math.round(result.k * 100);

    return result;

}