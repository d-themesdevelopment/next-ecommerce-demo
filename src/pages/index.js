import BannersSection from "@/components/partials/home/BannersSection";
import BannersTwoSection from "@/components/partials/home/BannersTwoSection";
import BestSellerSection from "@/components/partials/home/BestSellerSection";
import IntroSection from "@/components/partials/home/IntroSection";
import NewCollection from "@/components/partials/home/NewProducts";
import SpecialCollection from "@/components/partials/home/SpecialCollection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <BestSellerSection />
      <BannersSection />
      <NewCollection />
      <BannersTwoSection />
      <SpecialCollection />
    </main>
  );
}
