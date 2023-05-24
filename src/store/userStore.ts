// import { createContext, useContext, useState } from 'react';

// const StoreContext = createContext('');

// export function StoreProvider({ children }) {
//   const [userData, setUserData] = useState(null);

//   const setUser = (user) => {
//     setUserData(user);
//   };

//   const store = {
//     userData,
//     setUser,
//   };

//   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
// }

// export function useStore() {
//   return useContext(StoreContext);
// }