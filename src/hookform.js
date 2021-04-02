import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateName(value) {
    // if (!value) {
    //   return "Name is required";
    // } else if (value !== "Naruto") {
    //   return "Jeez! You're not a fan 😱";
    // } else return true;
    if (value !== "Areej") {
      return "where is Areej";
    }
  }

  const emailReg = register({
    required: "You must provide an email",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid Email",
    },
  });

  function onSubmit(data) {
    const { name, email } = data;
    console.log(name);
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          name="name"
          id="name"
          placeholder="name"
          ref={register({ validate: validateName })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input name="email" id="email" placeholder="email" ref={emailReg} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
