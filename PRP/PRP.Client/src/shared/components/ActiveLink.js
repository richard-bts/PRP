import { useState } from "react";
import { useRouter } from "next/router";

const ActiveLink = ({ label, href, stylesClass }) => {

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
  )
}

export default ActiveLink;