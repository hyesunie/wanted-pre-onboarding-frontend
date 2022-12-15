import styled from "styled-components";

const StyledSection = styled.section`
  width: 600px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  background-color: ghostwhite;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const StyledForm = styled.form`
  width: 100%;
  height: fit-content;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  margin: 1em 0 1em 0;
  padding: 1em;
  width: 60%;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyledSubmit = styled.button`
  padding: 0.5em;
  margin-left: 1%;
  border-radius: 5px;
  background-color: #fffd7c;
  font-size: 1.4em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  overflow: scroll;
  overflow-x: hidden;
`;

const StyledUl = styled.ul`
  width: 90%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLi = styled.li`
  width: 100%;
  height: 10%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 1em;
`;

const StyledItemInput = styled.input`
  width: 80%;
  outline: none;
  border: none;
  font-size: 1em;
  margin-left: 1em;
`;

const StyledItemCheckbox = styled.input`
  margin-right: 1em;
`;

const StyledItemLabel = styled.label``;

const StyledItemDiv = styled.div`
  width: 80%;
  text-align: left;
`;

const StyledItemButton = styled.button`
  padding: 0.4em;
  margin-left: 1%;
  border-radius: 5px;
  background-color: #fffd7c;
  font-size: 0.7em;

  cursor: pointer;
`;

const TodoTemplate = {
  Section: StyledSection,
  Form: StyledForm,
  Input: StyledInput,
  Article: StyledArticle,
  Submit: StyledSubmit,
  Ul: StyledUl,
  Li: StyledLi,
  ItemInput: StyledItemInput,
  ItemCheckBox: StyledItemCheckbox,
  ItemLabel: StyledItemLabel,
  ItemButton: StyledItemButton,
  ItemDiv: StyledItemDiv,
};

export default TodoTemplate;
