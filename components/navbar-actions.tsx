"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "./theme-dropdown-button";

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex ml-auto items-center space-x-2">
      <Button
        variant={"ghost"}
        className="flex items-center rounded-full px-2 py-2"
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium">0</span>
      </Button>
      <ThemeToggleButton />
    </div>
  );
}
