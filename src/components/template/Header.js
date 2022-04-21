import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../../store/actions/projects_action";
import { matchPath } from "react-router-dom";
const Header = ({ getProjects, active, project: { projects, loading } }) => {
  useEffect(() => {
    if (!projects) {
      getProjects({});
    }
    window.scrollTo(0, 0);
  }, []);

  const [openMenu, setOpenMenu] = useState(false);
  const [openAboutMenu, setOpenAboutMenu] = useState(false);

  return (
    <header>
      <section className="header">
        <div className="container-fluid">
          <div className="header-flex">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.png" />
              </Link>
            </div>
            <div className="navbar">
              <nav className="navbar navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ">
                    <li
                      className={
                        active === "HOME" ? "nav-item active" : "nav-item "
                      }
                    >
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li
                      className={
                        active === "ABOUT"
                          ? "nav-item dropdown active"
                          : "nav-item dropdown"
                      }
                      onMouseEnter={() => setOpenAboutMenu(true)}
                      onMouseLeave={() => setOpenAboutMenu(false)}
                      onClick={() => setOpenAboutMenu(!openMenu)}
                    >
                      <a className="nav-link dropdown-toggle">About Us</a>
                      <div
                        className={
                          openAboutMenu
                            ? "dropdown-menu show dropdown-main-items"
                            : "dropdown-menu dropdown-main-items"
                        }
                      >
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/who-we-are"
                        >
                          Who We Are
                        </Link>
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/our-approach"
                        >
                          Our Approach
                        </Link>
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/founders"
                        >
                          Founders
                        </Link>
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/our-team"
                        >
                          Our Team
                        </Link>
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/awards-and-recognition"
                        >
                          Awards & Recognition
                        </Link>
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/bank-details"
                        >
                          Bank Details
                        </Link>
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/legal"
                        >
                          Legal
                        </Link>
                      </div>
                    </li>
                    <li
                      className={
                        active === "PROJECTS"
                          ? "nav-item dropdown active"
                          : "nav-item dropdown"
                      }
                      onMouseEnter={() => setOpenMenu(true)}
                      onMouseLeave={() => setOpenMenu(false)}
                      onClick={() => setOpenMenu(!openMenu)}
                    >
                      <a className="nav-link dropdown-toggle">Projects</a>
                      <div
                        className={
                          openMenu
                            ? "dropdown-menu show dropdown-main-items"
                            : "dropdown-menu dropdown-main-items"
                        }
                      >
                        {projects &&
                          projects.map((project) => {
                            return (
                              <Link
                                className="dropdown-item dropdown-link-item"
                                to={`/projects/${project.slug}`}
                              >
                                {project.title}
                              </Link>
                            );
                          })}
                        <Link
                          className="dropdown-item dropdown-link-item"
                          to="/national-calamities"
                        >
                          National Calamities{" "}
                        </Link>
                      </div>
                    </li>
                    <li
                      className={
                        active === "SUCCESS_STORIES"
                          ? "nav-item active"
                          : "nav-item "
                      }
                    >
                      <Link className="nav-link" to="/success-stories">
                        Success Stories
                      </Link>
                    </li>
                    <li
                      className={
                        active === "CAUSES" ? "nav-item active" : "nav-item "
                      }
                    >
                      <Link className="nav-link" to="/causes">
                        Causes
                      </Link>
                    </li>

                    <li
                      className={
                        active === "GALLERY" ? "nav-item active" : "nav-item "
                      }
                    >
                      <Link className="nav-link" to="/events">
                        Gallery
                      </Link>
                    </li>
                    <li
                      className={
                        active === "PRESS" ? "nav-item active" : "nav-item "
                      }
                    >
                      <Link className="nav-link" to="/press-release">
                        Press
                      </Link>
                    </li>
                    <li
                      className={
                        active === "CONTACT_US"
                          ? "nav-item active"
                          : "nav-item "
                      }
                    >
                      <Link className="nav-link" to="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="donate-btn">
                    <Link
                      className="btn btn-donate my-2 my-sm-0"
                      to="/donate-now"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

const mapStateToProps = (state) => ({ project: state.project });

const mapDispatchToProps = { getProjects };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
