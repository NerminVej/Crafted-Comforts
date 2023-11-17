import { motion, useAnimation, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

const FadeIn = ({ children, delay, direction, fullWidth, padding }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return <div></div>;
};

export default FadeIn;
