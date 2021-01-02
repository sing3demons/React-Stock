import * as uiAction from 'modules/ui/actions'
import * as productAction from 'modules/products/actions'
const ADD_TO_CART = 'app/cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'app/cart/REMOVE_FROM_CART'

function addToCart(productId) {
  return (dispatch) => {
    dispatch(
      uiAction.setFlashMessage('The product has been added to your cart')
    )
    dispatch({
      type: ADD_TO_CART,
      payload: { productId },
    })
  }
}

function loadCart() {
  return (dispatch, getState) => {
    const {
      cart: { productIds },
    } = getState()

    if (productIds.length === 0) {
      dispatch(productAction.clearProducts())
    }

    const query = productIds.map((id) => `id=${id}`).join('&')
    dispatch(productAction.loadProducts(`?${query}`))
  }
}

function removeFormCart(productId) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        productId,
      },
    })
    dispatch(loadCart())
  }
}

export { ADD_TO_CART, REMOVE_FROM_CART, addToCart, loadCart, removeFormCart }
