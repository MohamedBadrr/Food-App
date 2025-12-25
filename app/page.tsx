import Header from "@/components/header";
import Hero from "./_components/Hero";
import BrowseOurMenu from "./_components/BrowseOurMenu";
import ProvideHealthy from "./_components/ProvideHealthy";
import Events from "./_components/Events";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrowseOurMenu />
      <ProvideHealthy />
      <Events />
    </main>
  );
}
