"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// Timings and easing copied from mycrmsim.com's production bundle so both sites feel the same.
const EASE = [0.25, 0.1, 0.25, 1] as const;

type Direction = "up" | "down" | "left" | "right";

function offsetFor(direction: Direction, distance = 60) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
  }
}

/** Single block that fades + slides in the first time it scrolls into view. */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.05,
  className,
  style,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const offset = offsetFor(direction);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const ITEM_VARIANTS: Record<"fadeUp" | "scaleUp" | "hero", Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  },
  hero: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  },
};

/** Grid/list wrapper whose StaggerItem children reveal one after another. */
export function Stagger({
  children,
  className,
  hero = false,
}: {
  children: ReactNode;
  className?: string;
  hero?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // "some" so containers taller than the viewport still trigger.
  const inView = useInView(ref, { once: true, amount: "some" });

  return (
    <motion.div
      ref={ref}
      variants={hero ? heroContainer : staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "scaleUp" | "hero";
}) {
  return (
    <motion.div variants={ITEM_VARIANTS[variant]} className={className}>
      {children}
    </motion.div>
  );
}
