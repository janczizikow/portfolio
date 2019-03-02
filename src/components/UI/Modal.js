import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { ClassNames, css, keyframes } from '@emotion/core';
import { Box, IconButton } from './index';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#___gatsby');

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

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

const Modal = ({ isOpen, onClose, header, footer, children }) => (
  <ClassNames>
    {classNames => (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        closeTimeoutMS={300}
        htmlOpenClassName="lock-scroll"
        bodyOpenClassName="lock-scroll"
        overlayClassName={classNames.css`${overlay}`}
        className={classNames.css`${modalContent}`}
      >
        <Box p={3} pr="56px">
          {header}
          <IconButton heightAuto onClick={onClose} css={modalCloseBtn}>
            <FiX size={24} />
          </IconButton>
        </Box>
        <Box p={3}>{children}</Box>
        {footer && <Box p={3}>{footer}</Box>}
      </ReactModal>
    )}
  </ClassNames>
);

Modal.propTypes = propTypes;

export default Modal;
