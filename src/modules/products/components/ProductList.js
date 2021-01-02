import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import CategoryList from './CategoryList'
import ProductItem from './ProductItem'
import queryString from 'query-string'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))

export default function ProductList() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isLoading, items: products } = useSelector((state) => state.products)
  const { search } = useLocation()
  const { category } = queryString.parse(search)

  // const [products, setProducts] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     setIsLoading(true)
  //     const { data } = await Axios.get(`/products/${search}`)

  //     setProducts(data)
  //     setIsLoading(false)
  //   }

  //   loadProducts()
  // }, [search])

  useEffect(() => {
    const action = actions.loadProducts(search)

    dispatch(action)
  }, [dispatch, search])

  return (
    <>
      <Typography variant="h4" component="h1" className={classes.title}>
        {category || 'All'} product
      </Typography>
      <CategoryList />
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </Grid>
      )}
    </>
  )
}
