import PropTypes from 'prop-types';

export const HomeCardItem = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-between w-full max-w-md px-8 py-4 bg-white rounded-lg shadow-lg">

      <section>
        <h3 className="text-xl font-semibold text-center text-gray-800">{ title }</h3>
        <p className="mt-2 text-gray-600">{ description }</p>
      </section>

    </div>
  );
};

HomeCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
