import styled from "styled-components";

export const Input = styled.input.attrs({
  type: p => (p.type ? p.type : "text"),
  placeholder: p => (p.placeholder ? p.placeholder : "")
})`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 2px solid #232323;
  box-shadow: 1px 1px 4px #ebebeb;
  -moz-box-shadow: 1px 1px 4px #ebebeb;
  -webkit-box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  padding: 7px;
  outline: none;
  margin: 20px 10px;
`;
