import { OverlayLoading } from "react-loading-randomizable";
const OverlayLoadingCustom = ({
  active,
  number,
  style,
  className,
  text,
  textStyle,
  textClassName,
}) => {
  return (
    <OverlayLoading
      text={text ? text : "รอสักครู่"}
      {...{ active, number, style, className, textStyle, textClassName }}
    />
  );
};
export default OverlayLoadingCustom;
