import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";
import { useAtom } from "jotai";
import React, { ReactNode } from "react";
import spotlightActionsAtom from "../../lib/utils/spotlightActions";

interface Props {
    children: React.ReactNode;
}

const AppSpotlightProvider: React.FC<Props> = (props) => {
    let [spotlightActions] = useAtom(spotlightActionsAtom);

    return (
        <SpotlightProvider
            limit={8}
            placeholder="Search"
            searchIcon={
                (<IconSearch size={18} />) as unknown as ReactNode
            }
            shortcut={["mod + P", "mod + K", "."]}
            highlightQuery
            transitionDuration={200}
            transition="scale"
            actions={spotlightActions as SpotlightAction[]}
        >
            {props.children}
        </SpotlightProvider>
    );
};

export default AppSpotlightProvider;
