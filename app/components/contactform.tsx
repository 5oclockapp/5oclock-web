"use client";

import React, { useState, useCallback } from "react";
import { ContactFormData, FormStatus } from "../services/type";
// import { sendContactMessage } from "../services/contactService";
import { sendContactMessage } from "../services/contactservices";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SubmitButton from "./SubmitButton";
import UserIcon from "./icons/UserIcon";
import EmailIcon from "./icons/EmailIcon";
import MessageIcon from "./icons/MessageIcon";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus(FormStatus.Loading);
    setResponseMessage("");

    try {
      const result = await sendContactMessage(formData);

      if (result.startsWith("We're sorry")) {
        setStatus(FormStatus.Error);
      } else {
        setStatus(FormStatus.Success);
        setFormData({ name: "", email: "", message: "" });
      }

      setResponseMessage(result);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus(FormStatus.Error);
      setResponseMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="max-w-xl w-full bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/10 p-8 space-y-8 border border-gray-700 ml-120">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white">Contact Us</h2>
        <p className="mt-2 text-lg text-gray-400">
          We'd love to hear from you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="name"
          name="name"
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          icon={<UserIcon />}
          error={errors.name}
        />
        <InputField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          icon={<EmailIcon />}
          error={errors.email}
        />
        <TextAreaField
          id="message"
          name="message"
          label="Your Message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what's on your mind..."
          icon={<MessageIcon />}
          error={errors.message}
        />
        {/* <div>
          <SubmitButton isLoading={status === FormStatus.Loading}>
            Send Message
          </SubmitButton>
        </div> */}
      <div>
  <button
    type="submit"
    disabled={status === FormStatus.Loading}
    className="px-6 py-2 font-semibold text-white rounded-lg 
               bg-gradient-to-r from-[#1394f9] to-[#de9bfd]
               hover:from-white hover:to-white hover:text-black
               text-gray-800 border border-gray-300
               transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
  >
    {status === FormStatus.Loading ? "Sending..." : "Submit"}
  </button>
</div>

      </form>

      {responseMessage && (
        <div
          className={`mt-6 p-4 rounded-lg text-center transition-opacity duration-300 ${
            status === FormStatus.Success
              ? "bg-green-900/50 text-green-300 border border-green-700"
              : ""
          } ${
            status === FormStatus.Error
              ? "bg-red-900/50 text-red-300 border border-red-700"
              : ""
          }`}
        >
          <p className="font-medium whitespace-pre-wrap">{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
