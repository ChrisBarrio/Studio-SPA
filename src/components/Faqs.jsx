import Accordion from './Accordion';

const Faqs = () => {
  return (
    <section className="mt-20" id="help">
      <h3 className="pl-8 text-center text-4xl font-semibold max-md:pl-0 max-md:text-3xl">
        Questions & Answers
      </h3>
      <p className="pl-8 text-center text-lg font-semibold text-slate-400 max-md:pl-0 ">
        If you have any other questions - please get in touch
      </p>
      <Accordion />
    </section>
  );
};

export default Faqs;
