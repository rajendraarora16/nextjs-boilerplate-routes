import styled from "styled-components";
import color from "../common/colors";

/**
 * Common typography
 */
export const LeadText = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: ${props => (props.color ? props.color : color.UNO)};
  text-transform: ${props => (props.caps ? "uppercase" : "none")};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  text-align: ${props => (props.align ? props.align : "center")};
`;

export const SmallText = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: ${props => (props.color ? props.color : color.UNO)};
  text-transform: ${props => (props.caps ? "uppercase" : "none")};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  text-align: ${props => (props.align ? props.align : "center")};
`;

export const LeadSubText = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${props => (props.color ? props.color : color.UNO)};
  text-transform: ${props => (props.caps ? "uppercase" : "none")};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  text-align: ${props => (props.align ? props.align : "center")};
`;

export const SmallSUbText = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.color ? props.color : color.UNO)};
  text-transform: ${props => (props.caps ? "uppercase" : "none")};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  text-align: ${props => (props.align ? props.align : "center")};
`;
