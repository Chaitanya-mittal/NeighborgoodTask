import { createContext, useEffect, useState } from "react";

const authContext = createContext();
function UseAuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const ifExists = localStorage.getItem("user");
    return ifExists ? JSON.parse(ifExists) : {};
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function createUser(newUser) {
    setUser(newUser);
  }

  return (
    <authContext.Provider value={{ user, createUser }}>
      {children}
    </authContext.Provider>
  );
}

export default UseAuthProvider;
