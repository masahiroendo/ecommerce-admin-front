"use client";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { toast } from "@/components/ui/use-toast";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CartSummary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({
        title: "Payment completed.",
        description: "Thank you for your order",
      });
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast({
        title: "Something went wront.",
        description: "Your order was dismissed",
      });
    }
  }, [searchParams, removeAll]);

  async function onCheckout() {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  }

  return (
    <div className="mt-16 rounded-lg bg-stone-50 dark:bg-stone-900 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-stone-300 pt-4">
          <div className="text-base font-medium">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6 rounded-full" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
}
