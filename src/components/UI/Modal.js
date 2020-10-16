import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { keyframes, ClassNames } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Box from './Box';
import IconButton from './IconButton';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#___gatsby');

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onAfterClose: PropTypes.func,
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Modal = ({ isOpen, onClose, onAfterClose, header, footer, children }) => {
  const theme = useTheme();
  return (
    <ClassNames>
      {({ css }) => (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onClose}
          onAfterClose={onAfterClose}
          closeTimeoutMS={300}
          htmlOpenClassName="lock-scroll"
          bodyOpenClassName="lock-scroll"
          overlayClassName={css`
            padding: 1rem;
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.colors.overlay};
            overflow: auto;
            vertical-align: middle;
            z-index: 1000;
            opacity: 0;
            animation: ${fadeIn} 0.2s ease both;
            will-change: opacity;
          `}
          className={css`
            position: relative;
            padding: 1rem 0;
            margin: auto;
            flex: 0 0 auto;
            width: 100%;
            max-width: 768px;
            background: ${theme.colors.bgColor};
            border-radius: 0.25rem;
            outline: none;
          `}
        >
          <Box p={3} pr="56px">
            {header}
            <IconButton
              heightAuto
              onClick={onClose}
              color="headingColor"
              css={css`
                padding: 1rem;
                position: absolute;
                top: 0;
                right: 0;
                min-height: 56px;
              `}
            >
              <FiX size={24} />
            </IconButton>
          </Box>
          <Box p={3}>{children}</Box>
          {footer && <Box p={3}>{footer}</Box>}
        </ReactModal>
      )}
    </ClassNames>
  );
};

Modal.propTypes = propTypes;

export default Modal;
