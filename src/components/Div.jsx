import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const Widget = styled.div`
  max-width: 648px;
  max-height: 760px;
  padding: 20px;
  background: rgba(42, 6, 112, 0.613) 0%;

  backdrop-filter: blur(25px);
  border-radius: 20px;
  box-shadow: inset 0px 0px 30px 10px rgb(2, 240, 255, 0.1);
`;

export const WidgetContent = styled.div`
  max-width: 566px;
  max-height: 705px;
  text-align: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 30px 0;
`;
