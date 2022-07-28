import Image from 'next/image';
import { cardLinks } from '../shared/data';
import { Layout } from '../shared/components';
import { HomeCardContainer } from '../components/home';

export default function Home() {
  return (
    <Layout
      headTitle="Home"
    >
      <main className="my-10 landing">
        <section className="flex flex-col items-center justify-between px-5 xl:gap-20 gap-14 xl:flex-row xl:justify-center">
          <div className="relative w-72 h-72 home__hero-image">
            <Image
              className="rounded-lg img-home"
              src="/img/box.jpg"
              layout="fill"
              alt="Box image"
              title="Box image"
              priority="true"
            />
          </div>

          <HomeCardContainer
            items={ cardLinks }
          />
        </section>
      </main>
    </Layout>
  );
};
