import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './tags.module.less';

const TagCard = (props) => {
  const {
    img, name, color,
  } = props;
  const tagPage = Config.pages.tag;
  return (
    <Link to={Utils.resolvePageUrl(tagPage, name)}>
      <div className={style.tagCard}>
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}`, margin: 'auto' }}>
              #
              {name}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
