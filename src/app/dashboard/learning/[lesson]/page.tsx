
'use client'
import Card from '@/components/Card'
import { data } from '@/data'
import { Conjugation } from '@/types'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Page = ({params: {lesson}}: {params: {lesson: string}}) => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-4xl font-bold mb-20'>DUOGRINGO 👃</h1>
      <div style={{width: "500px"}}>
        <Swiper style={{}} navigation={true} modules={[Navigation]} className="mySwiper">
          {
            //@ts-ignore
            data[lesson].verbs.map((verb) => (
              <SwiperSlide key={verb.verb}>
                <Card
                  tense={lesson}
                  verb={verb.verb}
                  conjugations={verb.conjugation as Conjugation}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </main>
  )
}

export default Page;