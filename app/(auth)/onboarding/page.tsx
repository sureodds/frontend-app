'use client'
import { Suspense, useState } from 'react'
import { InputField, PasswordInput } from '@/components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { BiErrorCircle } from 'react-icons/bi'
import { BsFillShieldLockFill } from 'react-icons/bs'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import { useRouter } from 'next/navigation'

const validationSchema = Yup.object({
  userName: Yup.string().required('Username is required'),
  firstName: Yup.string().required('Firstname is required'),
  lastName: Yup.string().required('Lastname is required'),
})

const page = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const initialValues = {
    username: '',
    firstName: '',
    lastName: '',
  }

  const onSubmit = (values: typeof initialValues) => {
    try {
      router.push('/account/leaderboard')
      setIsLoading(true)
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex sm:flex-row flex-col h-screen bg-primary'>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='sm:w-3/5 flex w-full h-screen items-center justify-center bg-white'>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {() => (
              <Form className='sm:w-1/2 w-10/11'>
                <div className='flex items-center justify-start mb-14'>
                  {/* Logo Icon */}
                  <div className='sm:w-5 sm:h-5 w-4 h-4 bg-main rounded-md mr-2'></div>
                  <p className='uppercase text-primary font-black sm:text-xl text-lg'>
                    Sure<span className='text-main'>Odds</span>
                  </p>
                </div>
                <h2 className='sm:text-2xl text-lg font-bold mb-6 mt-14 text-main'>
                  Get Started
                </h2>
                <InputField
                  label='Your User name'
                  name='userName'
                  type='text'
                  placeholder='Your User name'
                  ariaLabel='userName'
                />
                <InputField
                  label='Your First name'
                  name='firstName'
                  type='text'
                  placeholder='Your First name'
                  ariaLabel='firstName'
                />
                <InputField
                  label='Your Last name'
                  name='lastName'
                  type='text'
                  placeholder='Your last name'
                  ariaLabel='lastName'
                />
                <Button text='Get Started' type='submit' loading={isLoading} />
                {/* <div className='mt-3 text-left'>
                <p className='text-xs'>
                  New on SureOdds?{' '}
                  <Link href='/signup' className='text-main'>
                    Create Account
                  </Link>
                </p>
              </div> */}
              </Form>
            )}
          </Formik>
        </div>
      </Suspense>
    </div>
  )
}

export default page
