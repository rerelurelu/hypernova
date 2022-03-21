import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Twemoji } from 'react-emoji-render';
import * as style from './postCard.module.less';
import Utils from '../../utils/pageUtils';

const PostCard = (props) => {
  const {
    data: {
      node: { frontmatter },
    },
  } = props;

  return (
    <Link to={Utils.resolvePageUrl(frontmatter.path)}>
      <div className={style.postCard}>
        <p className={style.postCardEmoji}>
          <Twemoji svg text={frontmatter.emoji || '🥱'} />
        </p>
        <div className={style.mrTp20}>
          <p>
            <span className={style.dateHolder}>
              {frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}
            </span>
          </p>
          <h3>{frontmatter ? frontmatter.title : ''}</h3>
          <p>{frontmatter ? frontmatter.excerpt : ''}</p>
          <p className={style.tags}>{`#${frontmatter.tags.join(' #')}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
