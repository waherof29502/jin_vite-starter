import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Counter } from './components/Counter';

const Profile = () => {
  const [countStr, setCountStr] = useState(0);
  const [countInt, setCountInt] = useState(0);
  const [countAgi, setCountAgi] = useState(0);
  const [countLuk, setCountLuk] = useState(0);
  const [profileSum, setProfileSum] = useState(0);
  const profileData = [countStr, countInt, countAgi, countLuk];
  // console.log('Data', profileData);
  console.log('Sum', profileSum);

  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleSubmit = () => {
    setProfileSum(countStr + countInt + countAgi + countLuk);
    console.log('Submit', {
      str: countStr,
      int: countInt,
      agi: countAgi,
      luk: countLuk
    });
  };
  //might for data res (GET)
  // useEffect(() => {
  //   setProfileSum(countStr + countInt + countAgi + countLuk);
  // }, [data]);

  return (
    <FormWrapper onSubmit={onSubmit}>
      <BlogCard>
        <CounterContainer>
          <ListTitle>Str</ListTitle>
          <Counter count={countStr} setCount={setCountStr} />
        </CounterContainer>
        <CounterContainer>
          <ListTitle>Int</ListTitle>
          <Counter count={countInt} setCount={setCountInt} />
        </CounterContainer>
        <CounterContainer>
          <ListTitle>Agi </ListTitle>
          <Counter count={countAgi} setCount={setCountAgi} />
        </CounterContainer>
        <CounterContainer>
          <ListTitle>Luk</ListTitle>
          <Counter count={countLuk} setCount={setCountLuk} />
        </CounterContainer>
        <TextContainer>
          <ListTitle>剩餘點數：{profileSum}</ListTitle>
        </TextContainer>
        <ButtonContainer>
          <Button onClick={() => handleSubmit()}>
            <ListTitle>儲存</ListTitle>
          </Button>
        </ButtonContainer>
      </BlogCard>
    </FormWrapper>
  );
};

export default Profile;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #f2f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: #0f1624;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 16px;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0 16px;
`;
