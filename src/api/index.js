import * as Facebook from "expo-facebook";
import * as SecureStore from "expo-secure-store";
import { FACEBOOK_APP_ID } from "../config";

export const postPicture = data => {
  fetch("http://localhost:4001/painting", {
    method: "POST",
    body: data
  });
};

export const logInFacebook = async () => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    FACEBOOK_APP_ID,
    {
      permissions: ["public_profile"]
    }
  );
  if (type === "success") {
    const facebookResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
    );

    return facebookResponse.json();
  }
};

export const getToken = async data => {
  const loginResponse = await fetch("http://localhost:4001/signIn", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const response = await loginResponse.json();

  SecureStore.setItemAsync("ACCESS_TOKEN", response.token);
};
