"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Visitors with "reduce motion" turned on get fades only, no sliding.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
