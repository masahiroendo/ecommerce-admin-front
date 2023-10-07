"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Color, Size } from "@/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Filter from "./filter";

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex items-center gap-x-2 lg:hidden border rounded-md p-2 text-sm bg-background hover:bg-stone-200 dark:hover:bg-stone-700 font-bold shadow-md">
          Filters
          <Plus size={20} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Search Filters</SheetTitle>
            <SheetDescription>
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
