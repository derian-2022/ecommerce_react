import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import './styles/home.css'
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice'
import axios from 'axios'


const Home = () => {

  const [categories, setCategories] = useState()

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const { products } = useSelector(state => state)


  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const input = e.target.inputSearch.value.trim().toLowerCase()
    dispatch(getProductsByName(input, false))
  }

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    axios.get(url)
    .then(res => setCategories(res.data))
    .catch(err => console.log(err.response))
  }, [])

  const handleClickCategory = id => {
    dispatch(getProductsByName(id, true))
  }

  const handleSubmitPrice = e => {
    e.preventDefault()
    const from = Number(e.target.from.value.trim())
    const to = +e.target.to.value.trim()

    console.log({
      from, to
    })

    if(from && to) {
      setFromTo({from, to})
    } else if(from && !to) {
      setFromTo({ from, to: Infinity })
    } else if(!from && to) {
      setFromTo({ from: 0, to })
    } else {
      setFromTo({ from: 0, to: Infinity })
    }
  }


  const filterProduct = product => +product.price >= fromTo.from && +product.price <= fromTo.to


  return (
    <div className='home'>
      
        <form className='home__form' onSubmit={handleSubmit}>
          <input className='home__input' id='inputSearch' type="text" />
          <button className='home__search'>
          <i className='bx bx-search-alt-2 home__lupa'></i>
          </button>
        </form>
        
        
        <article className='home__articulo'>
              <section>
                <header className='home__category-header'>
                  <h3 className='home__category-title'>Price</h3>
                  <i className='bx bx-chevrons-down home__category-arrowhead'></i>
                </header>
                <form onSubmit={handleSubmitPrice}>
                  <div>
                    <label className='label' htmlFor="from">From</label>
                    <input className='input__number' type="number" id='from' />
                  </div>
                  <div>
                    <label className='label' htmlFor="to">To</label>
                    <input className='input__number' type="number" id='to' />
                  </div>
            
              
                  <button className='home__search'>Filter Price</button>
                </form>
              </section>

              <br /><br />

            <section className='home__category'>
              <header className='home__category-header'>
                <h3 className='home__category-title'>Category</h3>
                  <i className='bx bx-chevrons-down home__category-arrowhead'></i>
              </header>

              <ul className='home__category-list'>
                <li onClick={() => dispatch(getAllProductsThunk())} className='home__category-item'>All Products
                </li>
                {
                  categories?.map(category => (
                   <li className='home__category-item' key={category.id} onClick={() => handleClickCategory
                    (category.id)}>{category.name}</li>
                  ))
                }
              </ul>
            </section>
          
        </article>
     
        <div className='home__products'>
            {   
                products?.length === 0 ?
                  <h1 className='home__products-err'>❌ This products doesn't exists ❌</h1>
                :
                  products?.filter(filterProduct).map(product => (
                    <CardProduct 
                      key={product.id}
                      product={product}
                    />
                  ))
            }
        </div>
    
    </div>
  )
}

export default Home