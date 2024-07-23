export default async function validateReCaptcha(token: string) {
  const { RECAPTCHA_API_URL: url = "", RECAPTCHA_SECRET_KEY: key = "" } = process.env;
  const finalUrl = `${url}?secret=${key}&response=${token}`;

  const options = {
    method: "POST",
  };

  try {
    const response = await fetch(finalUrl, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Recaptcha API Error`);
    }
    if (data.success) {
      console.log("Catpcha Verfied");
    } else {
      console.log("Captcha verification failed");
    }
    return data;
  } catch (error) {
    console.log("Captcha Verification Failed");
    console.log("Captcha API Error", error);
    return undefined;
  }
}
