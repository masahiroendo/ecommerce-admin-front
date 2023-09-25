import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/product-page-gallery";
import ProductInfo from "@/components/product-page-info";
import ProductsList from "@/components/products-list";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
              {/* Info */}
              <ProductInfo data={product} />
            </div>
          </div>
          <Separator className="my-10" />
          <ProductsList title="Realted Items" items={suggestedProducts} />
        </div>
      </Container>
    </>
  );
}
