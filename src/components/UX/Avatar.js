import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobal } from "../../globals/useGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const avatarAnimation = {
  in: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  },
  out: { scale: 0.85, opacity: 0 }
};

const imgAnimation = {
  in: { x: 0, opacity: 1 },
  out: { x: -30, opacity: 0 }
};

const titleAnimation = {
  in: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, type: "spring", stiffness: 300 }
  },
  out: { y: -10, opacity: 0 }
};

export default function Avatar() {
  const key = useGlobal((state) => state.pageCurKey);
  const { title, image, copy, next, prev } = useGlobal(
    useCallback((state) => state.getAvatar(key), [key])
  );

  return (
    <motion.footer variants={avatarAnimation} className="avatarText">
      <div className="textHolder">
        <motion.div variants={titleAnimation} className="title">
          {title}
        </motion.div>
        <motion.div variants={imgAnimation} className="Avatar">
          <img src={image} alt={`${title} Avatar`} />
        </motion.div>
        <div className="copy">{copy}</div>
        <div className="nextPrev">
          <Link className="next" to={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          <Link className="prev" to={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
