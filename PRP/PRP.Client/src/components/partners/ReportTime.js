import PropTypes from 'prop-types'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

export const ReportTime = ({ reportDate, handleChangeDateTime }) => {

  return (
    <DateTimePicker
      onChange={ handleChangeDateTime }
      value={ reportDate } 
    />
  );
};

ReportTime.propTypes = {
  reportDate: PropTypes.object.isRequired,
  handleChangeDateTime: PropTypes.func.isRequired
}