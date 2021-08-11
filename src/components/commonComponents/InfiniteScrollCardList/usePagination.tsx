import { useState } from "react";

type Page = {
  isLoading: boolean;
  items: any[];
};

type FetchCallback = (pageLimit: number, offset: number) => Promise<any>;

const usePagination = (fetchCallback: FetchCallback, pageLimit: number) => {
  const [page, setPage] = useState<Page>({
    isLoading: false,
    items: [],
  });

  const getNextPage = async () => {
    setPage({ ...page, isLoading: true });

    const newItems = await fetchCallback(pageLimit, page.items.length);

    setPage({
      isLoading: false,
      items: [...page.items, ...newItems],
    });
  };

  return {
    ...page,
    getNextPage,
  };
};

export default usePagination;