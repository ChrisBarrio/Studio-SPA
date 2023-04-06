import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaChevronDown } from 'react-icons/fa';

const faqsList = [
  {
    title: 'FAQs 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'FAQs 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'FAQs 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'FAQs 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

export default function SimpleAccordion() {
  return (
    <div className="mx-auto my-20 w-3/4 max-md:w-full">
      {faqsList.map((e) => (
        <Accordion key={e.title}>
          <AccordionSummary
            expandIcon={<FaChevronDown color="white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: 'black', color: 'white', fontWeight:'bold' }}
          >
            <Typography>{e.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: 'black', color: '#cecece' }}>
            <Typography>{e.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
