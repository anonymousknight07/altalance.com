import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
    const outlookLink = `mailto:contact@altalance.com?subject=${subject}&body=${body}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@altalance.com&su=${subject}&body=${body}`;

    // Check if the user has an Outlook email account
    const isOutlookUser = /@outlook\.|@hotmail\.|@live\./.test(formData.email);

    // Redirect based on the user's email client
    if (isOutlookUser) {
      window.location.href = outlookLink;
    } else {
      window.open(gmailLink, '_blank');
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="decoration-[#03abfff7]/50 underline">Let&apos;s Connect,</span>{" "}
          and work together.
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">contact@altalance.com</p>
            <PhoneIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 6301421537</p>
            <PhoneIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 9441615167 </p>
            
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#03abfff7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Hyderabad, Telangana</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#03abfff7] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ContactMe), { ssr: false });
