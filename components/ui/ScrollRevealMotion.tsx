"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export default function ScrollRevealMotion({
  children,
  containerClassName = "",
  textClassName = "",
  baseOpacity = 0.1,
  baseRotation = 5,
  blurStrength = 6,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
}) {
  const ref = useRef(null);

  const words = useMemo(() => {
    return String(children).split(/(\s+)/);
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 60%"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [baseRotation, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate: rotation }}
      className={`scroll-reveal ${containerClassName}`}
    >
      <motion.span
        className={`inline-block ${textClassName}`}
        style={{ display: "inline-block" }}
      >
        {words.map((word, index) => {
          if (word.match(/^\s+$/)) return word;

          return (
            <motion.span
              key={index}
              initial={{
                opacity: baseOpacity,
                filter: `blur(${blurStrength}px)`,
              }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.03,
              }}
              viewport={{ once: false, margin: "-20% 0px" }}
              className="inline-block"
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </motion.div>
  );
}
