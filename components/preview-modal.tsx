"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import usePreviewModal from "@/hooks/use-preview-modal";
import ProductGallery from "./product-page-gallery";
import ProductInfo from "./product-page-info";
import { cn } from "@/lib/utils";

export default function PreviewModal() {
  const { isOpen, onClose } = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product Preview</DialogTitle>
          <DialogDescription
            className={cn(
              "grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
            )}
          >
            <div className={cn("sm:col-span-4 lg:col-span-5")}>
              <ProductGallery images={product.images} />
            </div>
            <div className={cn("sm:col-span-8 lg:col-span-7")}>
              <ProductInfo data={product} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
