import PropTypes from 'prop-types';
const trStylesDefault = 'text-sm leading-normal uppercase rounded-tr rounded-tl md:h-12';
const trColorsDefault = 'text-gray-600 bg-gray-200';

export const TableHead = ({ theadItems, theadTrStyles, theadTrColors, theadTrGridStyles }) => {
  return (
    <thead>
      <tr className={`${ theadTrStyles || trStylesDefault } ${ theadTrColors || trColorsDefault } ${ theadTrGridStyles || '' }`}>
        { 
          theadItems.map( ({ label, stylesClasses }) => (
            <th key={ label } className={ stylesClasses }>{ label }</th>
          ))
        }
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  theadItems: PropTypes.arrayOf(PropTypes.shape(
    { 
      label: PropTypes.string.isRequired, 
      stylesClasses: PropTypes.string.isRequired
    }
  )).isRequired,
  theadTrStyles: PropTypes.string,
  theadTrColors: PropTypes.string,
  theadTrGridStyles: PropTypes.string
};
