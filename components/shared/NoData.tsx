import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

export interface NoDataProps {
  message?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  iconClassName?: string;
  messageClassName?: string;
  descriptionClassName?: string;
}

function NoData({
  message = "No data found",
  description,
  className = "",
  style,
  icon = <Inbox size={50} />,
  iconClassName = "",
  messageClassName = "",
  descriptionClassName = "",
}: NoDataProps) {
  return (
    <div
      style={style}
      className={cn(
        "flex size-full flex-col items-center justify-center p-8 text-center",
        className
      )}
    >
      <div className={cn("mb-4 text-gray-400", iconClassName)}>{icon}</div>
      <h3
        className={cn(
          "mb-1 text-lg font-medium text-gray-900",
          messageClassName
        )}
      >
        {message}
      </h3>
      {description && (
        <p
          className={cn("max-w-md text-sm text-gray-500", descriptionClassName)}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default NoData;
