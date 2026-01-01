import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "zigzag" | "curve";
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

export const SectionDivider = ({ 
  variant = "wave", 
  fromColor = "bg-background", 
  toColor = "bg-secondary",
  flip = false 
}: SectionDividerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  if (variant === "dots") {
    return (
      <div ref={ref} className={`relative h-24 ${fromColor} overflow-hidden`}>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center gap-8"
          style={{ x }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary/30"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        <div className={`absolute bottom-0 left-0 right-0 h-12 ${toColor}`} 
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} 
        />
      </div>
    );
  }

  if (variant === "zigzag") {
    return (
      <div ref={ref} className={`relative h-16 ${fromColor}`}>
        <motion.svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          style={{ opacity }}
        >
          <motion.path
            d="M0,30 L40,50 L80,10 L120,50 L160,10 L200,50 L240,10 L280,50 L320,10 L360,50 L400,10 L440,50 L480,10 L520,50 L560,10 L600,50 L640,10 L680,50 L720,10 L760,50 L800,10 L840,50 L880,10 L920,50 L960,10 L1000,50 L1040,10 L1080,50 L1120,10 L1160,50 L1200,30 L1200,60 L0,60 Z"
            className="fill-primary/10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.svg>
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${toColor}`} />
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div ref={ref} className={`relative h-32 ${fromColor} overflow-hidden`}>
        <motion.div
          className="absolute inset-0"
          style={{ x }}
        >
          {/* Floating shapes */}
          <motion.div
            className="absolute left-[10%] top-1/2 w-8 h-8 rounded-full bg-primary/20"
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[30%] top-1/3 w-6 h-6 rounded-lg bg-primary/15 rotate-45"
            animate={{ y: [20, -20, 20], rotate: [45, 225, 405] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute left-[50%] top-2/3 w-10 h-10 rounded-full bg-primary/10"
            animate={{ y: [-15, 15, -15], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute left-[70%] top-1/2 w-5 h-5 rounded-full bg-primary/25"
            animate={{ y: [15, -15, 15], rotate: [0, -180, -360] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.div
            className="absolute left-[85%] top-1/4 w-7 h-7 rounded-lg bg-primary/20 rotate-12"
            animate={{ y: [-25, 25, -25], rotate: [12, 192, 372] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </motion.div>
        <svg
          className={`absolute bottom-0 w-full h-20 ${flip ? "rotate-180" : ""}`}
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q300,80 600,40 T1200,40 L1200,80 L0,80 Z"
            className={toColor.replace("bg-", "fill-")}
          />
        </svg>
      </div>
    );
  }

  // Default wave
  return (
    <div ref={ref} className={`relative h-24 ${fromColor} overflow-hidden`}>
      <motion.svg
        className="absolute bottom-0 w-[200%] h-24"
        viewBox="0 0 2400 100"
        preserveAspectRatio="none"
        style={{ x }}
      >
        <motion.path
          d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1600,0 1800,50 C2000,100 2200,0 2400,50 L2400,100 L0,100 Z"
          className="fill-primary/10"
          animate={{ 
            d: [
              "M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1600,0 1800,50 C2000,100 2200,0 2400,50 L2400,100 L0,100 Z",
              "M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50 C1400,0 1600,100 1800,50 C2000,0 2200,100 2400,50 L2400,100 L0,100 Z",
              "M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1600,0 1800,50 C2000,100 2200,0 2400,50 L2400,100 L0,100 Z",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      <svg
        className="absolute bottom-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 Q300,60 600,30 T1200,30 L1200,60 L0,60 Z"
          className={toColor.replace("bg-", "fill-")}
        />
      </svg>
    </div>
  );
};