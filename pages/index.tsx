import type { NextPage } from 'next';
import { HomeCategories } from '../src/components/home/HomeCategories';
import { HomeHeader } from '../src/components/home/HomeHeader';
import { TheFooter } from '../src/components/TheFooter';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <HomeHeader />
      <HomeCategories />
      <TheFooter />
    </>
  );
};

export default Home;
