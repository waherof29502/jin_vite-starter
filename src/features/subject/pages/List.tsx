import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useListHeroes } from '../hooks/Swr';

export default function List() {
  const [clickedId, setClickedId] = useState<number | null>(null);
  const { data: HeroList } = useListHeroes();
  const handleClick = (id: number) => {
    setClickedId(clickedId === id ? null : id);
  };

  return (
    <MainContainer>
      <GridContainer>
        {HeroList?.map((item, id) => (
          <Card key={item.id} className={clickedId === id ? 'clicked' : ''} onClick={() => handleClick(id)}>
            <Link to={`${item.id}/profile`}>
              <Img src={item.image} />
              <InfoContainer>
                <CardInfo>{item.name}</CardInfo>
              </InfoContainer>
            </Link>
          </Card>
        ))}
      </GridContainer>

      <Outlet />
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
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
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
    background-color: #009590;
  }
  a:link {
    text-decoration: none;
  }
  &.clicked {
    background-color: #009590;
  }
`;
export const Img = styled.img`
  width: 100%;
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
