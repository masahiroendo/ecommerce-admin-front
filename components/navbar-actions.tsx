"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { ThemeToggleButton } from "./theme-dropdown-button";
import useCart from "@/hooks/use-cart";

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex ml-auto items-center space-x-2">
      <ThemeToggleButton />
      <Button
        variant={"ghost"}
        className="flex items-center rounded-full px-2 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
}
