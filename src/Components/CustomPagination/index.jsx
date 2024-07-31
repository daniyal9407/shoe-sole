import { Pagination } from "react-bootstrap";

import "./style.css";

const CustomPagination = (props) => {
  let active = props.currentPage;
  let items = [];
  for (let number = 1; number <= props.totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => props.setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const handleChangePage = (active) => {
    props.setCurrentPage(active);
  };
  return (
    <>
      <div className="customPagination">
        <div className="row align-items-baseline">
          <div className="col-lg-6">
            {/* <p className="paginationText">1-5 of 100</p> */}
            <p className="paginationText fw-semibold">
              Showing {props?.showingItem ?? 0} Out Of {props.totalItems ?? 0}{" "}
              Entries
            </p>
          </div>
          <div className="col-lg-6 bg-white">
            <Pagination>
              <Pagination.Prev>Previous</Pagination.Prev>
              {items}
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPagination;
