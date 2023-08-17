import { Button } from "../Button";
import "./intro-styles.scss";

import right_intro_pattern from "./../../assets/bg-pattern-intro-right-desktop.svg";
import left_intro_pattern from "./../../assets/bg-pattern-intro-left-desktop.svg";
import left_intro_pattern_mobile from "./../../assets/bg-pattern-intro-left-mobile.svg";
import right_intro_pattern_mobile from "./../../assets/bg-pattern-intro-right-mobile.svg";
const image_intro_desktop = require("./../../assets/image-intro-desktop.jpg");
const image_intro_mobile = require("./../../assets/image-intro-desktop.jpg");

export const Intro = () => {
  return (
    <>
      <img
        className="image-intro-mobile"
        src={image_intro_mobile}
        alt="Intro"
      />
      <div className="intro">
        <img
          className="intro__pattern--left"
          src={left_intro_pattern}
          alt="Right pattern"
        />
        <img
          className="intro__pattern--left--mobile"
          src={left_intro_pattern_mobile}
          alt="Right pattern"
        />
        <div className="intro__text">
          <div className="intro__text__line"></div>
          <h1>
            Humanizing <br /> your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected
          </p>
          <Button btnTxt="View plans" light={true} />
        </div>

        <img
          src={image_intro_desktop}
          alt="Intro"
          className="intro__image--intro"
        />

        <img
          className="intro__pattern--right"
          src={right_intro_pattern}
          alt="Intro"
        />
        <img
          className="intro__pattern--right--mobile"
          src={right_intro_pattern_mobile}
          alt="Right pattern"
        />
      </div>
    </>
  );
};
