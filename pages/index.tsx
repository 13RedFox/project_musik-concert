import type { NextPage } from 'next';
import { HomeAboutUs, HomeCategories, HomeHeader, HomeSingers } from '../src/components/home';
import { TheFooter } from '../src/components/TheFooter';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <HomeHeader />
      <HomeCategories />
      <HomeAboutUs />
      <HomeSingers />
      <TheFooter />
    </>
  );
};

export default Home;
