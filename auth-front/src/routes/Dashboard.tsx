import { useEffect, useState } from "react";
import PortalLayout from "../layout/PortalLayout";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/authConstants";

import Menu from '../componentes/menu';
import DisplayData from '../DisplayData';
import Form from '../componentes/Form';
import Footer from "../componentes/footer";
import DisplayData1 from "../DisplayData1";


interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const auth = useAuth();

  const [todos, setTodos] = useState<Todo[]>([]);
  

  async function getTodos() {
    const accessToken = auth.getAccessToken();
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const json = await response.json();
        setTodos(json);
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  }

 

  useEffect(() => {
    getTodos();
  }, []);

  

  return (
    <PortalLayout>
      <div className="App">
      <div className="mother-box">
      <div className="caja-c0"></div>
        <div className="caja-c1"><Menu/></div>
        <div className="caja-c2">
          <DisplayData1/>
          </div>
        <div className="caja-c3"><Footer/></div>
      </div>
    </div>
    </PortalLayout>
  );
}
