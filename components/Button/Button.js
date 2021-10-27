import styled from "styled-components";
import { primary } from "../../styles/utils";

export const Button = styled.a`
  display: flex;
  justify-content: center;
  padding: 14px 32px;
  border: 2px solid #fff;
  border-radius: 8px;
  transition: 0.15s ease-out;
  background: #fff;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => primary(props)[600]};

  &:hover {
    transform: scale(1.02) translateY(-2px);
  }
`;

export const ButtonOutlined = styled(Button)`
  background: transparent;
  color: #fff;
`;
