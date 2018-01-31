import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from 'styles/theme';

export const Fields = styled.fieldset`
  display: block;
  float: left;
  max-width: 640px;
  width: 100%;

  @media screen and (max-width: 782px) {
    float: none;
  }
`;

export const Field = styled.p`
  display: block;
  margin: 10px 0 20px;
`;

export const FieldWrap = styled.div`
  display: block;
  margin: ${themeUtils.padding}px 0;
`;

export const FieldName = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.3;
  margin: 0 0 5px;
`;

const inputStyles = css`
  background-color: #fff;
  border: 1px solid ${themeUtils.colors.detail};
  border-radius: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: #32373c;
  font-size: 14px;
  outline: none;
  transition: 0.05s border-color ease-in-out;
`;

export const FieldSelect = styled.select`
  ${inputStyles};
  height: 28px;
  line-height: 28px;
  margin: 1px;
  max-width: 200px;
  padding: 2px;
  vertical-align: middle;

  &[multiple] {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const FieldInput = styled.input`
  ${inputStyles};
  display: block;
  height: 32px;
  padding: 3px 5px;
  width: 100%;

  &::placeholder {
    color: ${themeUtils.colors.detail};
  }
`;

export const SizedInput = styled.input`
  ${inputStyles};
  display: block;
  height: 32px;
  padding: 3px 5px;
`;

export const fieldNumberClass = css`
  display: inline-block;
  height: 32px;
  padding: 3px 5px;
  width: 64px;
`;

export const FieldTextarea = styled.textarea`
  ${inputStyles};
  display: block;
  height: 80px;
  padding: 2px 6px;
  resize: vertical;
  width: 100%;
`;

export const FieldValue = styled.span`
  display: block;
  font-size: 14px;
  line-height: 1.4;
`;

export const FieldCheckbox = styled.input`
  appearance: none;
  background-color: ${themeUtils.colors.white};
  border: 1px solid ${themeUtils.colors.form.checkbox.border};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  color: ${themeUtils.colors.text};
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
      color: ${themeUtils.colors.pink};
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

export const MessageWrap = styled.div`
  background: ${themeUtils.colors.background};
  border-left: 4px solid ${themeUtils.colors.pink};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  display: block;
  margin: 5px 0 15px;
  padding: 1px 38px 1px 12px;
  position: relative;
`;

export const MessageText = styled.p`
  color: ${themeUtils.colors.dark};
  font-size: 13px;
  line-height: 1.5;
  margin: 0.5em 0;
  padding: 2px;
`;

export const DismissButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 9px;
  position: absolute;
  right: 1px;
  top: 0;

  &::before {
    background: none;
    color: ${themeUtils.colors.text};
    content: '\f153';
    display: block;
    font: normal 16px/20px dashicons;
    height: 20px;
    speak: none;
    text-align: center;
    width: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const InfoColumn = styled.section`
  float: right;
  line-height: 1.4;
  margin: 10px -300px 0 0;
  width: 280px;
  @media screen and (max-width: 782px) {
    float: none;
    margin-right: 0;
    width: 100%;
  }
`;

export const InfoBox = styled.aside`
  border: 1px solid ${themeUtils.colors.detail};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  display: block;
  margin: 0 0 20px;
`;

export const InfoBoxHeader = styled.h3`
  border-bottom: 1px solid ${themeUtils.colors.detail};
  color: ${themeUtils.colors.dark};
  font-size: 14px;
  font-weight: ${themeUtils.fonts.weight.bold};
  padding: 8px 12px;
  user-select: none;
`;

export const InfoBoxContent = styled.div`
  font-size: 13px;
  padding: 6px 10px 20px;
`;
