import Header from "@/components/header";
import Hero from "./_components/Hero";
import BrowseOurMenu from "./_components/BrowseOurMenu";
import ProvideHealthy from "./_components/ProvideHealthy";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrowseOurMenu />
      <ProvideHealthy />
    </main>
  );
}
