// "use client"

import type { Metadata } from 'next'
import { Suspense, useEffect, useState } from "react";
import '../scss/globals.scss'

import Favicon from './favicon.png';
import Loading from './loading';
import { useRouter } from 'next/router';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tudo',
  icons: [{ rel: 'icon', url: Favicon.src }],
  description: "I'm Uyen. This is my site with Frontend Developer",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const router = useRouter()
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setLoading(true)
  //   }

  //   const handleRouteChangeComplete = () => {
  //     setLoading(false)
  //   }

  //   router.events.on('routeChangeStart', handleRouteChange)
  //   router.events.on('routeChangeComplete', handleRouteChangeComplete)

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //     router.events.off('routeChangeComplete', handleRouteChangeComplete)
  //   }
  // }, [router.events])

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        {/* loading ? <Loading /> : {children} */}
      </body>
    </html>
  )
}
