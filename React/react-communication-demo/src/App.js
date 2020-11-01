import React from 'react';
import FatherToSon from './Component/CommunicationDemo/FatherToSon'
import SonToFather from './Component/CommunicationDemo/SonToFather'
import BrotherToBrother from './Component/CommunicationDemo/BorotherToBrother'

function App() {

  return (
    <div className="App">
      <FatherToSon />
      <hr />
      <SonToFather />
      <hr />
      <BrotherToBrother />
    </div>
  );
}

export default App;
