import React, { useState } from "react";
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
} from "./AdminPanel.style";
import { BsCheckLg } from "react-icons/bs";
import { saveCreatedTest } from "../../store/questions/admin-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AdminPanel = () => {
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
      let trueAnswer = [];
      Object.values(data).forEach((value) => {
         value === true && trueAnswer.push(value);
      });
      return trueAnswer.length !== 1;
   };
   return (
      <Container>
         <Wrapper>
            <Adding>
               <form onSubmit={handleSubmit(onSubmitForm)}>
                  <Question>
                     <input
                        {...register("question", {
                           required: true,
                        })}
                     />
                  </Question>
                  {[...Array(4)].map((e, i) => (
                     <Option key={i}>
                        <input
                           {...register("option_" + i, {
                              required: true,
                           })}
                           type="text"
                        />
                        {errors["option_" + i] && (
                           <span>option must be written</span>
                        )}
                        <input
                           {...register("is_correct_" + i)}
                           type="checkbox"
                        />
                     </Option>
                  ))}
                  {validation() && (
                     <h2>Only one option must be true answer!</h2>
                  )}
                  <button>Create test</button>
               </form>
               <div>
                  <Link to="/createdTests">
                     <button>My Tests</button>
                  </Link>
               </div>
            </Adding>
         </Wrapper>
      </Container>
   );
};

export default AdminPanel;
