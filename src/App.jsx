import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import Header from './components/Home/shared/Header'
import ProductPage from './pages/ProductPage'
import RegisterPages from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'
import { getCartThunk } from './store/slices/cart.slice'
import ProtectedRoutes from './pages/ProtectedRoutes'
import CartPage from './pages/CartPage'
import PurchasesPage from './pages/PurchasesPage'



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/user'>
          <Route path='register' element={<RegisterPages />}/>
          <Route path='login' element={<LoginPage />} />
        </Route>
              {/* Rutas Protegidas*/}
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />}/>
        </Route>  

      </Routes>
    </div>
  )
}

export default App
