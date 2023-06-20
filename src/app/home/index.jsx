import './Home.scss'

//Component
import OutProduct from './components/OurProduct'
import Bestseller from './components/Bestseller'
import Banner from './components/Banner'
import Flashsale from './components/Flashsale'
import Category from './components/Category'
import Featured from './components/Featured'

export default function Home() {
  return (
    <main className='home-main'>
      <Banner />
      <Flashsale />
      <Category />
      <Bestseller />
      <OutProduct />
      <Featured />
    </main>
  )
}