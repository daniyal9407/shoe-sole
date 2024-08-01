import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.css";
import CustomButton from "../CustomButton";
import { Select } from "../Select";
import { sorting } from "../../Config/TableStatus";
import { images } from "../../Assets";

const CustomFilters = (props) => {
  
  
  const [searchValue, setSearchValue] = useState("");
  
  const [selectedEntries, setSelectedEntries] = useState("");
  
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  const handleShow = () => setDropdownOpen(true);
  
  // Debounce function to delay setting search value
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced handleSearch function with a delay of 300ms
  const handleSearch = debounce((value) => {
    setSearchValue(value);
    if (props.setSearchValue) {
      props.setSearchValue(value);
    }
  }, 50);

  // Event handler for input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    handleSearch(value);
  };

  // for show entries
  const handleEntriesChange = (value) => {
    setSelectedEntries(value);
    if (props.setSelectedEntries) {
      props.setSelectedEntries(value);
    }
  };

  // for apply filter
  const handleApply = (value) => {
    setDropdownOpen(false);
    props.applyFilter();
  };

  //for clear filter
  const handleClear = () => {
    props.clearFilters();
    setSearchValue("");
    setSelectedEntries("");
    if (props.setSearchValue) {
      props.setSearchValue("");
    }
    if (props.setSelectedEntries) {
      props.setSelectedEntries("");
    }
    if (props.setFilterFrom) {
      props.setFilterFrom("");
    }
    if (props.setFilterTo) {
      props.setFilterTo("");
    }
    if (props.selectOptions) {
      props.selectOptions.forEach((option) => {
        option.setSelectedValue("");
      });
    }
    handleCanvasClose();
  };

  return (
    <>
      <div className="tableFilters">
        <div className="row justify-content-between">
          <div className="col-md-4">
            {props.setSelectedEntries === undefined ? (
              ""
            ) : (
              <div className="d-flex align-items-center gap-3 mb-2">
                <Select
                  className="showPadding"
                  value={selectedEntries}
                  onChange={handleEntriesChange}
                  label="Showing :"
                  labelclass="secondaryLabel"
                >
                  {sorting}
                </Select>
              </div>
            )}
          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-md-end">
            <div className="d-flex align-items-baseline gap-2">
              {props.searchValue === undefined ? (
                ""
              ) : (
                <div className="filterWrapper d-md-flex align-items-baseline gap-2 mb-0">
                  <div className="searchWrapper">
                    <input
                      type="text"
                      placeholder="Search..."
                      name="search"
                      className="filterInput searchInput mainInput"
                      value={searchValue}
                      onChange={handleInputChange}
                    />
                    <button className="searchButton notButton">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              )}

              <Dropdown
                align="end"
                show={isDropdownOpen}
                onToggle={handleToggleDropdown}
                className="bg-transparent filterDropdown"
              >
                <Dropdown.Toggle closeButton className="justify-content-end bg-transparent border-0 p-0">
                  <Button
                    onClick={handleShow}
                    className="bg-transparent border-0 p-0"
                  >
                    {/* <FontAwesomeIcon icon={faFilter} /> */}
                    <img src={images.filterIcon} alt="" className="img-flui filterImg" />
                  </Button>
                </Dropdown.Toggle>
                <Dropdown.Menu className="p-4">
                  <h2 className="mainTitle text-center">Filters</h2>
                  <div className="mb-3">
                    {props?.dateFilterTitle && (
                      <div className="filterWrapper">
                        <label className="filterLabel w-100 ps-4 fw-semibold mb-2">
                          {props?.dateFilterTitle} Date
                        </label>
                        <input
                          type="date"
                          placeholder="From"
                          name="from"
                          className="filterInput w-100 mb-3 mainInput"
                          value={props?.filterFrom}
                          onChange={(event) => {
                            props?.setFilterFrom(event.target.value);
                          }}
                        />
                        <label className="filterLabel w-100 ps-4 fw-semibold mb-2">
                          {props?.dateFilterTitle2} Date
                        </label>
                        <input
                          type="date"
                          placeholder="To"
                          name="to"
                          className="filterInput w-100 mainInput"
                          value={props?.filterTo}
                          onChange={(event) => {
                            props?.setFilterTo(event.target.value);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    {props?.filterSort && (
                      <div className="filterWrapper">
                        <label className="filterLabel w-100 mb-3">
                          Sort By Status:
                        </label>
                        <select
                          className="filterInput w-100 mb-3 mainInput"
                          onChange={(event) => {
                            props?.setFilterTo(event.target.value);
                          }}
                        >
                          {props?.filterSortValues.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.text}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    {props?.selectOptions?.map((option, index) => (
                      <React.Fragment key={index}>
                        {option ? (
                          <div className="">
                            <label className="d-block ps-4 fw-semibold mb-2">
                              {option?.title}
                            </label>
                            <Select
                              className="flterSelectW"
                              value={
                                option?.selectedValue ||
                                option?.selectedValueTwo ||
                                option?.selectedValueThree
                              }
                              onChange={(value) =>
                                option?.setSelectedValue
                                  ? option.setSelectedValue(value)
                                  : option?.setSelectedValueTwo
                                  ? option.setSelectedValueTwo(value)
                                  : option.setSelectedValueThree(value)
                              }
                              // label={option?.title}
                            >
                              {option?.options}
                            </Select>
                          </div>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mb-3 text-center">
                    <CustomButton
                      onClick={handleApply}
                      type="button"
                      variant="primaryBtn"
                      text="Apply"
                      className="mb-3 w-100"
                    />
                    <CustomButton
                      handleClear
                      onClick={handleClear}
                      type="button"
                      variant="secondaryBtn"
                      className="mb-3 d-block w-100"
                      text="Clear"
                    />
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header
            closeButton
            className="justify-content-end"
          ></Offcanvas.Header>
          <Offcanvas.Body className="p-5">
            <h2 className="mainTitle text-center">Filters</h2>
            <div className="mb-3">
              {props?.dateFilterTitle && (
                <div className="filterWrapper">
                  <label className="filterLabel w-100 ps-4 fw-semibold mb-2">
                   {props?.dateFilterTitle} Date
                  </label>
                  <input
                    type="date"
                    placeholder="From"
                    name="from"
                    className="filterInput w-100 mb-3 mainInput"
                    value={props?.filterFrom}
                    onChange={(event) => {
                      props?.setFilterFrom(event.target.value);
                    }}
                  />
                  <label className="filterLabel w-100 ps-4 fw-semibold mb-2">
                   {props?.dateFilterTitle2} Date
                  </label>
                  <input
                    type="date"
                    placeholder="To"
                    name="to"
                    className="filterInput w-100 mainInput"
                    value={props?.filterTo}
                    onChange={(event) => {
                      props?.setFilterTo(event.target.value);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="mb-3">
              {props?.filterSort && (
                <div className="filterWrapper">
                  <label className="filterLabel w-100 mb-3">
                    Sort By Status:
                  </label>
                  <select
                    className="filterInput w-100 mb-3 mainInput"
                    onChange={(event) => {
                      props?.setFilterTo(event.target.value);
                    }}
                  >
                    {props?.filterSortValues.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="mb-3">
              {props?.selectOptions?.map((option, index) => (
                <React.Fragment key={index}>
                  {option ? (
                    <div className="">
                    <label className="d-block ps-4 fw-semibold mb-2">{option?.title}</label>
                    <Select
                    className="flterSelectW"
                      value={
                        option?.selectedValue ||
                        option?.selectedValueTwo ||
                        option?.selectedValueThree
                      }
                      onChange={(value) =>
                        option?.setSelectedValue
                          ? option.setSelectedValue(value)
                          : option?.setSelectedValueTwo
                            ? option.setSelectedValueTwo(value)
                            : option.setSelectedValueThree(value)
                      }
                      // label={option?.title}
                    >
                      {option?.options}
                    </Select>
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <div className="mb-3 text-center">
              <CustomButton
                onClick={handleApply}
                type="button"
                variant="primaryBtn"
                text="Apply"
                className="mb-3 w-100"
              />
              <CustomButton
                handleClear
                onClick={handleClear}
                type="button"
                variant="secondaryBtn"
                className="mb-3 d-block w-100"
                text="Clear"
              />
            </div>
          </Offcanvas.Body>
        </Offcanvas> */}
      </div>
    </>
  );
};

export default CustomFilters;
