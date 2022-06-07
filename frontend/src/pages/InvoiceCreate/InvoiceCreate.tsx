import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import InvoiceForm from '../../components/InvoiceForm/InvoiceForm';
import { LabelXLarge } from '../../shared/styles';
import { Backdrop, Container } from './style';

const InvoiceCreate: React.FC = () => (
  <AnimatePresence exitBeforeEnter>
    <Backdrop
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container
        as={motion.div}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 1 }}
      >
        <LabelXLarge>New invoice</LabelXLarge>
        <InvoiceForm />
      </Container>
    </Backdrop>
  </AnimatePresence>
);

export default InvoiceCreate;
