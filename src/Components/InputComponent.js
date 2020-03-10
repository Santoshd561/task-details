import React from "react";
import { Input } from "antd";
export const InputComponent = ({
  field,
  form,
  label,
  labelWidth,
  isRequired,
  isDisabled,
  form: { touched, errors, validateOnChange },
  noLabel,
  inlineLabel,
  ...props
}) => {
  return (
    <>
      <div>
        <div>
          <Input
            {...field}
            {...props}
            validateOnChange={false}
            isRequired={isRequired}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </>
  );
};
