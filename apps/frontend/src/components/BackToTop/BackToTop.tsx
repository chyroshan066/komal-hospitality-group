import { cn } from "@/utils/clsx";
import styles from "./BackToTop.module.css";

export const BackToTop = () => (
  <div className={cn("progress-wrap", styles.progressWrap)}>
    <svg
      className={cn("svg-content", styles.progressCircle)}
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
);
