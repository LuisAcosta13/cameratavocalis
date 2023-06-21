import 'normalize.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Camerata Vocalis Buenos Aires',
  description: 'Diseñada por Luis Acosta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className='navbar'>
          <Link href='/' className='nav-option'><h2>Camerata Vocalis</h2></Link>
          <Link href='/conciertos' className='nav-option'><h2>Conciertos</h2></Link>
          <Link href='/repertorio' className='nav-option'><h2>Repertorio</h2></Link>
        </nav>

        {children}

      </body>
    </html>
  )
}
