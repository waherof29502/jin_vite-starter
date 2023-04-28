import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { img } from '../../assets/index';
import Profile from './Profile';

interface IList {
  id: number;
  name: string;
}
const data: IList[] = [];
for (let i = 0; i < 4; i++) {
  const item = {
    id: i + 1,
    name: `User ${i + 1}`
  };
  data[i] = item;
}
console.log(data);

export default function List() {
  const [selectedProfile, setSelectedProfile] = useState(0);
  return (
    <MainContainer>
      <GridContainer>
        {data.map((item) => (
          <Card key={item.id}>
            <Img src={img} />
            <InfoContainer>
              <CardInfo>{item.name}</CardInfo>
            </InfoContainer>
            <Link to={`1/profile`}>
              <button onClick={() => console.log(123)}>123</button>
            </Link>
          </Card>
        ))}
      </GridContainer>

      <Outlet />
      {/* <Profile /> */}
    </MainContainer>
  );
}

export const MainContainer = styled.section`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: scroll;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 5rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 4rem;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f1624;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  width: 80%;
  max-width: 400px;
  &:hover {
    background-color: #f2f;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CardInfo = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;
