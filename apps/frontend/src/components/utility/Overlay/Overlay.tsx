import styles from "./Overlay.module.css";
import { Children, ClassName } from "@/types";
import { cn } from "@/utils/clsx";

interface OverlayProps extends Children, ClassName {}

export const Overlay = ({ children, className }: OverlayProps) => (
  <div
    className={cn(
      "d-flex align-items-center justify-content-center text-center",
      styles.opacityMask,
      className,
    )}
  >
    {children}
  </div>
);
