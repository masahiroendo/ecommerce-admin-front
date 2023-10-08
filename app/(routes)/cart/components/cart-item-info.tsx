type CartItemInfoProps = {
  product: Record<string, any>;
};

export default function CartItemInfo({ product }: CartItemInfoProps) {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-sm font-semibold">{product.name}</p>
      </div>

      <div className="mt-1 flex text-sm">
        <p className="text-stone-500 dark:text-stone-300">{product.color}</p>
        <p className="text-stone-500 dark:text-stone-300 ml-4 border-l border-stone-300 pl-4">
          {product.size}
        </p>
      </div>
      <p className="mt-1 text-sm font-medium text-stone-700">{product.price}</p>
    </>
  );
}
