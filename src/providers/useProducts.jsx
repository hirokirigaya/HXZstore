import { createContext, useEffect, useReducer } from 'react'
import Cookie from 'js-cookie'
export const cartStore = createContext()

const initialState = {
  cart: {
    cartItems: Cookie.get('cartItems') ? JSON.parse(Cookie.get('cartItems')) : [],
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM_CART': {
      const itemExist = state.cart.cartItems.find((item) => item.id === action.payload.id)

        const newCartItems = itemExist ? state.cart.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quant: item.quant + action.payload.quant,
            }
          }
          return item
        }) : [...state.cart.cartItems, action.payload]
        Cookie.set('cartItems', JSON.stringify(newCartItems))
        return {
          ...state,
          cart: {
            cartItems: newCartItems
          },
        }
      } 
    case 'SUM_ITEM_CART': {
      const newCartItems = state.cart.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quant: action.payload.quant,
          }
        }
        return item
      })
      Cookie.set('cartItems', JSON.stringify(newCartItems))
      return {
        ...state,
        cart: {
          cartItems: [...newCartItems]
        }
      }
    }
    case 'REMOVE_ITEM_CART': {
      const newCartItems = state.cart.cartItems.filter((item) => item.id !== action.payload.id)
      Cookie.set('cartItems', JSON.stringify(newCartItems))
      return {
        ...state,
        cart: { cartItems: [...newCartItems]}}
    }
    case 'SUB_ITEM_CART': {
      const newCartItems = state.cart.cartItems.map((item) =>{
        if(item.id === action.payload.id) {
          return {
          ...item,
          quant: action.payload.quant,
         }
        }
        return item
      })
      Cookie.set('cartItems', JSON.stringify(newCartItems))
      return {
        ...state,
        cart: {
          cartItems: [...newCartItems]
        }
      }
    }
  }
  return state
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItemCart = ({ title, price, slug, quant, id, img, discount }) => {
    dispatch({
      type: 'ADD_ITEM_CART',
      payload: {
        id: id,
        title: title,
        price: price,
        slug: slug,
        quant: quant,
        img: img,
        discount: discount,
      },
    })
  }

  return (
    <cartStore.Provider value={{ state, dispatch, addItemCart }}>
      {children}
    </cartStore.Provider>
  )
}
