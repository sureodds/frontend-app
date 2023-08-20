'use client';
import React from 'react';
import { InputField, PasswordInput } from '@/components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { BiErrorCircle } from 'react-icons/bi';
import { BsFillShieldLockFill } from 'react-icons/bs';
import Link from 'next/link';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const SigninPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <div className="flex sm:flex-row flex-col h-screen">
      {/* Left Side with Color */}
      <div className="sm:w-1/2 flex w-full h-screen items-center justify-center bg-white">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form className="sm:w-4/6 w-10/11 p-6 rounded-lg">
              <div className="flex items-center justify-start mb-8">
                {/* Logo Icon */}
                <div className="sm:w-5 sm:h-5 w-4 h-4 bg-main rounded-md mr-2"></div>
                <p className="uppercase text-primary font-black sm:text-xl text-lg">
                  Sure<span className="text-main">Odds</span>
                </p>
              </div>
              <h2 className="sm:text-2xl text-lg font-bold mb-6 text-main">
                Log In With SureOdds
              </h2>
              <div className="flex mb-10 rounded-md bg-gray-100 items-center justify-between lg:flex-nowrap flex-wrap border p-3 border-main">
                <div className="flex items-center justify-between">
                  <div className="">
                    <BiErrorCircle className="mr-2 w-4 h-4" />
                  </div>
                  <p className="text-small">
                    IMPORTANT! Please check that you are visiting
                    https://sureodds.pro/
                  </p>
                </div>
                <div className="bg-gray-50 p-1 ml-6 shadow-lg mt-2 lg:mt-0">
                  <p className="text-xs flex items-center text-small">
                    {' '}
                    <BsFillShieldLockFill className="mr-1 text-green-600 font-bold" />{' '}
                    <span className="text-green-600">https://</span>
                    sureodds.pro/
                  </p>
                </div>
              </div>
              <InputField
                label="Your Email Address"
                name="email"
                type="email"
                placeholder="example@mail.com"
                ariaLabel="email"
              />
              <PasswordInput
                label="Your Password"
                name="password"
                forgotPassword
                placeholder="Password@347"
                ariaLabel="password"
              />
              <button className="w-full bg-main text-white sm:py-3 py-2 font-bold rounded-md hover:bg-blue-600 transition duration-300">
                Log In <span aria-hidden="true">&rarr;</span>
              </button>
              <div className="mt-3 text-left">
                <p className="text-xs">
                  New on SureOdds?{' '}
                  <Link href="/signup" className="text-main">
                    Create Account
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 bg-primary"></div>
    </div>
  );
};

export default SigninPage;
