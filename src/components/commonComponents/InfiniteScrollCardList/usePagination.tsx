import { Context, useContext, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalAttributes } from "../../contexts/ModalContext/models";
import ErrorMessager from "../ErrorMessager";
import { FetchCallback, Page } from "./models";

const  usePagination = <T, > (fetchCallback: FetchCallback<T>, pageLimit: number) => {
  const [page, setPage] = useState<Page<T>>({
    isLoading: false,
    items: [],
  });
  const { handleModal } = useContext(ModalContext as Context<ModalAttributes>);

  const getNextPage = async () => {
    setPage({ ...page, isLoading: true });
  
    try {
      const newItems = await fetchCallback(pageLimit, page.items.length);

      setPage({
        isLoading: false,
        items: [...page.items, ...newItems],
      });
    } catch (error) {
      handleModal(true, <ErrorMessager error={error} />);
      setPage({ ...page, isLoading: false });
    }
  };

  return {
    ...page,
    getNextPage,
  };
};

export default usePagination;