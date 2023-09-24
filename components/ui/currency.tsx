import { useEffect, useState } from "react";

type CurrencyProps = {
  value?: string | number;
};

export default function Currency({ value }: CurrencyProps) {
  const formatter = new Intl.NumberFormat("EUR", {
    style: "currency",
    currency: "EUR",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
