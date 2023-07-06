import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useMemo } from "react";
import { auth } from "../firebase";
//import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

const config = {
  andoidClientId: "", //google-service.json oauth_client.clientid
  iosClientId: "", // for iOS GoogleService-info.plist below CLIENT_ID
  scopes: ["profile", "email"],
  permission: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, () => {
        if (user) {
          // Logged in
          setUser(user);
        } else {
          // Not logged in
          setUser(null);
        }

        setLoadingInitial(false);
      }),
    []
  );
  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync()
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          // login
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error]
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
