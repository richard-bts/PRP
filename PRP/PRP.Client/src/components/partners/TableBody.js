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
        tbodyItems.map(({ id, clientId, partnerId, partnerName, email= "partneremail@partner.cdl", active, reportName }) => (
          <tr
            key={ id }
            className={`border-b border-gray-200 h-14 md:h-16 table-partner-item ${ tbodyTrStyles || trStylesDefault } ${ tbodyTrColors || trColorsDefault } ${ tbodyTrGridStyles || '' }`}
          >
            <td 
              onDoubleClick={ () => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName }) }
              className="px-6 py-3 font-semibold text-left cursor-pointer whitespace-nowrap"
            >{ partnerName }</td> 
            <td 
              onDoubleClick={ () => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName }) }
              className="hidden px-6 py-3 text-left cursor-pointer whitespace-nowrap xl:block"
            >{ email }</td> 
            <td 
              onDoubleClick={ () => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName }) }
              className="hidden px-6 py-3 font-medium text-center cursor-pointer sm:block"
            >{ active ? 'Yes' : 'No'}</td> 
            <td 
              onDoubleClick={ () => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName }) }
              className="justify-center hidden grid-flow-col gap-2 px-6 py-3 text-center cursor-pointer lg:grid justify-items-center reports"
            >
              { reportName?.includes('POD') &&
                <span className={`text-xs text-white ${ reportName.toLowerCase() } px-3 py-1 uppercase rounded-full whitespace-nowrap`}>POD</span> 
              }
              { reportName?.includes('EXCEPTION') &&
                <span className={`text-xs text-white ${ reportName.toLowerCase() } px-3 py-1 uppercase rounded-full whitespace-nowrap`}>EXCEPTION</span> 
              }
              { reportName?.includes('SCAN') &&
                <span className={`text-xs text-white ${ reportName.toLowerCase() } px-3 py-1 uppercase rounded-full whitespace-nowrap`}>SCAN REPORT</span> 
              }
              { reportName?.includes('CLEAR') &&
                <span className={`text-xs text-white ${ reportName.toLowerCase() } px-3 py-1 uppercase rounded-full whitespace-nowrap`}>CLEAR</span> 
              }
              { !reportName &&
                <span className={`text-xs font-medium bg-white text-black px-3 py-1 uppercase rounded-full whitespace-nowrap`}>don't have any Report Types</span> 
              }
            </td> 
            <td className="grid justify-center grid-flow-col gap-5 px-6 py-3 text-center justify-items-center">
              <PencilAltIcon
                className="w-6 h-6 text-gray-700 transition-colors duration-300 cursor-pointer hover:text-cyan-600"
                title="Edit"
                onClick={ () => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, typesReport }) }
              />
              <TrashIcon
                className="w-6 h-6 text-gray-700 transition-colors duration-300 cursor-pointer hover:text-red-600"
                title="Watch"
                onClick={ () => handleRemovePartner(partnerId, partnerName) }
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
      id: PropTypes.number.isRequired,
      partnerName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      active: PropTypes.number.isRequired,
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
