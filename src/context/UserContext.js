// import React, {createContext,useState} from "react";
// import Axios from "axios";

// export const UserContext = createContext();

// export const UserComponentContext = props => {
//     const [user,setUser] = useState();

//       Axios({
//         method: "POST",
//         withCredentials: true,
//         url: "http://localhost:8080/usuarios/sesion",
//         }).then(res => setUser(res.data[0]))
//         .catch(err => console.log(err));

//   return <UserContext.Provider value={{ user }}>
//     {props.children}
//   </UserContext.Provider>

// }