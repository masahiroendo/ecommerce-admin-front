import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type IconButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
};

export default function IconButton({
  className,
  onClick,
  icon,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-cente rounded-full border border-stone-500 dark:border-stone-600 shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
