import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import style from './backTop.module.less';
/* Disable importing Font Awesome css */
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const BackTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleBackTop = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleBackTop)
      return () => window.removeEventListener(`scroll`, handleBackTop)
    }
  })

  return (
    <>
      {show && (
        <div onClick={handleClick} id={style.backTopBtn} aria-label="to top">
          <FontAwesomeIcon icon={faChevronUp} className={style.arrowIcon} />
        </div>
      )}
    </>
  )
}

export default BackTop
