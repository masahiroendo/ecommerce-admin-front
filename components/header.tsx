import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

// export const revalidate = 0;

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="border-b">
      <Container>
        <div className="flex relative w-full items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <h1 className="font-bold text-xl">STORE NAME</h1>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
}
