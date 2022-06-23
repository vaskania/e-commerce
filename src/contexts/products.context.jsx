import {useState, createContext, useEffect} from "react";
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = {products}

  // useEffect(() => {
  //   fetch(PRODUCTS)
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  // }, [])


  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}