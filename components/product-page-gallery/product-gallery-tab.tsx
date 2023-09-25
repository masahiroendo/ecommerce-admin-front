import NextImage from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

type GalleryTabProps = {
  image: ImageType;
};

export default function ProductGalleryTab({ image }: GalleryTabProps) {
  return (
    //   <Tabs className="relative flex items-center justify-center rounded-md aspect-square cursor-pointer">
    //     <div>
    //       <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
    //         <NextImage
    //           fill
    //           src={image.url}
    //           alt=""
    //           className="object-cover object-center"
    //         />
    //       </span>
    //       <span
    //         className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2")}
    //       />
    //     </div>

    //     {({ selected }) => (
    //       <div>
    //         <span className="absolute h-wull w-full aspect-square inset-0 overflow-hidden rounded-md">
    //           <Image
    //           fill
    //           src={image.url}
    //           alt=""
    //           className="object-cover object-center"
    //           />
    //         </span>
    //         <span className={cn("absolute rounded-md inset-0 ring-2 ring-offset-2" selected ? "ring-black": "ring-transparent")} />
    //       </div>
    //     )}
    //   </Tabs>
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black dark:ring-stone-400" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}
