import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrimaryHeader from 'YesterTech/PrimaryHeader'
import PrimaryFooter from 'YesterTech/PrimaryFooter'
import { useAuthState } from 'YesterTech/AuthState'
import 'YesterTech/PrimaryLayout.scss'

// Route Targets
import Home from 'YesterTech/Home'
import SignupForm from 'YesterTech/SignupForm'
import LoginForm from 'YesterTech/LoginForm'
import Account from 'YesterTech/Account'
import ProductsLayout from 'YesterTech/ProductsLayout'
import ProductSubNav from 'YesterTech/ProductSubNav'
import Checkout from 'YesterTech/Checkout'
import { useShoppingCart } from 'YesterTech/ShoppingCartState'

export default function PrimaryLayout() {
  const { authenticated } = useAuthState()
  const { cart } = useShoppingCart()

  return (
    <div className="primary-layout">
      <div>
        <PrimaryHeader />
        <ProductSubNav />
        <main className="primary-content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {authenticated && (
              <Route path="/account" exact>
                <Account />
              </Route>
            )}
            Route
            <Route path="/products">
              <ProductsLayout />
            </Route>
          </Switch>
        </main>
        <PrimaryFooter />
      </div>
    </div>
  )
}
