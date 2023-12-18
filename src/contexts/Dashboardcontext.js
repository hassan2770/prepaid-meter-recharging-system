import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import "firebase/firestore";
const DashboardContext = React.createContext("");
export function useDash() {
  return useContext(DashboardContext);
}

export const TaskProvider = ({ children }) => {
  //Geting the collection from firestore and storing it in userCollectionRef
  const usersCollectionRef = collection(db, "Transactions");
  const user = auth.currentUser;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    //Getting tasks from Firebase firestore
    const getUsers = async () => {
      //Getting the user specific task
      const q = query(
        collection(db, "Transactions"),
        where("userId", "==", user.uid)
      );
      const data = await getDocs(q);
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [user, usersCollectionRef]);

  const Addtasks = async (task) => {
    await addDoc(usersCollectionRef, task);
  };
  const deleteTasks = async (id) => {
    const userID = doc(db, "Transactions", id);
    await deleteDoc(userID);
  };
  
  const value = {
    tasks,
    deleteTasks,
    Addtasks,
  };
  

  

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
