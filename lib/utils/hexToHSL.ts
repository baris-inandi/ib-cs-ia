export interface HSLColor {
    h: number;
    s: number;
    l: number;
}

export const hexToHSL = (hex: string): HSLColor => {
    // Remove the '#' symbol if it exists
    hex = hex.replace("#", "");

    // Check if the input is a valid hexadecimal color code
    const validHexRegex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!validHexRegex.test(hex)) {
        console.error("Invalid hexadecimal color code.");
        return { h: 0, s: 0, l: 0 };
    }

    // Parse the hexadecimal values to RGB components
    let r: number, g: number, b: number;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
    }

    // Normalize the RGB values to the range [0, 1]
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    // Find the maximum and minimum values among RGB components
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);

    // Calculate the lightness (L) value
    const l = (max + min) / 2;

    // If max and min are equal, then it's a shade of gray (Saturation is 0)
    if (max === min) {
        return { h: 0, s: 0, l };
    }

    // Calculate the saturation (S) value
    let s = (max - min) / (1 - Math.abs(2 * l - 1));

    // Calculate the hue (H) value
    let h: number;
    switch (max) {
        case rNorm:
            h = (gNorm - bNorm) / (6 * s) + (gNorm < bNorm ? 1 : 0);
            break;
        case gNorm:
            h = (bNorm - rNorm) / (6 * s) + 1 / 3;
            break;
        case bNorm:
            h = (rNorm - gNorm) / (6 * s) + 2 / 3;
            break;
        default:
            h = 0;
            break;
    }

    // Adjust the hue if it's negative
    if (h < 0) h += 1;
    // Round H, S, L to two decimal places and return as an object
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
};

