import { useAtom } from "jotai";
import { GetServerSidePropsContext } from "next";
import AppLayout from "../../components/AppLayout/AppLayout";
import applets from "../../lib/applets/global/applets";
import { activeAppletAtom } from "../../lib/global.atom";

interface AppletProps {
  appletId: string;
}

const Applet: React.FC<AppletProps> = (props) => {
  const [, setActiveApplet] = useAtom(activeAppletAtom);
  const applet =
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
  const appletExists = Array.from(applets.keys()).includes(
    appletId as string,
  );
  if (appletExists) {
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

export default Applet;
