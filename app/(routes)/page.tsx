import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("81a6101a-6dc3-4070-aed9-9774d44c96a5");

  return (
    <Container>
      <div className="space-y-10 bp-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
