import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/HeroSection";
import FeaturedArticle from "../components/FeaturedArticle";
import LatestNews from "../components/LatestNews";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";

import useFetch from "../hooks/useFetch";
import { getTopNews } from "../services/newsApi";

import prepareHomepageData from "../utils/homepageData";

function Home() {
  const { data } = useFetch(getTopNews);

  const homepage = prepareHomepageData(data);

  return (
    <MainLayout>
      <div className="homepage">
        <section className="top-section">
          <HeroSection article={homepage.heroArticle} />

          <Sidebar articles={homepage.sidebarArticles} />
        </section>

        <FeaturedArticle article={homepage.featuredArticle} />

        <LatestNews articles={homepage.latestArticles} />

        <Newsletter />
      </div>
    </MainLayout>
  );
}

export default Home;