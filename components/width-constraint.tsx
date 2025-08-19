import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function WidthConstraint(props: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <div className={cn("max-w-[1250px] mx-auto px-5", props.className)}>
      {props.children}
    </div>
  );
}
