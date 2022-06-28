import { useState } from 'react';
import { useAppSelector } from "../../store";

export const useFilter = () => {

  const { partners, partnersPerPage } = useAppSelector( state => state.partners );
  const [partnerFiltered, setPartnerFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const partnersLength = partnerFiltered.length || partners.length;
  const myPartners = partnerFiltered.length ? partnerFiltered : partners;

  // Get current partners.
  const indexOfLastPost = currentPage * partnersPerPage;
  const indexOfFirstPost = indexOfLastPost - partnersPerPage;
  const currentPartners = myPartners.slice(indexOfFirstPost, indexOfLastPost);
  
  const handleChangePage = (number) => {
    setCurrentPage(number);
  }

  const handleSearch = () => {
    setPartnerFiltered( () => {
      const filtered = partners.filter( partner => (
        partner.partnerName.toLowerCase().indexOf(searchText) > -1 /*|| partner.email.toLowerCase().indexOf(searchText) > -1*/
      ))

      return [...filtered];
    }
    );
    setCurrentPage(1);
  }

  return {
    currentPage,
    searchText,
    partnerFiltered,
    setCurrentPage,
    setSearchText,
    setPartnerFiltered,
    currentPartners,
    partnersLength,
    handleChangePage,
    handleSearch,
    partnersPerPage
  }
};