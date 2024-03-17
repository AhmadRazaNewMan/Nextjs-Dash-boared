import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar.jsx'
import Provider from './components/Provider.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmads Blogsite',
  description: 'Share your thoughts anywhere anytime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className}`}>
        <Provider suppressHydrationWarning>
        <Navbar/>
        <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
        </main>
        </Provider>
        </body>
       
    </html>
  )
}
