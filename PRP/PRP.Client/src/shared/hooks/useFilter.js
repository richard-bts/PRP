import { useState } from 'react';
import { setCurrentPage, useAppDispatch, useAppSelector } from "../../store";

export const useFilter = () => {

  const { partners, partnersPerPage, currentPage } = useAppSelector( state => state.partners );
  const finalPartners = partners.map( partner => {
    return {
      ...partner,
      email: partner.email?.split(','),
    }
  });
  const dispatch = useAppDispatch();
  const [partnerFiltered, setPartnerFiltered] = useState([]);
  const [searchText, setSearchText] = useState('');

  const partnersLength = partnerFiltered.length || finalPartners.length;
  const myPartners = partnerFiltered && searchText.length ? partnerFiltered : finalPartners;

  // Get current partners.
  const indexOfLastPost = currentPage * partnersPerPage;
  const indexOfFirstPost = indexOfLastPost - partnersPerPage;
  const currentPartners = myPartners.slice(indexOfFirstPost, indexOfLastPost);
  
  const handleChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const handleSearch = (value) => {
    setSearchText(value);
    setPartnerFiltered( () => {
      return finalPartners.filter( partner => {
        return partner.partnerName.toLowerCase().includes(value.toLowerCase()) /*|| partner.email.toLowerCase().includes(value.toLowerCase())*/;
        } );  
      }
    );
    dispatch(setCurrentPage(1));
  };

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
  };
};