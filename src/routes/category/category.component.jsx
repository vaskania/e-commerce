import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesIsLoading } from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";

import { CategoryContainer, CategoryTitle } from './category.styles'
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])


  return (
     <>
       <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
       {
         isLoading ? (
            <Spinner/>
         ) : (
            <CategoryContainer>
              {products &&
                 products.map(product => <ProductCard key={product.id} product={product}/>)
              }
            </CategoryContainer>
         )
       }
     </>
  )
}

export default Category