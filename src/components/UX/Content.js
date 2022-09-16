import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useGlobal } from "../../globals/useGlobal";

const contentAnimation = {
  in: { scale: 1, opacity: 1 },
  out: { scale: 0.9, opacity: 0 }
};

export default function Content() {
  const key = useGlobal((state) => state.pageCurKey);
  const pageContent = useGlobal(
    useCallback((state) => state.pages[key].content, [key])
  );
  return (
    <motion.main variants={contentAnimation} className="Content">
      {/* {pageContent} */}
    </motion.main>
  );
}
