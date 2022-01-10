import type { NextPage } from 'next';
import { HomeAboutUs, HomeCategories, HomeContactUs, HomeHeader } from '../src/components/home';
import { TheFooter } from '../src/components/TheFooter';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <HomeHeader />
      <HomeCategories />
      <HomeAboutUs />
      <HomeContactUs />
      <TheFooter />
    </>
  );
};

export default Home;
