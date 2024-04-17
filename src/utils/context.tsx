import { IComic } from "@/interfaces/comics";
import { createContext, useState } from "react";

interface ContextI {
  addCartItem: (comic: IComic) => void;
  getCartItems: () => IComic[];
}

interface ContextProps {
  children: React.ReactNode;
}

export const Context = createContext<any>(null);

export function ContextProvider({ children }: ContextProps) {
  const [comics, setComics] = useState<IComic[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  function addCartItem(comic: IComic) {
    const inCartComic = comics.find((cartComic) => cartComic.id === comic.id);
    if (!inCartComic) setComics([...comics, comic]);
  }
  function getCartItems(): IComic[] {
    return structuredClone(comics);
  }

  function removeItemFromCart(comicId: number) {
    const newComics = comics.filter((comic) => comic.id !== comicId);
    setComics(newComics);
  }

  function deleteCartItems() {
    setComics([]);
  }

  function toggleSidebarVisibility() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function setSidebarVisibility(isVisible: boolean) {
    setIsSidebarVisible(isVisible);
  }

  function getSidebarVisibility() {
    return isSidebarVisible;
  }

  return (
    <Context.Provider
      value={{
        addCartItem,
        getCartItems,
        deleteCartItems,
        removeItemFromCart,
        toggleSidebarVisibility,
        getSidebarVisibility,
        setSidebarVisibility,
      }}
    >
      {children}
    </Context.Provider>
  );
}
