import PropTypes from 'prop-types';
import { useEffect, useRef, useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { FormInputError } from './FormInputError';

export const FormInput = ({ placeholder, errorMessage, error, handleFormChange }) => {
  const [companyList, setCompanyList] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const isListEmpty = useRef(true);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const handleFilterCompanies = () => {
    setLoading(true);
    setFilteredCompanies(() =>
      query === ''
        ? companyList
        : companyList.filter((company) =>
          company.companyName
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        ))
    setLoading(false);
  }

  const getCompanyName = async () => {
    setLoading(true);
    const url = `http://172.24.32.132/Xcelerator/CDLPRP/api/report/GetCompanyName?Name=${query}`
    const response = await fetch(url);
    const { result } = await response.json();
    setCompanyList(result);
    setLoading(false);
    isListEmpty.current = false;
  }

  useEffect(() => {
    if (isListEmpty.current === false) return;
    getCompanyName();
  }, [query]);

  useEffect(() => {
    handleFilterCompanies();
  }, [query]);

  const handleInputChange = (e) => {
    setSelected(e);
    handleFormChange(e);
  }


  return (

    <div className="w-full top-16">
      <label className="pb-2 font-semibold text-gray-700 first-letter:uppercase">Partner name</label>
      <Combobox value={selected} onChange={ e => handleInputChange(e) }>
        <div className="relative z-50 mt-1">
          <div className="relative w-full overflow-hidden text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full h-10 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 bg-gray-100 border-none outline-none focus:ring-0 focus:bg-gray-200"
              displayValue={(company) => company.companyName}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-200 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              { loading && <div className="text-center">Loading...</div> }

              { !loading && filteredCompanies.length === 0 && query !== '' ? (
                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : ( !loading && filteredCompanies.map((company) => (
                  <Combobox.Option
                    key={company.clientID}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={company}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {company.companyName}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <FormInputError
        errorMessage={errorMessage}
        error={error}
      />
    </div>
  );
};

FormInput.propTypes = {
  handleFormChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};