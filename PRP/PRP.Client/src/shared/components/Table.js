import PropTypes from 'prop-types';
import { TableHead } from './';
import { Form } from '../../components/partners/Form';
import { TableBody as TableBodyPartners } from '../../components/partners';
import { useAppSelector } from '../../store';

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
    tableStyles,
    handleCloseForm,
    handleEditPartner,
    handleRemovePartner
  }
) => {

  const { openForm } = useAppSelector( state => state.partners );

  return (
    <>
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
          handleEditPartner={ handleEditPartner }
          handleRemovePartner={ handleRemovePartner }
        />
      </table>
      { openForm && <Form handleCloseForm={ handleCloseForm } /> }
    </>
  );
};

Table.propTypes = {
  theadItems: PropTypes.array.isRequired,
  tbodyItems: PropTypes.array.isRequired,
  theadTrGridStyles: PropTypes.string.isRequired,
  tbodyTrGridStyles: PropTypes.string.isRequired,
  tableStyles: PropTypes.string.isRequired,
  handleCloseForm: PropTypes.func.isRequired,
  theadTrColors: PropTypes.string,
  theadTrStyles: PropTypes.string,
  tbodyTrColors: PropTypes.string,
  tbodyTrStyles: PropTypes.string
};
