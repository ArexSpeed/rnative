import axios from "axios";

const API_KEY = "AIzaSyDeEU-mLNWbjSiscZ9QylFfkpDN2684ZXc";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response);
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signup", email, password);
}

export function login(email, password) {
  return authenticate("signin", email, password);
}
