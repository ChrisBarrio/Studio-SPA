import Image from 'next/image';

import HeroRat from '../../public/HeroRat.png';
import BtnPrimary from './BtnPrimary';
const Hero = () => {
  return (
    <section className="flex max-[800px]:text-center flex-col items-center gap-8 pt-24" id='hero'>
      <Image
        src={HeroRat}
        alt="imagen de logo de la empresa"
        width={160}
        height={160}
      />
      <h2 className="text-6xl text-center font-bold text-white max-md:text-3xl ">
        Beautiful screen recordings in minutes
      </h2>
      <p className="text-2xl font-semibold text-slate-400 max-md:text-center">
        Promo videos of your digital product as easy as taking a screenshot.
      </p>
      <BtnPrimary title="Download Screen Studio" styles='text-2xl py-3' />
      <video
        className="aspect-video w-8/12 rounded-xl max-md:w-full max-[900px]:w-10/12"
        muted
        loading="lazy"
        autoPlay
        loop
      >
        <source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-keyboard-8013/1080p.mp4" />
      </video>
    </section>
  );
};

export default Hero;
