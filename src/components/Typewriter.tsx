import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string | React.ReactNode;
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | React.ReactNode;
  cursorAnimationVariants?: {
    initial: MotionProps["initial"];
    animate: MotionProps["animate"];
  };
  cursorClassName?: string;
}

const Typewriter = ({
  text,
  speed = 70,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textContent = typeof text === 'string' ? text : text;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false);
          if (!loop) {
            return;
          }
          setCurrentIndex(0);
          timeout = setTimeout(() => {}, waitTime);
        } else {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, deleteSpeed);
        }
      } else {
        if (currentIndex < textContent.toString().length) {
          timeout = setTimeout(() => {
            setDisplayText(textContent.toString().slice(0, currentIndex + 1));
            setCurrentIndex((prev) => prev + 1);
          }, speed);
        } else if (loop) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, waitTime);
        }
      }
    };

    if (currentIndex === 0 && !isDeleting && displayText === "") {
      timeout = setTimeout(startTyping, initialDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    displayText,
    isDeleting,
    speed,
    deleteSpeed,
    waitTime,
    textContent,
    loop,
  ]);

  return (
    <div className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
      <span dangerouslySetInnerHTML={{ __html: displayText }} />
      {showCursor && (
        <motion.span
          variants={cursorAnimationVariants}
          className={cn(
            cursorClassName,
            hideCursorOnType &&
              (currentIndex < textContent.toString().length || isDeleting)
              ? "hidden"
              : ""
          )}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
};

export default Typewriter;
