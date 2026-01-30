import { useEffect, useState } from "react";

export const useAnimationTrigger = (): boolean => {
  const [isTriggered, setIsTriggered] = useState<boolean>(false);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTriggered(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return isTriggered;
};
