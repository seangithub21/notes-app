import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, TextField } from "@mui/material";

import { setSortQuery, setSortedList } from "features/notes/notesSlice";
import { setSearchQuery } from "features/notesSearch/notesSearchSlice";

const sortOptions = [
  { label: "Title (ascending)", value: "titleAsc" },
  { label: "Title (descending)", value: "titleDes" },
  { label: "Date created (ascending)", value: "dateCreatedAsc" },
  { label: "Date created (descending)", value: "dateCreatedDes" },
  { label: "Date modified (ascending)", value: "dateModifiedAsc" },
  { label: "Date modified (descending)", value: "dateModifiedDes" },
];

const Sort = () => {
  const {
    notesList: { sortQuery, notesList },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (option) => dispatch(setSortQuery(option));

  useEffect(() => {
    if (!sortQuery) {
      dispatch(setSortedList([]));
    } else {
      dispatch(setSearchQuery(""));
    }
    const sortedList = sortQuery
      ? notesList.slice().sort((a, b) => {
          return sortQuery.includes("dateCreated")
            ? new Date(a.dateCreated) - new Date(b.dateCreated)
            : sortQuery.includes("dateModified")
            ? new Date(a.dateModified) - new Date(b.dateModified)
            : a.title - b.title;
        })
      : [];
    if (sortQuery && sortQuery.includes("Asc")) {
      dispatch(setSortedList(sortedList));
    } else {
      dispatch(setSortedList(sortedList.reverse()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortQuery]);

  return (
    <TextField
      select
      size="small"
      onChange={(event) => handleChange(event.target.value)}
      value={sortQuery}
      label="Sort by"
      fullWidth
    >
      <MenuItem value={""}>none</MenuItem>
      {sortOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Sort;
