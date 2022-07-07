import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sortByActive, sortByName } from '../../store';
const trStylesDefault = 'text-sm leading-normal uppercase rounded-tr rounded-tl md:h-12';
const trColorsDefault = 'text-gray-600 bg-gray-200';

export const TableHead = ({ theadItems, theadTrStyles, theadTrColors, theadTrGridStyles }) => {

  const { namedSort, activedSort } = useAppSelector( state => state.partners );
  const dispatch = useAppDispatch();

  return (
    <thead>
      <tr className={`${ theadTrStyles || trStylesDefault } ${ theadTrColors || trColorsDefault } ${ theadTrGridStyles || '' }`}>
        { 
          theadItems.map( ({ label, stylesClasses }, index) => (
            <th
              key={ label }
              className={`select-none ${ index < ( theadItems.length - 1 ) ? 'border-r-2 border-gray-300' : '' } ${ stylesClasses } ${ label === "Name" || label === "Active" ? 'cursor-pointer relative' : '' }`}
              onClick={ label === "Name" ? () => { dispatch(sortByName()) } : label === "Active" ? () => { dispatch(sortByActive()) } : null }
            >
              { label }
              { label === "Name" && !namedSort ?
                <ChevronDownIcon className="absolute right-0 z-10 w-6 h-6 mr-2 top-2/4 -translate-y-2/4" />
                :
                label === "Name" && namedSort ?
                <ChevronUpIcon className="absolute right-0 z-10 w-6 h-6 mr-2 top-2/4 -translate-y-2/4" /> : null
              }
              { label === "Active" && !activedSort ?
                <ChevronDownIcon className="absolute right-0 z-10 w-6 h-6 mr-2 top-2/4 -translate-y-2/4" />
                :
                label === "Active" && activedSort ?
                <ChevronUpIcon className="absolute right-0 z-10 w-6 h-6 mr-2 top-2/4 -translate-y-2/4" /> : null
              }
            </th>
          ))
        }
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  theadItems: PropTypes.arrayOf(PropTypes.shape(
    { 
      label: PropTypes.string.isRequired, 
      stylesClasses: PropTypes.string.isRequired
    }
  )).isRequired,
  theadTrStyles: PropTypes.string,
  theadTrColors: PropTypes.string,
  theadTrGridStyles: PropTypes.string
};
