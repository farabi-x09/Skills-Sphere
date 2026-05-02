

"use client";
import { Check } from "@gravity-ui/icons";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function SignInPage() {
    const [isShowPassword, setIsShowPassword] =  useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
     const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
});
console.log(data,error);
      if(data){
        toast.success("Logged in successfully!");
       setTimeout(() => {
    router.push('/');
  }, 2000);
      }
      else{        
        toast.error(error.message || "Failed to log in. Please check your credentials and try again.");
      }
  };

  return (
    <Card className="border mx-auto w-[95%] max-w-lg py-10 my-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-full max-w-sm mx-auto flex-col gap-4 px-4 sm:px-0" onSubmit={onSubmit}>
       

       

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField className="relative"
          isRequired
          minLength={8}
          name="password"
          type={isShowPassword ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
          <span className='absolute cursor-pointer  right-4 top-8' onClick={()=> setIsShowPassword(!isShowPassword)}>
            { isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }
          </span>
        </TextField>

        <div className="flex gap-2 justify-center sm:justify-start">
          <Button type="submit">
            <Check />
            Sign In
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
 
      <div className="flex justify-center items-center gap-2 border border-gray-300 rounded-lg py-2 mt-5 w-[90%] max-w-xs mx-auto cursor-pointer hover:bg-gray-100 transition-all">
        <FaGoogle></FaGoogle>
        <button className='btn text-blue-500'>Login with Google</button>
      </div>

      <p className="text-center mt-5">
        If you don't have an account? <Link className='text-blue-500' href={'/register'}>Sign Up</Link>
      </p>
    </Card>
  );
}