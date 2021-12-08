import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";
import AlertBox from "./AlertBox";

const Header = ({ auth: { user }, logout }) => {
  const [activeProfile, setActiveProfile] = useState(false);
  return (
    <div>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <Link to="/dashboard" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="/images/logo.png" alt="Fitlook " height={45} />
                  </span>
                  <span className="logo-lg">
                    <img src="/images/logo.png" alt="Fitlook" height={45} />{" "}
                  </span>
                </Link>
                <Link to="/dashboard" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="/images/logo.png" alt="Fitlook" height={45} />
                  </span>
                  <span className="logo-lg">
                    <img src="/images/logo.png" alt="Fitlook" height={45} />{" "}
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-bs-toggle="collapse"
                data-bs-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars" />
              </button>
              {/* App Search*/}
            </div>
            <div className="d-flex">
              <div
                className="dropdown d-inline-block"
                onMouseEnter={() => setActiveProfile(!activeProfile)}
                onMouseLeave={() => setActiveProfile(!activeProfile)}
              >
                <button
                  type="button"
                  className="btn header-item"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="/images/logo.png"
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1 fw-medium">
                    {user.name}
                  </span>
                  <i className="fa fa-angle-down d-none d-xl-inline-block" />
                </button>
                <div
                  className={
                    activeProfile
                      ? "dropdown-menu dropdown-menu-end show"
                      : "dropdown-menu dropdown-menu-end"
                  }
                >
                  <Link className="dropdown-item" to="/profile">
                    <i className="fa fa-user font-size-16 align-middle me-1" />{" "}
                    Profile
                  </Link>

                  <div className="dropdown-divider" />
                  <button
                    style={{ cursor: "pointer" }}
                    className="dropdown-item"
                    onClick={() => logout()}
                  >
                    <i className="fa fa-lock font-size-16 align-middle me-1" />{" "}
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <div
                className="collapse navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  arrow-none"
                      to="/dashboard"
                      id="topnav-dashboard"
                      role="button"
                    >
                      <i data-feather="home" />
                      <span data-key="t-dashboards">Dashboard</span>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Benificaries</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Benificiaries</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/orders"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Benificiaries
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Scibe Requests</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/orders"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Scibe Requests
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Volunteer Requests</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/orders"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Volunteer Requests
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Wishes</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/orders"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Wishes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Campaigns</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Projects</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/categories"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Projects
                          </Link>
                          <Link
                            to="/categories/add"
                            className="dropdown-item"
                            data-key="t-chat"
                          >
                            Add Project
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Causes</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/products"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Causes
                          </Link>
                          <Link
                            to="/products/add"
                            className="dropdown-item"
                            data-key="t-chat"
                          >
                            Add Cause
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Products</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/coupons"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Products
                          </Link>
                          <Link
                            to="/coupons/add"
                            className="dropdown-item"
                            data-key="t-chat"
                          >
                            Add Product
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Size</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/sizes"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Sizes
                          </Link>
                          <Link
                            to="/sizes/add"
                            className="dropdown-item"
                            data-key="t-chat"
                          >
                            Add Size
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Blogs</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/blogs"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Blogs
                      </Link>
                      <Link
                        to="/blogs/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Blogs
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Pages</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/pages"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Pages
                      </Link>
                      <Link
                        to="/pages/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Page
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Contacts</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/contacts"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Contact
                      </Link>
                      <Link
                        to="/contacts/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Contact
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Newsletters</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/newsletters"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Newsletters
                      </Link>
                      <Link
                        to="/newsletters/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Newsletter
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">FAQs</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/faqs"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All FAQs
                      </Link>
                      <Link
                        to="/faqs/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add FAQ
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Testimonials</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/testimonials"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Testimonials
                      </Link>
                      <Link
                        to="/testimonials/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Testimonial
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Banners</span>{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Banners</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/banners"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Banners
                          </Link>
                          <Link
                            to="/banners/add"
                            className="dropdown-item"
                            data-key="t-chat"
                          >
                            Add Banner
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item  arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Mobile Banners</span>{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/mobile_banners"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            All Mobile Banners
                          </Link>
                          <Link
                            to="/mobile_banners/add"
                            className="dropdown-item"
                            data-key="t-chat"
                          >
                            Add Mobile Banner
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="main-content" id="miniaresult" />
      </div>
      <AlertBox />
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
