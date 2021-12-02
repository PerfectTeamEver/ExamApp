import React from "react";
import { useForm } from "react-hook-form";
import {
   Container,
   Wrapper,
   Adding,
   Option,
   Question,
   Input,
   Add,
   Check,
   InputWrapper,
   ErrorText,
   MyTest,
   Validation,
} from "./../AdminPanel.style";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveCreatedTest } from "../../../store/questions/admin-slice";

const CreateTest = () => {
   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
   } = useForm();
   const dispatch = useDispatch();
   const onSubmitForm = (data) => {
      if (!validation()) {
         reset();
         dispatch(saveCreatedTest(data));
      }
   };
   const validation = () => {
      let data = watch();
      let validate = [];
      Object.values(data).forEach((value) => {
         value === true && validate.push(value);
      });
      return validate.length !== 1;
   };
   return (
      <Container>
         <Wrapper>
            <Adding>
               <form onSubmit={handleSubmit(onSubmitForm)}>
                  <Question>
                     QUESTION
                     <Input
                        {...register("question", {
                           required: true,
                        })}
                     />
                  </Question>
                  Answers
                  {[...Array(4)].map((e, i) => (
                     <>
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
                           <Check
                              {...register("is_correct_" + i)}
                              type="checkbox"
                           />
                        </Option>
                     </>
                  ))}
                  {validation() && (
                     <Validation>
                        Only one option must be true answer!
                     </Validation>
                  )}
                  <Add>Create test</Add>
               </form>
               <Link to="/admin/my-tests">
                  <MyTest>My Tests</MyTest>
               </Link>
            </Adding>
         </Wrapper>
      </Container>
   );
};

export default CreateTest;
