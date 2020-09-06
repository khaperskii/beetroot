import React from 'react';

import classNames from 'classnames';

import ReactIcon from '../../../../components/ReactIcon';

import './styles.scss';

export const LandingSidebar = props => {
  const { isOpen, list } = props;

  const sidebarClass = classNames({
    'landing-sidebar': true,
    'landing-sidebar--open': isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <div className="landing-sidebar__list">
        {list.map((item, index) => {
          return (
            <div key={index} className="landing-sidebar__list-item">
              <a href={`#${item.to}`} key={index}>
                {item.name}
              </a>

              <ReactIcon size="lg" color="red">
                {item.icon()}
              </ReactIcon>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
