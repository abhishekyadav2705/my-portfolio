const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ffeb3b; /* Bright yellow background */
  color: #333;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 235, 59, 0.5); /* Yellow shadow */
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 2s infinite;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ffc107; /* Slightly darker yellow on hover */
    transform: scale(1.05);
  }
`;

const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;
