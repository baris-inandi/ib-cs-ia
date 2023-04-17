import { Modal } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useEffect, useState } from "react";
import getOS from "../../lib/utils/getOS";
import AppKbd from "./AppKbd";

const GLOBAL_HELP_KEY = "H";

export interface HotkeyItemWithContext {
    help: string;
    hotkey: string;
    hotkeyDisplay?: string;
    callback: (event: KeyboardEvent) => void;
}

export interface HotkeysProps {
    hotkeys: Array<HotkeyItemWithContext>;
    appletTitle: string;
}

const hotkeyFormat = (hotkey: string) => {
    const osSpecificMod = getOS() == "macos" ? "⌘" : "Ctrl";
    return hotkey
        .replace("mod", osSpecificMod)
        .replace("Mod", osSpecificMod)
        .replace("MOD", osSpecificMod);
};

const Hotkeys: React.FC<HotkeysProps> = (props) => {
    const [helpVisible, setHelpVisible] = useState(false);

    useHotkeys(
        props.hotkeys.map((hotkey) => {
            return [hotkey.hotkey, hotkey.callback];
        }),
    );
    useHotkeys([
        [
            "h",
            () => {
                setHelpVisible(!helpVisible);
            },
        ],
    ]);
    const [hotkeys, setHotkeys] = useState(props.hotkeys);
    useEffect(() => {
        setHotkeys([
            {
                help: "Show/hide hotkey cheat sheet",
                hotkey: GLOBAL_HELP_KEY,
                callback: () => {
                    setHelpVisible(!helpVisible);
                },
            },
            ...props.hotkeys,
        ]);
    }, [props.hotkeys, helpVisible]);
    if (!helpVisible) return null;
    return (
        <Modal
            trapFocus={false}
            opened={helpVisible}
            shadow="lg"
            onClose={() => setHelpVisible(false)}
            title={props.appletTitle}
        >
            <div className="flex select-none flex-col gap-2">
                {hotkeys.map((hotkey) => (
                    <div
                        key={hotkey.hotkey}
                        className="flex w-full justify-between"
                    >
                        {hotkey.help}
                        <div
                            className="inline-block cursor-pointer"
                            onClick={() => {
                                hotkey.callback(
                                    new KeyboardEvent(hotkey.hotkey),
                                );
                            }}
                        >
                            <AppKbd
                                content={hotkeyFormat(
                                    hotkey.hotkeyDisplay ??
                                        hotkey.hotkey,
                                )}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

export default Hotkeys;
