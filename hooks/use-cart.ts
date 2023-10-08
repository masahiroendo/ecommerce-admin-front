import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";

type CartProps = {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({
            title: "Item already in cart.",
          });
        }

        set({ items: [...get().items, data] });
        toast({ title: "New Item added to cart." });

        // if (existingItem == null) {
        //   set({items: [...get().items, data]});
        //   toast({
        //     title: "New item added to cart."
        //   })
        // }
        // set({items: [...get().items.map((item) => )]})
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast({
          title: "Item removed from cart.",
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
