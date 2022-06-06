import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Button,
  ButtonsContainer,
  LabelMedium,
  LabelXLarge,
} from '../../shared/styles';
import { Container, Modal } from './style';

interface Props {
  showDialog: boolean;
  cancelCallback: () => void;
  deleteCallback: () => void;
  identifier: string;
}

const DeleteDialog: React.FC<Props> = ({
  cancelCallback,
  deleteCallback,
  identifier,
  showDialog,
}) => (
  <AnimatePresence exitBeforeEnter>
    {showDialog && (
      <Container
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ stiffness: 120, type: 'spring' }}
          exit={{ scale: 0 }}
        >
          <LabelXLarge>Confirm Deletion</LabelXLarge>
          <LabelMedium>
            Are you sure you want to delete invoice #{identifier}? This action
            cannot be undone.
          </LabelMedium>
          <ButtonsContainer>
            <Button className="normal" onClick={cancelCallback}>
              Cancel
            </Button>
            <Button className="delete" onClick={deleteCallback}>
              Delete
            </Button>
          </ButtonsContainer>
        </Modal>
      </Container>
    )}
  </AnimatePresence>
);

export default DeleteDialog;
