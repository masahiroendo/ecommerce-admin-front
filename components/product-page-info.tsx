"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";

import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";

type ProductInfoProps = {
  data: Product;
};

export default function ProductInfo({ data }: ProductInfoProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3>Size:</h3>
          <div className="font-bold">{data?.size.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3>Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-stone-400"
            style={{ backgroundColor: data?.color.value }}
          />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex items-end justify-between mt-3">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <div className="flex items-center mt-4 gap-x-3">
        <Button className="flex items-center gap-x-2 rounded-full hover:scale-105 transition">
          Add To Cart <ShoppingCart size={20} />
        </Button>
      </div>
    </>
  );
}
