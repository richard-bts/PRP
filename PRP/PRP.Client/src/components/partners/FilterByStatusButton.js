import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { sortByActive, useAppDispatch } from '../../store';

const options = [
  { name: 'Active' },
  { name: 'Inactive' }
]

export const FilterByStatusButton = () => {
  const [selected, setSelected] = useState({name: 'Filter By Status'})
  const dispatch = useAppDispatch();

  const handleChange = (option) => {
    setSelected(option);
    if(option.name === 'Active') {
      dispatch(sortByActive(true))
    } else {
      dispatch(sortByActive(false))
    }
  }

  return (
    <div className="search_bar filter__button">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative h-full">
          <Listbox.Button className="relative w-full h-full py-2 pl-3 text-lg text-left cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block h-full leading-8 table_text-black raleway-m">{selected.name}</span>
            <span className="absolute inset-y-0 flex items-center pointer-events-none right-1">
              <ChevronDownIcon className="w-5 h-5 ml-2 text-black" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 h-12 leading-8 ${
                      active ? 'bg-slate-100' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}