import { Context, useContext, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalAttributes } from "../../contexts/ModalContext/models";
import ErrorMessager from "../ErrorMessager";
import { FetchCallback, Page } from "./models";

const usePagination = <T,>(
  fetchCallback: FetchCallback<T>,
  pageLimit: number
) => {
  const [page, setPage] = useState<Page<T>>({
    isLoading: false,
    items: [],
  });
  const { handleModal } = useContext(ModalContext as Context<ModalAttributes>);

  const getItems = async (
    getAllItems: (fetchedItems: T[]) => T[],
    offset = page.items.length
  ) => {
    setPage({ ...page, isLoading: true });

    try {
      const newItems = await fetchCallback(pageLimit, offset);

      setPage({
        isLoading: false,
        items: getAllItems(newItems),
      });
    } catch (error) {
      handleModal(true, <ErrorMessager error={error as Error} />);
      setPage({ ...page, isLoading: false });
    }
  };

  const addNextPage = async () =>
    getItems((newItems) => [...page.items, ...newItems]);

  const getFirstPage = async () => getItems((newItems) => newItems, 0);

  return {
    ...page,
    addNextPage,
    getFirstPage,
  };
};

export default usePagination;
