import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savedStatus, selectedItem } from "../features/filter/filterSlice";

export default function SideBar() {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    console.log(radioValue);
    dispatch(savedStatus(radioValue));
  }, [dispatch, radioValue]);

  useEffect(() => {
    dispatch(selectedItem(selectedValue));
  }, [dispatch, selectedValue]);

  const onChageHandler = (e) => {
    setRadioValue(e.target.value);
  };

  const onSelectHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={onSelectHandler}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                // checked={radioValue === false}
                defaultChecked
                value={""}
                className="radio"
                onChange={onChageHandler}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                // checked={radioValue === true}
                value={"savedChecked"}
                className="radio"
                onChange={onChageHandler}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
