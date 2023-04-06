import Image from 'next/image';

import macos from '../../public/macos-dock.png'

const DesignedHero = () => {
  return (
    <section className='w-1/2 text-center flex flex-col items-center gap-4 mx-auto mt-20 max-md:w-full'>
      <h3 className='text-white font-extrabold text-3xl'>Designed for macOS</h3>
      <p className='text-slate-400 text-lg font-semibold'>Built and designed to be fast, reliable and easy to use.</p>
      <Image
        src={macos}
        alt="macos dock"
        width={350}
        height={500}
      />
    </section>
  );
};

export default DesignedHero;
