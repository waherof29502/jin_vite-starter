import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Counter } from '../components/Counter';
import { useAddProfileInfo, useHeroProfile } from '../hooks/Swr';

const Profile = () => {
  const { id } = useParams();
  const { data: HeroProfile } = useHeroProfile(id);
  const { trigger } = useAddProfileInfo(id);
  const [countStr, setCountStr] = useState(0);
  const [countInt, setCountInt] = useState(0);
  const [countAgi, setCountAgi] = useState(0);
  const [countLuk, setCountLuk] = useState(0);
  const [profileSum, setProfileSum] = useState(0);

  useEffect(() => {
    if (HeroProfile) {
      setCountStr(HeroProfile?.data.str);
      setCountInt(HeroProfile?.data.int);
      setCountAgi(HeroProfile?.data.agi);
      setCountLuk(HeroProfile?.data.luk);
    }
    setProfileSum(0);
  }, [HeroProfile]);
  const heroSum =
    parseInt(`${HeroProfile?.data.str}`) +
    parseInt(`${HeroProfile?.data.int}`) +
    parseInt(`${HeroProfile?.data.agi}`) +
    parseInt(`${HeroProfile?.data.luk}`);
  const currSum = countStr + countInt + countAgi + countLuk;
  const resPoint = heroSum - currSum;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      await trigger({
        str: countStr,
        int: countInt,
        agi: countAgi,
        luk: countLuk
      });
      setProfileSum(countStr + countInt + countAgi + countLuk);
      toast.success('更新成功');
    } catch (e) {
      setProfileSum(
        parseInt(`${HeroProfile?.data.str}`) +
          parseInt(`${HeroProfile?.data.int}`) +
          parseInt(`${HeroProfile?.data.agi}`) +
          parseInt(`${HeroProfile?.data.luk}`)
      );
      console.error(e);
      toast.error('更新失敗，能力值需相同');
    }
  };

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
          <ListTitle>
            剩餘點數： {resPoint}/{profileSum}
          </ListTitle>
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
  background-color: #009590;
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
