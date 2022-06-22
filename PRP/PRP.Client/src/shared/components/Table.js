import PropTypes from 'prop-types';
import { TableHead } from './';
import { TableBody as TableBodyPartners } from '../../components/partners';

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
  );
};

Table.propTypes = {
  theadItems: PropTypes.array.isRequired,
  tbodyItems: PropTypes.array.isRequired,
  theadTrGridStyles: PropTypes.string.isRequired,
  tbodyTrGridStyles: PropTypes.string.isRequired,
  tableStyles: PropTypes.string.isRequired,
  theadTrColors: PropTypes.string,
  theadTrStyles: PropTypes.string,
  tbodyTrColors: PropTypes.string,
  tbodyTrStyles: PropTypes.string
};
