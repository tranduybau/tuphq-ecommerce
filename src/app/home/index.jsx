import './Home.scss'

//Component
import OutProduct from '@/components/OurProduct'
import Bestseller from '@/components/Bestseller'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Flashsale from '@/components/Flashsale'
import Category from '@/components/Category'


export default function Home() {
  return (
    <main className='home-main'>
      <Header/>
      <Banner/>
      <Flashsale/>
      <Category/>
      <Bestseller/>
      <OutProduct/>
    </main>
  )
}