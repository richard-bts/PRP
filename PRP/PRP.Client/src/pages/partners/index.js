import { useSelector } from "react-redux";

import Layout from "../../shared/components/Layouts";
import { tableHeadPartners } from "../../shared/data";
import { Table } from "../../shared/components/Table";
import { PageTitle } from "../../shared/components/PageTitle";
import { SearchBar } from "../../components/partners/SearchBar";

import { PlusSmIcon } from "@heroicons/react/solid";
import { ButtonIcon } from "../../shared/components/ButtonIcon";

const Partners = () => {
  
  const { partners } = useSelector( state => state.partners );

  return (
    <Layout
      headTitle="Partners"
    >
      <section className="flex flex-col items-center justify-between gap-6 px-5 mt-10 mb-10 md:flex-row md:px-0 md:mb-16">
        <PageTitle title="Partners" />
        
        <div className="flex md:justify-end md:gap-10">
          <SearchBar />
          <ButtonIcon
            btnLabel="Add partner"
            labelStyles="hidden md:inline-block"
            btnStyles="rounded-full md:rounded md:static md:bottom-0 md:right-0 fixed bottom-4 right-4 h-14 w-14 md:h-auto md:w-auto"
          >
            <PlusSmIcon className="text-white w-7 h-7 md:w-6 md:h-6" />
          </ButtonIcon>
        </div>
      </section>

      <main className="mb-20">
        <Table
          tableStyles="w-full table-auto min-w-max shadow-md"
          theadItems={ tableHeadPartners }
          theadTrGridStyles="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center"
          tbodyItems={ partners }
          tbodyTrGridStyles="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center"
        />
      </main>
    </Layout>
  )
}

export default Partners;