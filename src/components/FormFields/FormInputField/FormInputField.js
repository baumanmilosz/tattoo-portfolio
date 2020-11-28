import React from 'react';
import styled from 'styled-components';

const FormInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
`;

const FormInputFieldLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

const FormInputFieldInner = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #000;
`;

const FormTextareaFieldInner = styled.textarea`
  width: 500px;
  height: 200px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #000;
  resize: none;
`;

const FormInputField = ({
  name,
  label,
  type = "text",
}) => {
  return (
    <FormInputFieldWrapper>
      <FormInputFieldLabel htmlFor={name}>
        {label}
      </FormInputFieldLabel>
      {type === 'textarea' ? (
        <FormTextareaFieldInner />
      ) : (
        <FormInputFieldInner
          type={type}
          name={name}
        />
      )}
    </FormInputFieldWrapper>
  );
};

export default FormInputField;
