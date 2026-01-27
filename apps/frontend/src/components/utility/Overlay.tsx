import { Children, ClassName } from "@/types";
import { cn } from "@/utils/clsx";

interface OverlayProps extends Children, ClassName {}

export const Overlay = ({ children, className }: OverlayProps) => (
    <div
      className={cn("wrapper opacity-mask d-flex align-items-center justify-content-center text-center", className)}
      data-opacity-mask="rgba(0, 0, 0, 0.5)"
    >
        {children}
    </div>
);