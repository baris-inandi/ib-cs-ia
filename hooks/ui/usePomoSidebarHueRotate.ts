import { useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { hexToHSL } from "../../lib/utils/hexToHSL";
import { usePomoThemeIfInPomoApplet } from "../applets/pomo/usePomoThemeIfInPomoApplet";

export const usePomoSidebarHueRotate = () => {
    const [documentHue, setDocumentHue] = useState(0);
    const [documentHueNegative, setDocumentHueNegative] = useState(0);
    const pomoThemeIfInPomoApplet = usePomoThemeIfInPomoApplet();
    const theme = useMantineTheme();

    useEffect(() => {
        if (pomoThemeIfInPomoApplet) {
            const hex = theme.colors[pomoThemeIfInPomoApplet][7];
            const { h } = hexToHSL(hex);
            const newHue = h - hexToHSL(theme.colors["gray"][7]).h;
            setDocumentHue(newHue);
            setDocumentHueNegative(-newHue);
        } else {
            setDocumentHue(0);
            setDocumentHueNegative(0);
        }
    }, [pomoThemeIfInPomoApplet, theme.colors]);

    return [documentHue, documentHueNegative];
};

