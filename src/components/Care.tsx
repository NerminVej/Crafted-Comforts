import { careTitle, careSubtitle, careList } from "../utils/data";
import imageFour from "../assets/image-four.svg";

import FadeIn from "./ui/FadeIn";

const Care = () => {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.2} direction="down" fullWidth={false} padding={false}>
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </FadeIn>
    </div>
  );
};

export default Care;
