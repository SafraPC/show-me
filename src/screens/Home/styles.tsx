import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItens: "center",
  },
})`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  padding: 10px;
  justify-content: center;
  align-itens: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
`;

export const TextContainer = styled.View`
  flex-direction: row;
`;

export const HighlightTitle = styled.Text`
  font-size: 20px;
  color: orange;
  text-align: center;
  font-weight: bold;
`;

export const QRCodeContainer = styled.View`
  padding: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const QRCode = styled.Image`
  height: 300px;
  width: 300px;
  border-radius: 4px;
`;
