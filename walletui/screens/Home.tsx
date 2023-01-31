import { FunctionComponent } from "react";
import { colors } from "../components/colors";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { Container } from "../components/shared";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar />
    </HomeContainer>
  );
};

export default Home;
