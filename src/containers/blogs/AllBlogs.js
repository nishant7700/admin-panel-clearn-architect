import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";
import {
  getBlogs,
  deleteBlog,
  getNextBlogs,
  getPreviousBlogs,
} from "../../store/actions/blogs_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Filters from "../../components/common/Filters";
import AddBtn from "../../components/common/AddBtn";
import { SEARCH_TERMS, view_all_table } from "../../shared/enums/blogs_enum";
import DataTable from "../../components/common/DataTable";
const AllBlogs = ({
  getBlogs,
  deleteBlog,
  getNextBlogs,
  getPreviousBlogs,
  blog: { loading, blogs },
}) => {
  const [page, setPage] = useState(1);
  const [deleteEntry, setDeleteEntry] = useState(null);
  const [q, setQ] = useState(null);
  const [term, setTerm] = useState(null);
  const [termField, setTermField] = useState(SEARCH_TERMS[0]);
  useEffect(() => {
    async function allQuery() {
      if (deleteEntry) {
        await deleteBlog(deleteEntry);
      }
      getBlogs({});
    }
    allQuery();
  }, [deleteEntry]);

  const nextButtonClicked = () => {
    if (blogs && blogs.length === LIMIT) {
      const lastBlog = blogs[blogs.length - 1];
      getNextBlogs({ last: lastBlog });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastBlog = blogs[0];
      getPreviousBlogs({
        first: lastBlog,
      });
      setPage(page - 1);
    }
  };
  const filterClicked = () => {
    if (term && term.length > 0) {
      setPage(1);
      setQ(term);
      getBlogs({ term: term, termField: termField });
    }
  };
  const deleteBlogClicked = (id) => {
    setDeleteEntry(id);
  };
  const resetFilter = () => {
    setPage(1);
    setQ(null);
    setTerm("");
    getBlogs({});
  };

  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Blogs"
          mainLinkTitle="Dashboard"
          mainLinkUrl="/dashboard"
          activeLink="Main"
        />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card"
                style={{ boxShadow: "rgb(227 233 243) 0px 4px 22px" }}
              >
                <div className="card-body">
                  <AddBtn item="blogs" title="Blog" />
                  <hr />

                  <Filters
                    q={q}
                    resetFilter={resetFilter}
                    setTerm={setTerm}
                    term={term}
                    filterClicked={filterClicked}
                    termField={termField}
                    setTermField={setTermField}
                    all_terms={SEARCH_TERMS}
                  />
                  <hr />
                  <div>
                    <DataTable
                      keys={view_all_table}
                      data={blogs}
                      field={"blogs"}
                      page={page}
                      deleteBtnClicked={deleteBlogClicked}
                      loading={loading}
                    />
                    <Pagination
                      data={blogs}
                      page={page}
                      prevBtnClicked={prevBtnClicked}
                      nextButtonClicked={nextButtonClicked}
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ blog: state.blog });

const mapDispatchToProps = {
  getBlogs,
  deleteBlog,
  getNextBlogs,
  getPreviousBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogs);
