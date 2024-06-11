import { TokenData } from "../types";

export default async function fetchOAuth2Token() {
    const {
        SFSC_TOKEN_URL: tokenUrl = "",
        SFSC_GRANT_TYPE: grantType = "",
        SFSC_CLIENT_ID: clientId = "",
        SFSC_CLIENT_SECRET: clientSecret = "",
        SFSC_USERNAME: username = "",
        SFSC_PASSWORD: password = "",
    } = process.env;

    const formdata = new FormData();
    formdata.append("grant_type", grantType);
    formdata.append("client_id", clientId);
    formdata.append("client_secret", clientSecret);
    formdata.append("username", username);
    formdata.append("password", password);

    const requestOptions = {
        method: "POST",
        body: formdata,
    };

    try {
        const response = await fetch(tokenUrl, requestOptions);
        const tokenData : TokenData = await response.json();

        if (!response.ok || !tokenData.access_token) {
            throw new Error(`SFSC Token Error: ${tokenData?.error_description} ${tokenData?.error}`);
        }

        return tokenData.access_token;
        
    } catch (error) {
        console.log("SFSC Token Error", error);
        return undefined;
    }
};
