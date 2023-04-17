import { useAtom } from "jotai";
import { GetServerSidePropsContext } from "next";
import AppLayout from "../../components/AppLayout/AppLayout";
import AppletRestoreHandler from "../../components/global/AppletRestoreHandler";
import { RESTORE_APPLET } from "../../constants";
import { appletExists } from "../../lib/applets/global/appletExists";
import applets from "../../lib/applets/global/applets";
import { activeAppletAtom } from "../../lib/global.atom";

interface AppletPageProps {
    restoreRequested: boolean;
    appletId: string;
}

const AppletPage: React.FC<AppletPageProps> = (props) => {
    const [, setActiveApplet] = useAtom(activeAppletAtom);

    if (props.restoreRequested) {
        return <AppletRestoreHandler />;
    }

    let applet =
        applets.get(props.appletId) ?? applets.keys().next().value;

    setActiveApplet(applet);

    return (
        <AppLayout>
            <applet.FC />
        </AppLayout>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const { appletId } = context.query;
    const _appletExists = appletExists(appletId as string);
    if (_appletExists || appletId === RESTORE_APPLET) {
        return {
            props: {
                restoreRequested: appletId === RESTORE_APPLET,
                appletId: appletId as string,
            },
        };
    }
    return {
        notFound: true,
    };
};

export default AppletPage;
