import PropTypes from 'prop-types';

export const PageTitle = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold uppercase">{ title }</h2>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};
