'use client';
import { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Switch } from '@headlessui/react';
import {
  AccordionItem,
  InputField,
  SectionTitle,
  SelectField,
} from '@/components';
import { BiCategory } from 'react-icons/bi';
import classNames from 'classnames';
import Link from 'next/link';

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const AddPage = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    // Clear error and submit form
    setError('');
    // Submit logic goes here...
  };

  return (
    <section>
      <div className="container">
        {/* Ads Banner */}
        <div className="h-20 w-full bg-blue-500 rounded-md mt-4 mb-10"></div>
        <SectionTitle
          icon={<BiCategory style={{ fontSize: `1.7rem` }} />}
          title="Add Your Forecast"
        />
        <div className="border my-4 p-10 bg-secondary rounded-md">
          {/* <p>
            You can add your forecast by clicking on the New Forecast button in
            the top right
          </p> */}
          <div className="accordion">
            <div className="mb-10 w-full grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <SelectField data={people} label="Select Bookmarker" />
              <SelectField data={people} label="Select Sport" />
            </div>
            {[1, 3, 4, 5, 6].map((item, i) => (
              <AccordionItem
                key={i}
                title="International Clubs/UEFA Europa Conference League"
              >
                {[1, 3, 4, 5, 6].map((item, i) => (
                  <AccordionItem
                    key={i}
                    title="Paraguya Kings VS Paraguya Kings"
                  >
                    <p>Paraguya Kings VS Paraguya Kings</p>
                    <form
                      onSubmit={handleSubmit}
                      className="mx-auto mt-16 max-w-xl sm:mt-20"
                    >
                      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                          <InputField
                            placeholder="Email"
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            error={error && !email.trim() ? error : ''}
                          />
                        </div>
                        <div>
                          <InputField
                            placeholder="Name"
                            label="User Name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            error={error && !name.trim() ? error : ''}
                          />
                        </div>
                        <Switch.Group
                          as="div"
                          className="flex gap-x-4 sm:col-span-2"
                        >
                          <div className="flex h-6 items-center">
                            <Switch
                              checked={agreed}
                              onChange={setAgreed}
                              className={classNames(
                                agreed ? 'bg-indigo-600' : 'bg-gray-500',
                                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                              )}
                            >
                              <span className="sr-only">Agree to policies</span>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-300/5 transition duration-200 ease-in-out',
                                )}
                              />
                            </Switch>
                          </div>
                          <Switch.Label className="text-sm leading-6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <Link
                              href="/"
                              className="font-semibold text-indigo-600"
                            >
                              privacy&nbsp;policy
                            </Link>
                            .
                          </Switch.Label>
                        </Switch.Group>
                      </div>
                      <div className="mt-10">
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Lets talk
                        </button>
                      </div>
                    </form>
                  </AccordionItem>
                ))}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
