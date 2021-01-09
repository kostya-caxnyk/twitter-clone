import React from 'react';
import { NavLink } from 'react-router-dom';
import useHomeStyles from '../../HomePage/useHomeStyles';

const Tabs: React.FC<{ username: string }> = ({ username }) => {
  const s = useHomeStyles();

  return (
    <div className={s.profileTabs}>
      <NavLink
        to={`/profile/${username}`}
        activeClassName={s.profileActiveLink}
        style={{ width: '20%' }}
        exact>
        <div className={s.profileTab}>Твиты</div>
      </NavLink>
      <NavLink
        to={`/profile/${username}/with_replies`}
        style={{ width: '35%' }}
        activeClassName={s.profileActiveLink}
        exact>
        <div className={s.profileTab}>Твиты и ответы</div>
      </NavLink>
      <NavLink
        to={`/profile/${username}/media`}
        style={{ width: '20%' }}
        activeClassName={s.profileActiveLink}
        exact>
        <div className={s.profileTab}>Медиа</div>
      </NavLink>
      <NavLink
        to={`/profile/${username}/likes`}
        style={{ width: '25%' }}
        activeClassName={s.profileActiveLink}
        exact>
        <div className={s.profileTab}>Нравится</div>
      </NavLink>
    </div>
  );
};

export default Tabs;
