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
  description: "Call me Uyen, I'm a Frontend Developer. I try to learn day by day!!!",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
