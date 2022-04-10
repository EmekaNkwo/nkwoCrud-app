import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          //... means the spread operator in javascript
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <input type="text" placeholder="Name.." />
      <input type="number" placeholder="Age.." />
      <button>Create User</button>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div>
            <h1> Name: {user.name}</h1>
            <h1> Age: {user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
