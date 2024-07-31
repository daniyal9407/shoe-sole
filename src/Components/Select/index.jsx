import React, { useEffect, useState } from "react";

export const Select = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(props.value || ""); // Set the initial selected value
  }, [props.value]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (props?.onChange) {
      props.onChange(value);
    }
  };

  return (
    <>
      <label className={props?.labelclass ? props?.labelclass : ""}>
        {props?.label}
        {props?.span ? <span className="red-text">*</span> : ""}
      </label>

      <select
        name={props?.name}
        id={props?.id}
        value={selectedValue}
        onChange={handleChange}
        className={`mainInput w-auto ${props.className}`}
      >
        {props?.children?.map((item) => (
          <option key={item?.value} value={item?.value}>
            {item?.text}
          </option>
        ))}
      </select>
    </>
  );
};
