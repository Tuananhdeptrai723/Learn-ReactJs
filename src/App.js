// import logo from './logo.svg';
import './App.css';
import Th3 from './Bai9_TH3/Th3'
import Th4 from './Bai9_TH4/Th4';
import Bai8_BT1 from './Bai8_BT1/Bai8_BT1';
import Bai8_BT2 from './Bai8_BT2/Bai8_BT2';
import Header from './Bai9_BT1/Header';
import UserForm from './Bai9_BT2/User_form';
import Greeting from './Bai9_BT2/Greeting';
import { useState } from 'react';


function App() {
  // Bai9_BT2
  const [name, setName] = useState("");
  const handleNameSubmit = (newName) => {
    setName(newName);
  };
  return (
    <div>
      <h1> Bai8_BT1</h1>
      <Bai8_BT1></Bai8_BT1>

      <h1>Bai8_BT2</h1>
      <Bai8_BT2></Bai8_BT2>

      <h1>Bai9_Thuc Hanh 3</h1>
      <Th3></Th3>

      <h1>Bai9_Thuc Hanh 4</h1>
      <Th4></Th4>

      <h1>Bai9_BT1</h1>
      <Header></Header>


      <h1>Bai9_BT2</h1>
      <div>
        <UserForm onSubmit={handleNameSubmit} />
        <Greeting name={name} />
      </div>
    </div>
  );

}

export default App;
