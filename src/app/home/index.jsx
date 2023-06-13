import './Home.scss'
//Component
import Header from '@/components/Header'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main className='home-main'>
      <Header/>
      <Banner/>
    </main>
  )
}
