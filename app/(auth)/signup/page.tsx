'use client'
import { Suspense, useState } from 'react'
import { InputField, PasswordInput } from '@/components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/shared/Button'

const validationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
})

const SignupPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [hideReferal, setHideReferal] = useState(false)

  // Form values
  const initialValues = {
    email: '',
    password: '',
    referalCode: '',
  }

  const onSubmit = (values: typeof initialValues) => {
    try {
      router.push('/onboarding')
      setIsLoading(true)
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex sm:flex-row flex-col h-screen'>
      {/* Left Side with Color */}
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='sm:w-3/5 flex w-full h-screen items-center justify-center bg-white'>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {() => (
              <Form className='sm:w-4/6 w-10/11 p-6 rounded-lg'>
                <div className='flex items-center justify-start mb-8'>
                  {/* Logo Icon */}
                  <div className='sm:w-5 sm:h-5 w-4 h-4 bg-main rounded-md mr-2'></div>
                  <p className='uppercase text-primary font-black sm:text-xl text-lg'>
                    Sure<span className='text-main'>Odds</span>
                  </p>
                </div>
                <h2 className='sm:text-2xl text-lg font-bold mb-6 text-main'>
                  Create Your Account
                </h2>
                <InputField
                  label='Your Email Address'
                  name='email'
                  type='email'
                  placeholder='example@mail.com'
                  ariaLabel='email'
                />
                <PasswordInput
                  label='Create Password'
                  name='password'
                  placeholder='Password@347'
                  ariaLabel='password'
                />
                <div>
                  {hideReferal && (
                    <InputField
                      label='Referal Code'
                      name='referalCode'
                      type='text'
                      placeholder='Referal Code'
                      ariaLabel='email'
                    />
                  )}
                  {hideReferal ? (
                    <p
                      onClick={() => setHideReferal(!hideReferal)}
                      className='text-sm text-main mb-3 cursor-pointer'>
                      Hide referal code{' '}
                    </p>
                  ) : (
                    <p
                      onClick={() => setHideReferal(true)}
                      className='text-sm text-main mb-4 mt-8 cursor-pointer'>
                      I have a referal code{' '}
                    </p>
                  )}
                </div>

                {/* <button className='w-full bg-main text-white sm:py-3 py-2 font-bold rounded-md hover:bg-blue-400 transition duration-300'>
                Create Account <span aria-hidden='true'>&rarr;</span>
              </button> */}
                <Button
                  text='Create Account'
                  type='submit'
                  loading={isLoading}
                />
                <div className='mt-3 text-left'>
                  <p className='text-xs'>
                    Already on SureOdds?{' '}
                    <Link href='/signin' className='text-main'>
                      Log In
                    </Link>
                  </p>
                </div>
                <div className='mt-14 text-center'>
                  <p className='text-xs'>
                    By continuing you agree to SureOdds{' '}
                    <Link href='/signin' className='text-main'>
                      Terms of Service,
                    </Link>{' '}
                    <Link href='/signin' className='text-main'>
                      Affilate Program Terms of Service,
                    </Link>{' '}
                    and{' '}
                    <Link href='/signin' className='text-main'>
                      Privacy Notice.
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Suspense>

      {/* Right Side with Form */}
      <div className='w-1/2 bg-primary'></div>
    </div>
  )
}

export default SignupPage
