import { SearchIcon } from '@heroicons/react/solid';
import { ButtonIcon } from '../../shared/components/ButtonIcon';

export const SearchBar = ({ setSearchText, searchText, handleSearch }) => {
  return (
    <div className="flex justify-center">
      <div className="xl:w-96">
        <div className="relative flex items-stretch w-full input-group">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-tl rounded-bl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
            placeholder="Search partners"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={ searchText }
            onChange={ e => setSearchText(e.target.value) }
          />
          <ButtonIcon
            onClick={ handleSearch }
            btnLabel="Search"
          >
            <SearchIcon className="w-5 h-5 text-white" />
          </ButtonIcon>
        </div>
      </div>
    </div>
  )
}
