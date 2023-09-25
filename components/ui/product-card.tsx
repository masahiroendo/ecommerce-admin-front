"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";

type ProductCardProps = {
  data: Product;
};

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/product/${data?.id}`);
  }
  return (
    <div
      onClick={handleClick}
      className="bg-stone-50 dark:bg-stone-900 rounded-xl border p-3 space-y-4 cursor-pointer"
    >
      {/* Images and Actions */}
      <div className="group aspect-square rounded-xl bg-stone-200 dark:bg-stone-800 relative">
        <Image
          alt="Image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-50 absolute transition w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={
                <Expand
                  size={20}
                  className="text-stone-500 dark:text-stone-100"
                />
              }
            />
            <IconButton
              onClick={() => {}}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-stone-500 dark:text-stone-100"
                />
              }
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg dark:text-gray-300">{data.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {data.category?.name}
        </p>
      </div>
      <div className="flex items-center justify-between font-semibold">
        {/* {formatter.format(Number(data?.price))} */}
        <Currency value={data.price} />
      </div>
    </div>
  );
}
