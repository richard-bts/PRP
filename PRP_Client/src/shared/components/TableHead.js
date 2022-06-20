const trStylesDefault = "text-sm leading-normal uppercase rounded-tr rounded-tl md:h-12";
const trColorsDefault = "text-gray-600 bg-gray-200";

export const TableHead = ({ theadItems, theadTrStyles, theadTrColors, theadTrGridStyles }) => {
  return (
    <thead>
      <tr className={`${ theadTrStyles || trStylesDefault } ${ theadTrColors || trColorsDefault } ${ theadTrGridStyles || '' }`}>
        { 
          theadItems.map( item => (
            <th key={ item.label } className={ item.stylesClasses }>{ item.label }</th>
          ))
        }
      </tr>
    </thead>
  )
}
