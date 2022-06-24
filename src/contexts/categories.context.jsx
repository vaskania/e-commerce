import { useState, createContext, useEffect } from "react";

// import SHOP_DATA from '../shop-data'

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  // upload SHOP_DATA ONCE to DB
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  const value = { categoriesMap }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}