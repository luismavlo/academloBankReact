import React from 'react'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import { AppRouter } from './routes/AppRouter'

export const BankApp = () => {
  return (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
  )
}
