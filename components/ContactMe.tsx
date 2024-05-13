/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
    const outlookLink = `mailto:contact@altalance.com?subject=${subject}&body=${body}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@altalance.com&su=${subject}&body=${body}`;

    const isOutlookUser = /@outlook\.|@hotmail\.|@live\./.test(formData.email);

    if (isOutlookUser) {
      window.location.href = outlookLink;
    } else {
      window.open(gmailLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <h3 className="top-5 left-9 right-0 uppercase tracking-[20px] text-gray-500 text-2xl text-center">Contact</h3>
          <h4 className="text-4xl font-semibold mb-8">
            <span className="text-[#03abfff7] underline">Let's Connect,</span> and work together.
          </h4>
          <div className="md:flex md:justify-center md:space-x-8">
            <div className="flex flex-col items-center space-y-2 mb-6 md:mb-0">
              <EnvelopeIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-xl">contact@altalance.com</p>
            </div>
            <div className="flex flex-col items-center space-y-2 mb-6 md:mb-0">
              <PhoneIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-xl">+91 6301421537</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <PhoneIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-xl">+91 9441615167</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-8">
            <MapPinIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">Hyderabad, Telangana</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 md:mt-11 max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input {...register('name')} placeholder="Name" className="contactInput col-span-2" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput col-span-2" type="email" />
            <input {...register('subject')} placeholder="Subject" className="contactInput col-span-2" type="text" />
            <textarea {...register('message')} placeholder="Message" className="contactInput h-25 col-span-2"></textarea>
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#03abfff7] py-4 px-8 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
