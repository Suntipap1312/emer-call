import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/MainLayout'
import FooterNav from '../components/footer/FooterNav'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
        <FooterNav />
      </MainLayout>
    </>
  )
}
