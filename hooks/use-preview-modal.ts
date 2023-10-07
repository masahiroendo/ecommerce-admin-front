import { create } from "zustand";
import { Product } from "@/types";

type PreviewModalProps = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
};

const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: true,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
