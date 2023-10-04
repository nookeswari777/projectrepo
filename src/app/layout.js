
import { Header } from '@/components/Header'
import './globals.css'
import { Menu } from '@/components/menu' 
import { Footer } from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <Header/>
        <Menu/>
        {children}
        <Footer/>
         </body>
        </html>
  )
}
