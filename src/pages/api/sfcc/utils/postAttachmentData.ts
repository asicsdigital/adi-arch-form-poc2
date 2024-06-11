import { AttachmentData } from "../types";

export default async function postAttachmentData(token : string, postData : AttachmentData) {
    const {
        SFSC_IMAGE_URL : url = "",
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
            console.log("Error", data)
            throw new Error("SFCC Image posting error");
        }

        console.log("Image posted");

        return data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}