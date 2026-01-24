"use client";

import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

const faqs = [
  { q: "Can I cancel my ticket?", a: "Yes, cancellations are allowed based on operator policy." },
  { q: "Are payments secure?", a: "All payments are encrypted and secure." },
  { q: "Do I need to print my ticket?", a: "No, e-tickets are accepted." },
];

export default function FAQ() {
  return (
    <Box py={16} px={6} maxW="5xl" mx="auto">
      <Heading textAlign="center" mb={10}>FAQs</Heading>
      <Accordion allowToggle>
        {faqs.map((faq, i) => (
          <AccordionItem key={i}>
            <AccordionButton fontWeight="medium">
              {faq.q}
            </AccordionButton>
            <AccordionPanel>{faq.a}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
