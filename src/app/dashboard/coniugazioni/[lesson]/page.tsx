'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '@/components/Card';
import { data } from '@/data';
import { Conjugation } from '@/types';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { shuffleArray, splitCamelCase } from '@/lib/utils';

const Page = ({
  params: { lesson },
}: {
  params: { lesson: 'passatoProssimo' | 'imperfetto' | 'presente' | 'futuroSemplice' };
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center lg:justify-center justify-start p-24">
      <h1 className="text-4xl font-bold mb-20">{splitCamelCase(lesson).toUpperCase()}</h1>
      <div style={{ width: '500px' }}>
        <Swiper className="mySwiper" modules={[Navigation]} navigation={true} style={{}}>
          {shuffleArray(data[lesson].verbs).map((verb) => (
            <SwiperSlide key={verb.verb}>
              <Card
                conjugations={verb.conjugation as Conjugation}
                tense={lesson}
                translation={verb.translation}
                verb={verb.verb}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Page;
