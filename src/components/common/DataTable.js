import React from "react";
import { LIMIT } from "../../domain/constant";
import TableDeleteBtn from "./TableDeleteBtn";
import TableEditBtn from "./TableEditBtn";
import TableViewBtn from "./TableViewBtn";
import Spinner from "../layout/Spinner";

function DataTable({ loading, data, page, keys, deleteBtnClicked, field }) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className="desktop-only">
            <table className="table align-middle  table-striped ">
              <thead>
                <tr className="bg-transparent" role="row">
                  <th>#</th>
                  {keys &&
                    keys.map((item) => {
                      return <th> {item.name} </th>;
                    })}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!loading ? (
                  data &&
                  data.map((single, index) => {
                    return (
                      <tr key={`single-${index}`}>
                        <td className="sorting_1">
                          {index + 1 + (page - 1) * LIMIT}
                        </td>
                        {keys &&
                          keys.map((item) => {
                            return <td> {single[item.value]} </td>;
                          })}
                        <td>
                          <TableViewBtn id={single.id} item={field} />
                          <TableEditBtn id={single.id} item={field} />
                          <TableDeleteBtn
                            id={single.id}
                            deleteBtnClicked={deleteBtnClicked}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={20} className="text-center">
                      <Spinner />
                    </td>
                  </tr>
                )}
                {data && data.length === 0 && (
                  <tr>
                    <td colSpan={20}>No result found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mobile-only">
            {!loading ? (
              data &&
              data.map((single, index) => {
                return (
                  <div className="card" key={`single-${index}`}>
                    <div className="card-header">
                      #{index + 1 + (page - 1) * LIMIT}
                    </div>
                    <div className="card-body">
                      {keys &&
                        keys.map((item) => {
                          return (
                            <div>
                              <div className="title"> {item.name}</div>
                              <div className="value">
                                {single[item.value] ? single[item.value] : "-"}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="card-footer text-center">
                      <TableViewBtn id={single.id} item={field} />
                      <TableEditBtn id={single.id} item={field} />
                      <TableDeleteBtn
                        id={single.id}
                        deleteBtnClicked={deleteBtnClicked}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <tr>
                <td colSpan={20} className="text-center">
                  <Spinner />
                </td>
              </tr>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataTable;
