// @flow
import React from 'react';
import type { Node } from 'react';
import ReactModal from 'react-modal';
import { X } from 'react-feather';
import { keyframes } from 'react-emotion';
import { css } from 'emotion';
import { Box, IconButton } from './index';

type ModalProps = {
  isOpen: boolean,
  onClose?: () => void,
  header?: Node,
  children?: Node,
  footer?: Node,
};

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#___gatsby');

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const overlay = css`
  padding: 1rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 50, 56, 0.8);
  overflow: auto;
  vertical-align: middle;
  z-index: 1000;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease both;
  will-change: opacity;
`;

const modalContent = css`
  position: relative;
  padding: 1rem 0;
  margin: auto;
  flex: 0 0 auto;
  width: 100%;
  max-width: 768px;
  background: #fff;
  border-radius: 0.25rem;
  outline: none;
`;

const modalCloseBtn = css`
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 56px;
  cursor: pointer;
`;

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, header, footer, children } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={300}
      htmlOpenClassName="lock-scroll"
      bodyOpenClassName="lock-scroll"
      overlayClassName={overlay}
      className={modalContent}
    >
      <Box p={3} pr="56px">
        {header}
        <IconButton heightAuto onClick={onClose} css={modalCloseBtn}>
          <X />
        </IconButton>
      </Box>
      <Box p={3}>{children}</Box>
      {footer && <Box p={3}>{footer}</Box>}
    </ReactModal>
  );
};

export default Modal;
