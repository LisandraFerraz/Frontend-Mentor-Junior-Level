import classNames from "classnames";
import "./button-style.scss";

export const Button = (props: any) => {
  // export default function Button(btnTxt: any) {
  return (
    <button
      className={classNames({
        ["button_light"]: props.light == true,
        ["button_dark"]: props.light == false,
      })}
    >
      {props.btnTxt}
    </button>
  );
};
