'use client'
import Card from '@/components/Card'
import { data } from '@/data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { redirect } from 'next/navigation';


export default function Home() {
  redirect('/dashboard')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-stone-700">
      <p>hello</p>
    </main>
  )
}
