"use client";

import NextImage from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as ImageType } from "@/types";
import ProductGalleryTab from "./product-gallery-tab";
import { Tab } from "@headlessui/react";

type GalleryProps = {
  images: ImageType[];
};

export default function ProductGallery({ images }: GalleryProps) {
  return (
    // <>
    //   <Tabs className="flex flex-col-reverse max-w-[480px]">
    //     <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
    //       <TabsList className="grid grid-cols-4 gap-6">
    //         {images.map((image) => (
    //           <TabsTrigger key={image.id} value={image.url}>
    //             <ProductGalleryTab image={image} />
    //           </TabsTrigger>
    //         ))}
    //       </TabsList>
    //       <TabsContent></TabsContent>
    //     </div>
    //   </Tabs>

    //   <Tabs defaultValue="account" className=" flex flex-col-reverse w-[400px]">
    //     <TabsList>
    //       <TabsTrigger value="account">Account</TabsTrigger>
    //       <TabsTrigger value="password">Password</TabsTrigger>
    //     </TabsList>
    //     <TabsContent value="account">
    //       Make changes to your account here.
    //     </TabsContent>
    //     <TabsContent value="password">Change your password here.</TabsContent>
    //   </Tabs>
    // </>
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-6 gap-6">
          {images.map((image) => (
            <ProductGalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden bg-stone-200 dark:bg-stone-800">
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
