import './Home.scss'
//Component
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Flashsale from '@/components/Flashsale'

export default function Home() {
  return (
    <main className='main'>
      <Header/>
      <Banner/>
      <Flashsale></Flashsale>
    </main>
  )
}
