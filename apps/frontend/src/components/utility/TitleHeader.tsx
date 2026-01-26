import { ClassName, Title } from "@/types";
import { cn } from "@/utils/clsx";

interface TitleHeaderProps extends Title, ClassName {
  subtitle: string;
  delay: number;
}

export const TitleHeader = ({ subtitle, title, className, delay }: TitleHeaderProps) => (
  <div className={cn("title", className)}>
    <small data-cue="slideInUp">{subtitle}</small>
    <h2 data-cue="slideInUp" data-delay={delay}>
      {title}
    </h2>
  </div>
);
