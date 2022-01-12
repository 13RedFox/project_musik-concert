import type { NextPage } from 'next';
import {
  HomeAboutUs,
  HomeCategories,
  HomeContactUs,
  HomeHeader,
  HomeSingers,
} from '../src/components/home';
import { TheFooter } from '../src/components/TheFooter';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <HomeHeader />
      <HomeCategories />
      <HomeSingers />
      <HomeAboutUs />
      <HomeContactUs />
      <TheFooter />
    </>
  );
};

export default Home;
