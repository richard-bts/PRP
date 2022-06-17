import Image from "next/image";
import Layout from "../shared/components/Layouts";
import { HomeCardContainer } from "../components/home/HomeCardContainer";

import { cardLinks } from "../shared/data/homeCardsLinks";

export default function Home() {
  return (
    <Layout
      headTitle="Home"
    >
      <main className="my-10 main">
        <section className="container flex flex-col items-center justify-between px-5 lg:gap-20 gap-14 lg:flex-row lg:justify-center home-section">
          <div className="relative w-72 h-72 xl:w-96 xl:h-96">
            <Image
              src="/img/img_box.svg"
              layout="fill"
              alt="Box image"
              title="Box"
            />
          </div>

          <HomeCardContainer
            items={ cardLinks }
          />
        </section>
      </main>
    </Layout>
  )
}
