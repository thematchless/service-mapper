import * as React from "react";
import styled from "styled-components";

interface IService {
  name: string;
  icon: string;
  link: string;
}

const services: IService[] = [
  {
    icon: "http://image.tld",
    link: "traefik.tld",
    name: "Traefik",
  },
  {
    icon: "http://image.tld",
    link: "grafana.tld",
    name: "Grafana",
  },
];

const GridContainer: React.FC = () => {
  const fallbackImage = (ev: any) => {
    ev.target.src = "/placeholder.png";
  };

  return (
    <GridContainerContainer>
      {services.map((service) => {
        return (
          <Grid href={service.link}>
            <GridIcon src={service.icon} onError={fallbackImage} />
            <GridName>{service.name}</GridName>
          </Grid>
        );
      })}
    </GridContainerContainer>
  );
};

export default GridContainer;

const GridContainerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const GridName = styled.p`
  text-align: center;
`;

const GridIcon = styled.img`
  height: 150px;
  width: 150px;
  padding: 1rem;
  border: 2px solid #00000020;
  background-color: #ffffff;
`;

const Grid = styled.a`
  background-color: #f5f5f5;
  border: 2px solid #00000020;
  padding: 2rem;
  margin: 2rem 1rem;
  border-radius: 1.25rem;

  &:hover {
    background-color: #ffa534;
  }
`;
