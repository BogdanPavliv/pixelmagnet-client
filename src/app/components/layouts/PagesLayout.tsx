'use client'
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });
import Layout from './Layout'
import StoreProvider from "../../components/provirer/Provider"
import { Next13ProgressBar } from 'next13-progressbar'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Next13ProgressBar height='4px' color='#156AD4' showOnShallow />
        <div className="wrapper">
          <StoreProvider>  
            <Layout>
                {children}
            </Layout>
          </StoreProvider>
        </div>
      </body>
    </html>
  )
}

export default PagesLayout