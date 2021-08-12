import { useState } from "react";
import { FetchCallback, Page } from "./models";

const usePagination = (fetchCallback: FetchCallback, pageLimit: number) => {
  const [page, setPage] = useState<Page>({
    isLoading: false,
    items: [],
  });

  const getNextPage = async () => {
    setPage({ ...page, isLoading: true });
  
    try {
      const newItems = await fetchCallback(pageLimit, page.items.length);

      setPage({
        isLoading: false,
        items: [...page.items, ...newItems],
      });
    } catch (error) {
      console.log("Error getting next page: ", error);
      setPage({ ...page, isLoading: false });
    }
  };

  return {
    ...page,
    getNextPage,
  };
};

export default usePagination;