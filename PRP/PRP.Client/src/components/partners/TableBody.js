import PropTypes from 'prop-types';
import { PencilAltIcon } from '@heroicons/react/solid';

const trColorsDefault = 'text-gray-600 bg-white';
const trStylesDefault = 'text-sm leading-normal md:h-12';

export const TableBody = ({ tbodyItems, tbodyTrStyles, tbodyTrColors, tbodyTrGridStyles, handleEditPartner }) => {
  return (
    <tbody>
      {
        tbodyItems.map(({ id, clientId, partnerId, partnerName, email = [{ partner_email: "" }], active, reportName = [] }) => (
          <tr
            key={`${partnerName}-${partnerId}`}
            className={`border-b border-gray-200 h-14 md:h-16 table-partner-item select-none ${tbodyTrStyles || trStylesDefault} ${tbodyTrColors || trColorsDefault} ${tbodyTrGridStyles || ''}`}
          >
            <td
              onDoubleClick={() => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName })}
              className="px-6 py-3 font-semibold text-left cursor-pointer max-h-16 whitespace-nowrap"
            >{partnerName}</td>
            <td
              onDoubleClick={() => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName })}
              className="hidden max-h-full px-6 py-3 overflow-hidden text-left cursor-pointer xl:grid"
            >
              {email?.map(({ partner_email }, index) => index < 2 && (
                <span key={`${partner_email}+${index}`} className="h-5 truncate">{partner_email ?? ''}</span>
              ))}
            </td>
            <td
              onDoubleClick={() => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName })}
              className="hidden px-6 py-3 font-medium text-center cursor-pointer max-h-16 sm:block"
            >{active ? 'Yes' : 'No'}</td>
            <td
              onDoubleClick={() => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName })}
              className="relative justify-center hidden grid-flow-col gap-2 px-6 py-3 text-center cursor-pointer max-h-16 lg:grid justify-items-center reports group"
            >
              {reportName.length >= 3 ?
                <>
                  <span className={`text-xs text-white ${reportName[0]?.report_name?.toLowerCase()} px-1 xl:px-2 py-1 uppercase rounded-full whitespace-nowrap`}>{reportName[0].report_name}</span>
                  <span className="text-xs font-semibold leading-6">+ {reportName.length - 1} others</span>
                </>
                : reportName.length === 2 ?
                  <>
                    <span className={`text-xs text-white ${reportName[0]?.report_name?.toLowerCase()} px-1 xl:px-2 py-1 uppercase rounded-full whitespace-nowrap`}>{reportName[0].report_name}</span>
                    <span className="text-xs font-semibold leading-6">+ 1 other</span>
                  </>
                  : reportName.length > 0 ? <span className={`text-xs text-white ${reportName[0]?.report_name?.toLowerCase()} px-1 xl:px-2 py-1 uppercase rounded-full whitespace-nowrap`}>{reportName[0]?.report_name}</span>
                    : <span>No reports</span>
              }

              { reportName.length > 1 &&
                <div className="absolute invisible max-w-xs overflow-hidden text-xs font-semibold text-center uppercase transition-opacity duration-500 ease-in-out rounded-md shadow-md opacity-0 w-52 group-hover:opacity-100 group-hover:visible left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
                  { reportName.map(({ report_name }, index) => (
                    <span
                      key={`${report_name}-${index}`}
                      className={`block w-full p-2 text-white tooltip-${ report_name.toLowerCase() }`}
                    >{ report_name }</span>
                  ))}
                </div>
              }
            </td>
            <td className="grid justify-center grid-flow-col gap-5 px-6 py-3 text-center max-h-16 justify-items-center">
              <PencilAltIcon
                className="w-6 h-6 text-gray-700 transition-colors duration-300 cursor-pointer hover:text-cyan-600"
                title="Edit"
                onClick={() => handleEditPartner({ id, clientId, partnerId, partnerName, email, active, reportName })}
              />
            </td>
          </tr>
        ))
      }
      {
        !tbodyItems.length &&
        <tr className="h-20 border-b border-gray-200 md:h-20 table-partner-item">
          <td className="text-lg font-medium text-center text-gray-400 uppercase">NO PARTNERS TO SHOW</td>
        </tr>
      }
    </tbody>
  );
};

TableBody.propTypes = {
  tbodyItems: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      partnerName: PropTypes.string.isRequired,
      email: PropTypes.array,
      active: PropTypes.number.isRequired,
      reportName: PropTypes.array
    }
  )).isRequired,
  tbodyTrStyles: PropTypes.string,
  tbodyTrColors: PropTypes.string,
  tbodyTrGridStyles: PropTypes.string,
  handleEditPartner: PropTypes.func.isRequired
};
