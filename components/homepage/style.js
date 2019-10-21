import styled from "styled-components";
import { LeadText } from "../../common/typography";

export const MainContainer = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const ParentContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

export const LeadTextHeader = styled(LeadText)`
  display: inline-block;
  font-weight: 800;
`;

export const Table = styled.table`
  border: 1px solid black;
  text-align: ${p => (p.align ? p.align : "center")};
  display: block;
  height: 400px;
  overflow-y: scroll;
  width: 100%;
`;

export const Tbody = styled.tbody``;

export const TH = styled.th`
  border: 1px solid black;
`;
export const TD = styled.td`
  border: 1px solid black;
`;
export const TR = styled.tr`
  border: 1px solid black;
`;

export const CheckBoxContainer = styled.div`
  margin: 10px 10px 0 10px;
  padding-bottom: 20px;
  display: inline-block;
  vertical-align: middle;
`;

export const CheckBox = styled.input.attrs({
  name: p => p && p.name,
  value: p => (p.value ? p.value : "")
})`
  margin: 3px 3px 3px 4px;
`;

export const FormElementText = styled.label`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  margin: 0;
  padding-left: 5px;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: -0.3px;
  color: #333333;
`;

export const CheckboxParentContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
