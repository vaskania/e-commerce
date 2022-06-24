import { useState, createContext } from "react";

// import SHOP_DATA from '../shop-data'
//
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  // upload SHOP_DATA ONCE to DB
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  const value = { products }

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}