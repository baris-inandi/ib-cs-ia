import { useAtom } from "jotai";
import { GetServerSidePropsContext } from "next";
import AppLayout from "../../components/AppLayout/AppLayout";
import { appletExists } from "../../lib/applets/global/appletExists";
import applets from "../../lib/applets/global/applets";
import { activeAppletAtom } from "../../lib/global.atom";

interface AppletPageProps {
    appletId: string;
}

const AppletPage: React.FC<AppletPageProps> = (props) => {
    const [, setActiveApplet] = useAtom(activeAppletAtom);

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
    if (_appletExists) {
        return {
            props: {
                appletId: appletId as string,
            },
        };
    }
    return {
        notFound: true,
    };
};

export default AppletPage;

