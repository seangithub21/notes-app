import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import {
  setNotesSearchList,
  setSearchQuery,
} from "features/notesSearch/notesSearchSlice";
import { setSortQuery } from "features/notes/notesSlice";

import Input from "components/common/Input";

const Search = () => {
  const {
    notesList: { notesList },
    notesSearchList: { searchQuery },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery) {
      dispatch(setSortQuery(""));
      const searchList = notesList.filter((note) => {
        return (
          note.title
            .toString()
            .toLocaleLowerCase()
            .match(searchQuery.toString().toLocaleLowerCase()) ||
          note.body
            .toString()
            .toLocaleLowerCase()
            .match(searchQuery.toString().toLocaleLowerCase())
        );
      });
      dispatch(setNotesSearchList(searchList));
    } else {
      dispatch(setNotesSearchList([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearch = (searchValue) => {
    dispatch(setSearchQuery(searchValue));
  };

  const handleResetSearch = () => {
    dispatch(setSearchQuery(""));
  };

  return (
    <Input
      fullWidth
      placeholder="Search"
      onChange={handleSearch}
      value={searchQuery}
      InputProps={{
        endAdornment: searchQuery && (
          <CloseOutlinedIcon
            onClick={handleResetSearch}
            sx={{ cursor: "pointer" }}
          />
        ),
      }}
    />
  );
};

export default Search;
