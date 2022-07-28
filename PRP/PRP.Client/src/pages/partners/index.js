import getStore from '../../store/store';
import { PlusSmIcon } from '@heroicons/react/solid';
import { tableHeadPartners } from '../../shared/data';
import { SearchBar } from '../../components/partners';
import { useFilter } from '../../shared/hooks/useFilter';
import { getPartners } from '../../store/partners/thunks';
import { setActivePartner, setOpenForm, useAppDispatch } from '../../store';
import { SelectPartnersPerPage } from '../../components/partners/SelectPartnersPerPage';
import { Layout, Table, PageTitle, Pagination, ButtonIcon } from '../../shared/components';

const Partners = () => {
  const { currentPage, searchText, setSearchText, partnersLength, currentPartners, handleSearch, handleChangePage, partnersPerPage } =  useFilter();
  const dispatch = useAppDispatch();
    
  const handleCloseForm = () => {
    dispatch(setOpenForm(false));
    dispatch(setActivePartner({}));
  }

  const handleEditPartner = (partner) => {
    dispatch(setActivePartner(partner));
    dispatch(setOpenForm(true));
  }

  return (
    <Layout
      headTitle="Partners"
    >
      <section className="flex flex-col items-center justify-between gap-6 px-5 mt-10 mb-10 lg:flex-row md:px-0 md:mb-16">
        <PageTitle title="Partners page" />
        
        <div className="flex flex-col gap-4 md:flex-row md:justify-end md:gap-10">
          <SearchBar
            handleSearch={ handleSearch }
            setSearchText={ setSearchText }
            searchText={ searchText }
          />
          <SelectPartnersPerPage />
          <ButtonIcon
            btnLabel="Add partner"
            labelStyles="hidden xl:inline-block"
            btnStyles="rounded-full xl:rounded xl:static xl:bottom-0 xl:right-0 fixed bottom-4 right-4 h-14 w-14 xl:h-auto xl:w-auto"
            onClick={ () => dispatch(setOpenForm(true))}
          >
            <PlusSmIcon className="text-white w-7 h-7 md:w-6 md:h-6" />
          </ButtonIcon>
        </div>
      </section>

      <main className="mb-20">
        <Table
          tableStyles="w-full table-auto min-w-full max-w-fit shadow-md"
          theadItems={ tableHeadPartners }
          theadTrGridStyles="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center"
          tbodyItems={ currentPartners }
          tbodyTrGridStyles="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center"
          handleCloseForm={ handleCloseForm }
          handleEditPartner={ handleEditPartner }
        />

        <Pagination
          partnersPerPage={ partnersPerPage }
          totalPartners={ partnersLength }
          handleChangePage={ handleChangePage }
          currentPage={ currentPage }
        />
        </main>
    </Layout>
  );
};

export const getServerSideProps = async() => {
  const store = getStore();
  await store.dispatch(getPartners());
  return {
    props: {
      initialState: store.getState(),
    },
  };
};

export default Partners;
