import { TableBody as TableBodyPartners } from "../../components/partners/TableBody";
import { TableHead } from "./TableHead";

export const Table = (
  {
    theadItems,
    tbodyItems,
    theadTrGridStyles,
    theadTrColors,
    theadTrStyles,
    tbodyTrGridStyles,
    tbodyTrColors,
    tbodyTrStyles,
    tableStyles
  }
) => {

  return (
    <table className={ tableStyles }>
      <TableHead
        theadItems={ theadItems }
        theadTrGridStyles={ theadTrGridStyles }
        theadTrColors={ theadTrColors }
        theadTrStyles={ theadTrStyles }
      />

      <TableBodyPartners
        tbodyItems={ tbodyItems }
        tbodyTrGridStyles={ tbodyTrGridStyles }
        tbodyTrColors={ tbodyTrColors }
        tbodyTrStyles={ tbodyTrStyles }
      />
    </table>
  )
}
