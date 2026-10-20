import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PRODUCTS } from '../data/catalog.js'

const STORAGE_KEY = 'zamanyar.cart.v1'
export const FREE_SHIPPING_THRESHOLD = 3000000
export const SHIPPING_FEE = 45000

const CartContext = createContext(null)

const readStored = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((line) => PRODUCTS.some((p) => p.id === line.id)) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStored)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* حالت خصوصی مرورگر — سبد فقط در همین نشست می‌ماند */
    }
  }, [items])

  const add = useCallback((id, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((line) => line.id === id)
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, quantity: line.quantity + quantity } : line,
        )
      }
      return [...current, { id, quantity }]
    })
  }, [])

  const remove = useCallback((id) => {
    setItems((current) => current.filter((line) => line.id !== id))
  }, [])

  const setQuantity = useCallback((id, quantity) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((line) => line.id !== id)
        : current.map((line) => (line.id === id ? { ...line, quantity } : line)),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const openCart = useCallback(() => setOpen(true), [])
  const closeCart = useCallback(() => setOpen(false), [])

  const lines = useMemo(
    () =>
      items
        .map((line) => ({ ...line, product: PRODUCTS.find((p) => p.id === line.id) }))
        .filter((line) => line.product),
    [items],
  )

  const count = useMemo(() => lines.reduce((sum, line) => sum + line.quantity, 0), [lines])
  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    [lines],
  )
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE

  const value = {
    lines,
    count,
    subtotal,
    shipping,
    total: subtotal + shipping,
    add,
    remove,
    setQuantity,
    clear,
    isOpen,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart باید داخل CartProvider استفاده شود')
  return context
}
