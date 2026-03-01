import React, { useState, useMemo } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const faqstitle = useMemo(() => [
    {
      id: 1,
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.'
    },
    {
      id: 2,
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all products. Items must be in original condition with packaging.'
    },
    {
      id: 3,
      question: 'Do you accept international orders?',
      answer: 'Yes! We ship to over 150 countries worldwide. International shipping rates vary by location.'
    },
    {
      id: 4,
      question: 'How can I track my order?',
      answer: 'You will receive a tracking number via email after your order ships. You can track it on our website or the carrier site.'
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure.'
    },
    {
      id: 6,
      question: 'Is my personal information safe?',
      answer: 'Yes, we use bank-level SSL encryption to protect your data. We never share your information with third parties.'
    }
  ], []);


 

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 8, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            FREQUENTLY ASKED <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>QUESTIONS</span>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {faqstitle.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <Accordion
                  expanded={expanded === `panel${faq.id}`}
                  onChange={handleChange(`panel${faq.id}`)}
                  sx={{
                    bgcolor: GLASS,
                    border: BORDER,
                    borderRadius: '12px',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      borderColor: NEON_GOLD,
                      boxShadow: `0 10px 30px ${NEON_GOLD}20`
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: NEON_GOLD }} />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        my: 2
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 900, fontSize: '1rem', letterSpacing: 1 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, borderTop: BORDER }}>
                    <Typography sx={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;
