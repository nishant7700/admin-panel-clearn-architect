import React from "react";
import { LIMIT } from "../../domain/constant";

function Pagination({
  data,
  page,
  prevBtnClicked,
  nextButtonClicked,
  loading,
}) {
  return (
    <div>
      {!loading ? (
        data && (
          <div className="row">
            <div className="col-sm-12 col-md-5"></div>
            <div className="col-sm-12 col-md-7">
              {page > 1 && (
                <button
                  onClick={() => prevBtnClicked()}
                  className="btn btn-secondary m-2"
                >
                  Prev
                </button>
              )}

              {data && data.length === LIMIT && (
                <button
                  onClick={() => nextButtonClicked()}
                  className="btn btn-secondary"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )
      ) : (
        <div>..</div>
      )}
    </div>
  );
}

export default Pagination;
