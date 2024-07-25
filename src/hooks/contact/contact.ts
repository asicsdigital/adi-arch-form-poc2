import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/router";
import { postContactData } from "../../lib";


interface ErrorDetail {
  type: string;
  message: string;
  ref: {
    name: string;
  };
}

interface Errors<T extends ErrorDetail> {
  [key: string]: T;
}

export const useContactForm = (captchaToken: string | null) => {
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const onError = <T extends ErrorDetail>(errors: Errors<T>): void => {
    const errorKeys = Object.keys(errors);
    errorKeys.forEach((key) => {
      const error = errors[key];
      const name = error?.ref?.name || '';
      const message = error?.message || '';
      console.log("Error", message, name);
    })
  };

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

  return { message, onSubmit , onError };
};
