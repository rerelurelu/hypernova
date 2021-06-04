import React from 'react';
import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import * as style from './404.module.less';

export default () => {
  <>
    <div className={style.main}>
      <div className={style.glitch} data-text="404">404</div>
        <h3 className={`${style.outline} ${style.errorMessage}`}>page not found</h3>
        <h3 className={style.errorMessage}>Perhaps you misspelled the url ot it has been removed.</h3>
    </div>
  </>
};
