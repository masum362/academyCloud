// import { useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthProvider";

// const url = import.meta.env.VITE_BACKEND_URL;
// console.log(url);

// const createUser = async (user) => {
//   try {
//     const response = await axios.post(`${url}/add-user`, user, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const loginUser = async (user) => {
//   console.log(user);
//   try {
//     const response = await axios.post(`${url}/login`, user, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getSingleUser = async (id) => {
//   try {
//     const response = await axios.get(`${url}/user/${id}`, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const addBook = async (book) => {
//   try {
//     const response = await axios.post(`${url}/add-book`, book, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getSpot = async () => {
//   try {
//     const response = await axios.get(`${url}/posts`, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getSingleBook = async (id) => {
//   try {
//     const response = await axios.get(`${url}/book/${id}`, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateBook = async (book, id) => {
//   try {
//     const response = await axios.put(`${url}/update-book/${id}`, book, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteBook = async (id) => {
//   try {
//     const response = await axios.delete(`${url}/delete-book/${id}`, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getCategories = async () => {
//   try {
//     const response = await axios.get(`${url}/categories`, {
//       withCredentials: true,
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export {
//   createUser,
//   loginUser,
//   getSingleUser,
//   addBook,
//   getSpot,
//   getSingleBook,
//   updateBook,
//   deleteBook,
//   getCategories,
// };
