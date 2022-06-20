import { EyeIcon, PencilAltIcon } from "@heroicons/react/solid";

const trStylesDefault = "text-sm leading-normal md:h-12";
const trColorsDefault = "text-gray-600 bg-white";

export const TableBody = ({ tbodyItems, tbodyTrStyles, tbodyTrColors, tbodyTrGridStyles }) => {
  return (
    <tbody>
      {
        tbodyItems.map(item => (
          <tr
            key={ item.id }
            className={`border-b border-gray-200 h-14 md:h-16 table-partner-item ${ tbodyTrStyles || trStylesDefault } ${ tbodyTrColors || trColorsDefault } ${ tbodyTrGridStyles || '' }`}
          >
            <td className="px-6 py-3 font-semibold text-left whitespace-nowrap">{ item.name }</td> 
            <td className="hidden px-6 py-3 text-left whitespace-nowrap xl:block">{ item.email }</td> 
            <td className="px-6 py-3 font-medium text-center">{ item.isActive ? 'Yes' : 'No'}</td> 
            <td className="justify-center hidden grid-flow-col gap-2 px-6 py-3 text-center lg:grid justify-items-center reports">{ item.typesReport.map( type => ( <span key={ type } className={`${ type.toLowerCase() } px-3 py-1 text-xs text-white uppercase rounded-full`}>{ type }</span> )) }</td> 
            <td className="grid justify-center grid-flow-col gap-5 px-6 py-3 text-center justify-items-center">
              <EyeIcon className="w-6 h-6 text-gray-700 cursor-pointer" title="Watch" />
              <PencilAltIcon className="w-6 h-6 text-gray-700 cursor-pointer" title="Edit" />
            </td> 
          </tr>
        ))
      }
    </tbody>
  )
}
