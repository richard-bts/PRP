import { useState } from "react";
import { useSelector } from "react-redux";

export const useFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [partnerFiltered, setPartnerFiltered] = useState([]);
  const { partners } = useSelector( state => state.partners );

  const partnersLength = partnerFiltered.length || partners.length;
  const myPartners = partnerFiltered.length ? partnerFiltered : partners;
  const partnersPerPage = 2;

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
        partner.name.toLowerCase().indexOf(searchText) > -1 || partner.email.toLowerCase().indexOf(searchText) > -1
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