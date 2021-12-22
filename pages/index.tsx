import type { NextPage } from 'next';
import { Button } from '../src/components/common';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <h1>Musik - Concert Landing Page</h1>
      <Button>Button</Button>
    </>
  );
};

export default Home;
