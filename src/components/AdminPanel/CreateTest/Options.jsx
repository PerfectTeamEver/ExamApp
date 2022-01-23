import React from "react";
import {
   Check,
   ErrorText,
   Input,
   InputWrapper,
   Option,
} from "./CreatTest.style";

const Options = ({ errors, register }) => (
   [...Array(4)].map((e, i) => (
      <Option>
         <InputWrapper>
            <Input
               {...register("option_" + i, {
                  required: true,
               })}
               type="text"
            />
            {errors["option_" + i] && (
               <ErrorText>option must be written</ErrorText>
            )}
         </InputWrapper>
         <Check {...register("is_correct_" + i)} type="checkbox" />
      </Option>
   ))
);

export default Options;
