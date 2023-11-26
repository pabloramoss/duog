
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
import { splitCamelCase } from '@/lib/utils';
const Page = ({params: {lesson}}: {params: {lesson: 'passatoProssimo' | 'imperfetto' | 'presente' | 'futuro' }}) => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-4xl font-bold mb-20'>{splitCamelCase(lesson).toUpperCase()}</h1>
      <div style={{width: "500px"}}>
        <Swiper style={{}} navigation={true} modules={[Navigation]} className="mySwiper">
          {
            data[lesson].verbs.map((verb) => (
              <SwiperSlide key={verb.verb}>
                <Card
                  tense={lesson}
                  verb={verb.verb}
                  conjugations={verb.conjugation as Conjugation}
                  translation={verb.translation}
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