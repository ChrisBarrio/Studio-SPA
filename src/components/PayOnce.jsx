import React from 'react';
import BtnPrimary from './BtnPrimary';

const listPlans = [
  {
    name: 'Standard',
    price: '$89',
    note: 'Pay-once license for you.',
    characteristics: [
      '1 macOS device',
      'Pay once, use forever',
      'All Screen Studio features',
      '1 year of updates',
    ],
  },
  {
    name: 'Extended',
    price: '$189',
    class:'shadow-violet-800 shadow-lg border-2 border-violet-800 ',
    note: 'Great for multi-devices setups & small teams.',
    characteristics: [
      '3 macOS device',
      'Pay once, use forever',
      'All Screen Studio features',
      '1 year of updates',
    ],
  },
  {
    name: 'Teams',
    price: 'Get in touch',
    note: 'Pay per seat for your team.',
    characteristics: [
      'Unlimited macOS devices',
      'All Screen Studio features',
      'All Screen Studio features',
      'App updates during the subscription',
    ],
  },
];

const PayOnce = () => {
  return (
    <section className="mt-20" id='pricing'>
      <h3 className="text-center text-4xl font-semibold">
        Pay once, use forever
      </h3>
      <p className="pl-8 text-center text-lg font-semibold text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        dignissimos nostrum vero.
      </p>
      <div className="mt-10 grid grid-cols-3 gap-8 max-md:grid-cols-1">
        {listPlans.map((e) => (
          <div
            key={e.name}
            className={`flex flex-col gap-4 rounded-lg bg-slate-800 bg-opacity-50 p-8 ${e.class}`}
          >
            <p className="text-2xl font-bold">{e.name}</p>
            <p className="text-5xl font-bold">{e.price}</p>
            <p className="text-slate-400">{e.note}</p>
            <ul className="flex flex-col gap-4 my-auto">
              {e.characteristics.map((e, index) => (
                <li key={index} className='flex'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L6.87868 14.8787C8.05025 16.0503 9.94975 16.0503 11.1213 14.8787L19 7"
                      stroke="#5055e0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  {e}
                </li>
              ))}
            </ul>
            <BtnPrimary title='Get Started' styles='text-2xl py-3'/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PayOnce;
