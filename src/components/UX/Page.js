import React, { memo, useEffect } from "react";
import { useGlobal } from "../../globals/useGlobal";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import Content from "./Content";

const sectionAnimation = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: {
    in: {
      opacity: 1,
      transition: {
        delayChildren: 1.7,
        staggerDirection: -1,
        staggerChildren: 0.3
      }
    },
    out: { opacity: 0 }
  }
};

function Page({ match }) {
  const pageCurKey = useGlobal((state) => state.pageCurKey);
  const setPageKey = useGlobal((state) => state.setPageKey);
  const { key } = match.params;
  useEffect(() => {
    if (pageCurKey !== key) {
      setPageKey(key);
      console.count("setKey");
    }
  }, [key, pageCurKey, setPageKey]);
  return (
    <motion.section {...sectionAnimation} className="Page">
      <Content />
      <Avatar />
    </motion.section>
  );
}

export default memo(Page);
