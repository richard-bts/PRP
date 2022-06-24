import PropTypes from 'prop-types';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const trColorsDefault = 'text-gray-600 bg-white';
const trStylesDefault = 'text-sm leading-normal md:h-12';

export const TableBody = ({ tbodyItems, tbodyTrStyles, tbodyTrColors, tbodyTrGridStyles, setPartnerToRemove, handleEditPartner, handleOpenPopup }) => {

  const handleRemovePartner = (id, name) => {
    setPartnerToRemove({
      id,
      name
    });
    handleOpenPopup();
  }

  return (
    <tbody>
      {
        tbodyItems.map(({ id, name, email, isActive, typesReport }) => (
          <tr
            key={ id }
            className={`border-b border-gray-200 h-14 md:h-16 table-partner-item ${ tbodyTrStyles || trStylesDefault } ${ tbodyTrColors || trColorsDefault } ${ tbodyTrGridStyles || '' }`}
          >
            <td 
              onDoubleClick={ () => handleEditPartner({ id, name, email, isActive, typesReport }) }
              className="px-6 py-3 font-semibold text-left cursor-pointer whitespace-nowrap"
            >{ name }</td> 
            <td 
              onDoubleClick={ () => handleEditPartner({ id, name, email, isActive, typesReport }) }
              className="hidden px-6 py-3 text-left cursor-pointer whitespace-nowrap xl:block"
            >{ email }</td> 
            <td 
              onDoubleClick={ () => handleEditPartner({ id, name, email, isActive, typesReport }) }
              className="hidden px-6 py-3 font-medium text-center cursor-pointer sm:block"
            >{ isActive ? 'Yes' : 'No'}</td> 
            <td 
              onDoubleClick={ () => handleEditPartner({ id, name, email, isActive, typesReport }) }
              className="justify-center hidden grid-flow-col gap-2 px-6 py-3 text-center cursor-pointer lg:grid justify-items-center reports"
            >
              { typesReport?.map( ({ type, status }) => (
                <span key={ type } className={`${ type.length > 0 ? 'text-xs text-white' : '' } ${ type.toLowerCase() } ${ status ? '' : 'hidden' } px-3 py-1 uppercase rounded-full whitespace-nowrap`}>{ type }</span> )) 
              }
            </td> 
            <td className="grid justify-center grid-flow-col gap-5 px-6 py-3 text-center justify-items-center">
              <PencilAltIcon
                className="w-6 h-6 text-gray-700 transition-colors duration-300 cursor-pointer hover:text-cyan-600"
                title="Edit"
                onClick={ () => handleEditPartner({ id, name, email, isActive, typesReport }) }
              />
              <TrashIcon
                className="w-6 h-6 text-gray-700 transition-colors duration-300 cursor-pointer hover:text-red-600"
                title="Watch"
                onClick={ () => handleRemovePartner(id, name) }
              />
            </td> 
          </tr>
        ))
      }
    </tbody>
  );
};

TableBody.propTypes = {
  tbodyItems: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      typesReport: PropTypes.arrayOf(PropTypes.shape(
        {
          status: PropTypes.bool, 
          type: PropTypes.string.isRequired
        }
      )).isRequired
    }
    )).isRequired,
  handleEditPartner: PropTypes.func.isRequired,
  setPartnerToRemove: PropTypes.func.isRequired,
  handleOpenPopup: PropTypes.func.isRequired,
  tbodyTrGridStyles: PropTypes.string,
  tbodyTrStyles: PropTypes.string,
  tbodyTrColors: PropTypes.string
};
