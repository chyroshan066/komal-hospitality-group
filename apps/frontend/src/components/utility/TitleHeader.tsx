import { ClassName, Title } from "@/types";
import { cn } from "@/utils/clsx";

interface BaseTitleHeader extends Title {
  subtitle: string;
}

interface TitleHeaderProps extends BaseTitleHeader, ClassName {
  delay?: number;
  animation?: boolean;
  subTitleClassName?: string;
}

interface HeroTitleHeaderProps extends BaseTitleHeader {
  title2?: string;
  children?: React.ReactNode;
}

export const TitleHeader = ({
  subtitle,
  title,
  className,
  subTitleClassName,
  delay,
  animation = true,
}: TitleHeaderProps) => (
  <div className={cn("title", className)}>
    <small data-cue={animation && "slideInUp"} className={subTitleClassName}>
      {subtitle}
    </small>
    <h2 data-cue={animation && "slideInUp"} data-delay={animation && delay}>
      {title}
    </h2>
  </div>
);

export const HeroTitleHeader = ({ subtitle, title, title2, children }: HeroTitleHeaderProps) => (
  <div className="container">
    <small className="slide-animated one">{subtitle}</small>
    <h1 className="slide-animated two">{title} <br /> {title2}</h1>
    {children}
  </div>
);
