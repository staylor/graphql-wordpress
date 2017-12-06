import styled from 'react-emotion';

export const Fields = styled.form`
  display: block;
  max-width: 400px;
  width: 100%;
`;

export const Field = styled.p`
  display: block;
  margin: 0 0 ${p => p.theme.padding}px;
`;

export const FieldName = styled.strong`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 1.4;
`;

export const FieldSelect = styled.select`
  background-color: #fff;
  border: 1px solid ${p => p.theme.colors.detail};
  border-radius: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: #32373c;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  margin: 1px;
  max-width: 200px;
  outline: none;
  padding: 2px;
  transition: 0.05s border-color ease-in-out;
  vertical-align: middle;
`;

export const FieldInput = styled.input`
  background-color: #fff;
  border: 1px solid ${p => p.theme.colors.detail};
  border-radius: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: #32373c;
  display: block;
  font-size: 14px;
  height: 32px;
  outline: none;
  padding: 3px 5px;
  transition: 0.05s border-color ease-in-out;
  width: 100%;
`;

export const FieldTextarea = styled.textarea`
  background-color: #fff;
  border: 1px solid ${p => p.theme.colors.detail};
  border-radius: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: #32373c;
  display: block;
  font-size: 14px;
  max-width: 100%;
  outline: none;
  padding: 3px 5px;
  transition: 0.05s border-color ease-in-out;
  width: 300px;
`;

export const FieldValue = styled.span`
  display: block;
  font-size: 16px;
  line-height: 1.4;
`;

export const FieldCheckbox = styled.input`
  appearance: none;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.form.checkbox.border};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  color: ${p => p.theme.colors.table.cell};
  cursor: pointer;
  display: inline-block;
  height: 16px;
  line-height: 0;
  min-width: 16px;
  outline: 0;
  padding: 0;
  transition: 0.05s border-color ease-in-out;
  vertical-align: text-top;
  width: 16px;

  &:checked {
    &::before {
      color: ${p => p.theme.colors.pink};
      content: '\f147';
      float: left;
      display: inline-block;
      font: normal 21px/1 dashicons;
      margin: -3px 0 0 -4px;
      speak: none;
      vertical-align: middle;
      width: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;
