import React from "react";
import { Container, Content, HighlightTitle, QRCode, QRCodeContainer, TextContainer, Title } from "./styles";
import QRCodeImage from "../../../assets/qrcode.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>
            Você está no
            <HighlightTitle> GRAMADO SUMMIT </HighlightTitle> e deseja realizar um
            <HighlightTitle> MVP?</HighlightTitle>
          </Title>
        </TextContainer>
        <QRCodeContainer>
          <QRCode source={QRCodeImage} />
        </QRCodeContainer>
      </Content>
    </Container>
  );
};

export { Home };
