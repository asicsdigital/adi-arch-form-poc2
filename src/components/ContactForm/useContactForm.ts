import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

const useContactForm = (captchaToken: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data: FieldValues) => {
    console.log('Captcha value', captchaToken);
    if (!captchaToken) {
      setMessage("Please verify you are human");
      const timer = setTimeout(() => setMessage(''), 2000);
      return () => clearTimeout(timer);
    }

    const updatedData = { 
        ...data, 
        captchaToken 
    };

    setIsLoading(true);
    try {
        const res  =  await fetch('/api/sfcc/contactus', {
          method: 'POST',
          body: JSON.stringify(updatedData),
        });
  
        const newdata = await res.json();
        console.log('New Data', newdata);
        setMessage("Case Created Successfully");
      } catch (error) {
        setMessage("An unexpected problem occured while creating case please try again later.");
        console.error('An unexpected error occurred:', error);
      } finally {
        setIsLoading(false);
        const timer = setTimeout(() => {
          setMessage('');
        }, 5000);
  
        return () => clearTimeout(timer);
      }
  };

  return { isLoading, message, onSubmit };
};

export default useContactForm;
