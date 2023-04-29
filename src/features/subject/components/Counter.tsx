import React from 'react';
import styled from 'styled-components';

export const Counter = ({ count, setCount }: any) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <CounterWrapper>
      <Button onClick={handleDecrement}>-</Button>
      <ListTitle>{count}</ListTitle>
      <Button onClick={handleIncrement}>+</Button>
    </CounterWrapper>
  );
};
const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0 16px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #009590;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
