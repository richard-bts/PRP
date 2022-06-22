import PropTypes from 'prop-types';

export const HomeCardItem = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-between max-w-md px-8 py-4 bg-white rounded-lg shadow-lg w-72 h-60">

      <section>
        <h3 className="text-xl font-semibold text-center text-gray-800">{ title }</h3>
        <p className="mt-2 text-gray-600">{ description }</p>
      </section>

      <div className="flex justify-end mt-4">
        <a className="text-xl font-medium text-indigo-500 transition-opacity duration-300 cursor-pointer hover:opacity-70">Go there</a>
      </div>

    </div>
  );
};

HomeCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
