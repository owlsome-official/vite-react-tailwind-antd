import { Component } from "react";
import {
  BabelLoading,
  BatteryLoading,
  BlockLoading,
  BlockReserveLoading,
  BoxLoading,
  CircleLoading,
  CircleToBlockLoading,
  CoffeeLoading,
  CommonLoading,
  DisappearedLoading,
  HeartBoomLoading,
  JumpCircleLoading,
  LadderLoading,
  LoopCircleLoading,
  MeteorRainLoading,
  NineCellLoading,
  PassThrouthLoading,
  PointSpreadLoading,
  RectGraduallyShowLoading,
  RollBoxLoading,
  RotateCircleLoading,
  SemipolarLoading,
  SolarSystemLoading,
  StickyBallLoading,
  ThreeHorseLoading,
  TouchBallLoading,
  TransverseLoading,
  WaveLoading,
  WaveTopBottomLoading,
  WindMillLoading,
} from "react-loadinggg";

const styles = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 9999,
};

const textStyles = {
  position: "absolute",
  paddingTop: "128px",
  top: "50%",
  left: "50%",
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: "white",
  transform: "translate(-50%, -50%)",
};

export const randomIntFunc = (maxVal = 1) => {
  let buf = new Uint8Array(1);
  try {
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(buf);
    } else {
      window.msCrypto.getRandomValues(buf);
    }
  } catch (error) {
    // console.log(error)
  }
  return buf[0] % maxVal;
};

class OverlayLoading extends Component {
  render() {
    const { active, moreStyles, moreTextStyles, loadingNumber, loadingText } =
      this.props;
    const randNo = randomIntFunc(30) | 0;
    const listOfLoading = [
      <BabelLoading key="BabelLoading" size="large" color="#fff" />,
      <BlockLoading key="BlockLoading" size="large" color="#fff" />,
      <BlockReserveLoading
        key="BlockReserveLoading"
        size="large"
        color="#fff"
      />,
      <BoxLoading key="BoxLoading" size="large" color="#fff" />,
      <CircleLoading key="CircleLoading" size="large" color="#fff" />,
      <CircleToBlockLoading
        key="CircleToBlockLoading"
        size="large"
        color="#fff"
      />,
      <CommonLoading key="CommonLoading" size="large" color="#fff" />,
      <DisappearedLoading key="DisappearedLoading" size="large" color="#fff" />,
      <LoopCircleLoading key="LoopCircleLoading" size="large" color="#fff" />,
      <NineCellLoading key="NineCellLoading" size="large" color="#fff" />,
      <TouchBallLoading key="TouchBallLoading" size="large" color="#fff" />,
      <TransverseLoading key="TransverseLoading" size="large" color="#fff" />,
      <WaveLoading key="WaveLoading" size="large" color="#fff" />,
      <WaveTopBottomLoading
        key="WaveTopBottomLoading"
        size="large"
        color="#fff"
      />,
      <WindMillLoading key="WindMillLoading" size="large" color="#fff" />,
      <JumpCircleLoading key="JumpCircleLoading" size="large" color="#fff" />,
      <MeteorRainLoading key="MeteorRainLoading" size="large" color="#fff" />,
      <RotateCircleLoading
        key="RotateCircleLoading"
        size="large"
        color="#fff"
      />,
      <StickyBallLoading key="StickyBallLoading" size="large" color="#fff" />,
      <SemipolarLoading key="SemipolarLoading" size="large" color="#fff" />,
      <SolarSystemLoading key="SolarSystemLoading" size="large" color="#fff" />,
      <LadderLoading key="LadderLoading" size="large" color="#fff" />,
      <HeartBoomLoading key="HeartBoomLoading" size="large" color="#fff" />,
      <RollBoxLoading key="RollBoxLoading" size="large" color="#fff" />,
      <RectGraduallyShowLoading
        key="RectGraduallyShowLoading"
        size="large"
        color="#fff"
      />,
      <PointSpreadLoading key="PointSpreadLoading" size="large" color="#fff" />,
      <ThreeHorseLoading key="ThreeHorseLoading" size="large" color="#fff" />,
      <PassThrouthLoading key="PassThrouthLoading" size="large" color="#fff" />,
      <CoffeeLoading key="CoffeeLoading" size="large" color="#fff" />,
      <BatteryLoading key="BatteryLoading" size="large" color="#fff" />,
    ];
    const targetIdx = loadingNumber >= 0 ? loadingNumber : randNo;
    if (active) {
      return (
        <div
          data-testid="loadingContainer"
          style={{ ...styles, ...moreStyles }}
        >
          {listOfLoading[targetIdx]}
          <span style={{ ...textStyles, ...moreTextStyles }}>
            {loadingText || "รอสักครู่"}
          </span>
        </div>
      );
    }
    return null;
  }
}

export default OverlayLoading;
