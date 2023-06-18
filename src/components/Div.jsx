import styled from "styled-components";

export const Widget = styled.div`
  max-width: 648px;
  max-height: 760px;
  padding: 20px;
  background: linear-gradient(180deg, #2f80ed, #1488cc, #2b32b2);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  box-shadow: inset 0px 0px 30px 10px rgb(2, 240, 255, 0.1);
  transition: all 0.2s ease-in-out;

  @media (max-width: 576px) {
    max-height: none;
    max-width: none;
    width: 100%;
    height: 100vh;
    border-radius: 0px;
    padding: 0px;
  }
`;

export const WidgetContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 566px;
  max-height: 705px;
  text-align: center;

  @media (max-width: 576px) {
    max-height: none;
    max-width: none;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const ForecastDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 576px) {
    gap: 0px;
  }
`;

export const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 30px 0;

  @media (max-width: 576px) {
    width: 95%;
    margin: 55px 10px;
  }
`;

export const StatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 50px;
  padding: 20px 0;
`;

export const StatusWeather = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;