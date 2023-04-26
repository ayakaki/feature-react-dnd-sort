import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SortTemplate } from '@/components/SortTemplate'
import { SortArea } from '@/components/SortArea'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <SortTemplate />
  )
}
