import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 80%;
  max-width: 500px;
  text-align: center;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const Popup = ({ onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <h2>For Best Experience, Use a Desktop!</h2>
        <p>
          Our site is optimized for larger screens. Please visit us on a desktop
          for the best experience!
        </p>
        <Button onClick={onClose}>Close</Button>
      </PopupContainer>
    </>
  );
};

export default Popup;
