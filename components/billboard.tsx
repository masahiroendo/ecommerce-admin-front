import { Billboard as BillboardType } from "@/types";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

type BillboardProps = {
  data: BillboardType;
};

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
      <div
        className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="flex flex-col h-full w-full items-center justify-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl bg-secondary/60 p-4 rounded-lg">
            {data.label}
            <Button size="lg" className="w-full py-6 text-xl">
              <ShoppingBag className="mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
