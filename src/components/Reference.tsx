import { referenceTitle, referenceSubtitle } from "../utils/data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-two.svg";
import imageThree from "../assets/image-three.svg";

import FadeIn from "./ui/FadeIn";

export const Reference = () => {
  return (
    <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down" fullWidth={false} padding={false}>
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" fullWidth={false} padding={false}>
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right" fullWidth={false} padding={false}>
          <div className="flex flex-col gap-8">
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt="" />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left" fullWidth={false} padding={false}>
          <div>
            <img src={imageThree} alt="" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
