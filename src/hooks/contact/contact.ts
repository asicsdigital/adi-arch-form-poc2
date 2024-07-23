import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/router";
import { postContactData } from "../../lib";

export const useContactForm = (captchaToken: string | null) => {
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    if (!captchaToken) {
      setMessage("Please verify you are human");
      const timer = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(timer);
    }

    const updatedData = {
      ...data,
      captchaToken,
    };

    try {
      const response = await postContactData(updatedData);
      router.push("https://www.asics.com/us/en-us/contact-us-confirmation.html"); // Possibly remove this code by getting this value in contentstack payload
    } catch (error) {
      setMessage("An unexpected problem occured while creating case please try again later.");
      console.error("An unexpected error occurred:", error);
    } finally {
      setMessage("");
    }
  };

  return { message, onSubmit };
};
