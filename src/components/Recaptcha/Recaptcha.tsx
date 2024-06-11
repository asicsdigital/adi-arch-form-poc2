import ReCAPTCHA from "react-google-recaptcha";

interface Props {
    sitekey?: string;
    onChange?: (token: string | null) => void;
}

const RecaptchaComponent = ({ sitekey = '6LeQMespAAAAAGe69RKeGytZMTBV1DoFYol1I3_X', onChange } : Props) => {
    return (<ReCAPTCHA 
        sitekey = {sitekey}
        onChange = {onChange}
    />)
};

export default RecaptchaComponent;