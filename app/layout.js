import { Inter } from "next/font/google"
import "./globals.css"
import { Phone } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ST Fitness - Transform Your Body, Transform Your Life",
  description:
    "Join ST Fitness, the premier gym in your area. Professional trainers, modern equipment, and personalized fitness programs to help you achieve your goals.",
  keywords: "gym, fitness, workout, personal training, strength training, cardio, health, wellness",
  author: "ST Fitness",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://stfitness.in" />
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
