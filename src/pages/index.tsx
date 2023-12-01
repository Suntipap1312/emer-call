import Image from 'next/image'
import { Inter } from 'next/font/google'
import FooterNav from '../components/footer/FooterNav'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${inter.className} flex-grow`}>
        <section>
          <h1>Attrations Page</h1>
        </section>
      </main>
    </>
  )
}
