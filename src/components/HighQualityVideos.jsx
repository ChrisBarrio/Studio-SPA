import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image';

import placeholder500x300 from '../../public/placeholder-500x300.png';

const picsList = [
  {
    id: 1,
    title: 'Lorem, ipsum dolor.',
    class: 'mt-0',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,laudantium!',
    img: placeholder500x300,
    aosAnimation: 'fade-right',
  },
  {
    id: 2,
    title: 'Lorem, ipsum dolor.',
    class: 'mt-20 max-md:mt-0',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,laudantium!',
    img: placeholder500x300,
    aosAnimation: 'fade-left',
  },
  {
    id: 3,
    title: 'Lorem, ipsum dolor.',
    class: 'mt-0',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,laudantium!',
    img: placeholder500x300,
    aosAnimation: 'fade-right',
  },
  {
    id: 4,
    title: 'Lorem, ipsum dolor.',
    class: 'mt-20 max-md:mt-0',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,laudantium!',
    img: placeholder500x300,
    aosAnimation: 'fade-left',
  },
];

const HighQualityVideos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="mt-20">
      <h3 className="pl-8 text-4xl font-semibold max-md:pl-0 max-md:text-3xl">
        High Quality Videos - no edit skills needed
      </h3>
      <p className="pl-8 text-lg font-semibold text-slate-400 max-md:pl-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        dignissimos nostrum vero nisi incidunt in quasi quod maiores ullam id!
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {picsList.map((e) => (
          <div
            key={e.id}
            className={`mx-auto flex flex-col gap-4 ${e.class}`}
            data-aos={`${e.aosAnimation}`} //animation AOS
          >
            <Image
              src={e.img}
              alt="Picture of the author"
              width={500}
              height={300}
              className="rounded-xl"
            />
            
            <h3 className="text-left font-bold">{e.title}</h3>
            <p className="text-slate-400">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighQualityVideos;
