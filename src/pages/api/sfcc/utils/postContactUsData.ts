import { ContactUsData } from "../types";

export default async function postContactUsData(token : string, postData : ContactUsData) {
    const {
        SFSC_API_URL : url = "",
    } = process.env;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const options  = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(postData),
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if(!response.ok) {
            throw new Error(`SFSC Response Error: ${data.error_description || data.error}`);
        }
        return data;
    } catch (error) {
        console.log("Contact us case not created");
        console.log("SFSC Error", error);
        return undefined;
    }
}