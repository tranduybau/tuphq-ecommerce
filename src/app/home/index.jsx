
import './Home.scss'

//Component
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
      <Category></Category>
    </main>
  )
}