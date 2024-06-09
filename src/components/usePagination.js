import { Pagination } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const getData = ({ data, isLoading }) => {
  return { data, isLoading };
};

const usePagination = ({ useQuery }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get("page");

  const { data, isLoading } = useQuery(page);

  getData({ data, isLoading });

  if (!page) {
    setSearchParams("?page=1");
  } else {
    page = parseInt(page);
  }
  const handleNav = (p) => {
    setSearchParams("?page=" + p);
  };
  return (
    <Pagination
      count={10}
      color="primary"
      page={page}
      onChange={(e, p) => {
        handleNav(p);
      }}
    />
  );
};

export default usePagination;
