import { useEffect, useState } from 'react'
import './App.css'
import UserCards from './components/UserCards'
import ProductCards from './components/ProductCards'
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState([])
  console.log(data)
  const getProducts = async () => {
    try {
      const request = await fetch('https://dummyjson.com/products');
      const response = await request.json();
      console.log(response);

      setData(response.products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Navbar />
      <main >
        <section className='flex flex-wrap gap-10 py-5 max-w-[90%] mx-auto container'>
          {
            data.map((item, index) => <ProductCards key={index} product={item} />)
          }
        </section>
      </main>
    </>
  )
}

export default App
