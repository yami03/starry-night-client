import * as Facebook from "expo-facebook";
import * as SecureStore from "expo-secure-store";
import { FACEBOOK_APP_ID } from "../config";

const URL = "http://192.168.0.7:4001";

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
  const loginResponse = await fetch(`${URL}/signIn`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const response = await loginResponse.json();

  SecureStore.setItemAsync("ACCESS_TOKEN", response.token);
  SecureStore.setItemAsync("USER_ID", response._id);

  return response;
};

export const getUser = async () => {
  const token = await SecureStore.getItemAsync("ACCESS_TOKEN");
  const id = await SecureStore.getItemAsync("USER_ID");

  const response = await fetch(`${URL}/user/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await response.json();
  return result;
};

export const getAllPicture = async () => {
  const token = await SecureStore.getItemAsync("ACCESS_TOKEN");

  const response = await fetch(`${URL}/paintings`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await response.json();
  return result.paintings;
};

export const getMyPicture = async () => {
  const token = await SecureStore.getItemAsync("ACCESS_TOKEN");
  const id = await SecureStore.getItemAsync("USER_ID");

  const response = await fetch(`${URL}/paintings/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await response.json();
  return result.paintings;
};

export const postPicture = async data => {
  const token = await SecureStore.getItemAsync("ACCESS_TOKEN");

  fetch(`${URL}/painting`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};
