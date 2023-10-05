"use client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Color, Size } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FilterProps = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
};

export default function Filter({ name, valueKey, data }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);

  function onClick(id: string) {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <Separator className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm p-2 border text-gray-800 border-gray-300 bg-white",
                selectedValue === filter.id && "bg-primary/10"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
