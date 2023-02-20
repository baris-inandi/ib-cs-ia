import IPomoState from "../libPomoState/IPomoState";
import libPomoState from "../libPomoState/libPomoState";

const nextStage = (
  pomoState: IPomoState,
  setPomoState: (pomoState: IPomoState) => void,
) => {
  setPomoState(libPomoState.skipToNextStage(pomoState));
};

export default nextStage;
