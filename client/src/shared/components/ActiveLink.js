import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export const ActiveLink = ({ label, href, stylesClass }) => {

  const router = useRouter();
  const activeStyles = router.asPath === href ? 'text-black' : 'text-slate-400';

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  }

  return (
    <a
      href={ href }
      onClick={ handleClick }
      className={`${ activeStyles } ${ stylesClass }`}
    >{ label }</a>
  );
};

ActiveLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  stylesClass: PropTypes.string
};
