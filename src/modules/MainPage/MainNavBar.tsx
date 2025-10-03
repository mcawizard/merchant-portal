import { classnames } from '@core/utils/css';
import React, { memo, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Collapse } from 'reactstrap';

enum MenuType {
  sales,
  projects,
  subscriptions,
  support,
  reports,
  orders,
  timeandmaterial,
  training,
  proposals,
  hr,
}

interface MainNavBarProps {
  isMenuOpen?: boolean;
  display?: string;
  isMobileMenu?: boolean;
}
export const MainNavBar = memo((props: MainNavBarProps) => {
  const { isMobileMenu = false } = props;

  const [activeMenuIndex, setActiveMenuIndex] = useState<MenuType | null>(null);
  const toggleDropdown = (menuType: MenuType) => {
    if (isMobileMenu) {
      if (activeMenuIndex === menuType) {
        setActiveMenuIndex(null);
      } else {
        setActiveMenuIndex(menuType);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={`topnav ${props.display}`}>
        <nav className="navbar navbar-dark navbar-expand-lg topnav-menu" id="navigation">
          <Collapse isOpen={!!props.isMenuOpen} navbar id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link arrow-none" to="/todos">
                  <i className="bx bx-task mr-2"></i>
                  To-Dos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link arrow-none" to="/checklists">
                  <i className="bx bx-check-double mr-2"></i>
                  Checklists
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link arrow-none" to="/library">
                  <i className="bx bx-file mr-1"></i>
                  Library
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/#"
                  className="nav-link dropdown-toggle arrow-none"
                  onClick={e => {
                    e.preventDefault();
                    toggleDropdown(MenuType.training);
                  }}
                >
                  <i className="bx bx-book-open mr-2"></i>
                  Training
                  <div className="arrow-down"></div>
                </Link>
                <div className={classnames('dropdown-menu', { show: activeMenuIndex === MenuType.training })}>
                  <ul className="navbar-sub">
                    <li className="nav-item dropdown">
                      <Link className="dropdown-item" to="/courses">
                        Course Library
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="dropdown-item" to="/my-courses">
                        My Courses
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="dropdown-item" to="/students">
                        Students
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="dropdown-item" to="/glossary">
                        Glossary
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="dropdown-item" to="/line-up">
                        Line-Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </Collapse>
        </nav>
      </div>
    </React.Fragment>
  );
});
