import * as React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IService {
  name: string;
  icon: string;
  link: string;
}

const GridContainer: React.FC = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    const servicesJson = import("../services.json");

    servicesJson.then((result) => {
      setServices(result.default.services);
    });
  });

  const fallbackImage = (ev: any) => {
    ev.target.src = "/placeholder.png";
  };

  return (
    <GridContainerContainer>
      {services.map((service, index) => {
        return (
          <Grid key={index} href={service.link}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <GridIcon src={service.icon} onError={fallbackImage} />
              <GridName>{service.name}</GridName>
            </motion.div>
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
  text-decoration: none;
  font-size: 1rem;

  &:visited {
    color: #000;
  }

  &:hover {
    background-color: #ffa534;
  }
`;
