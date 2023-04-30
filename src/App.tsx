import { useState } from "react";
import { Card, Button, Modal } from "./components";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="wrapper__title">D a i l i s t</h1>
        <div className="wrapper__upcoming">
          <span className="wrapper__upcoming__title">u p c o m i n g</span>
          <Card />
        </div>
        <div className="wrapper__finished">
          <div className="wrapper__finished__top">
            <span className="wrapper__finished__top__title">
              f i n i s h e d
            </span>
            <span className="wrapper__finished__top__clear">Clear</span>
          </div>
          <div className="wrapper__finished__item">
            <span>01. inisiate project & setup</span>
          </div>
          <div className="wrapper__finished__item">
            <span>02. create UI with html & css</span>
          </div>
          <div className="wrapper__finished__item">
            <span>03. Seperate element into a small components</span>
          </div>
        </div>
        <Button onOpenModal={handleModalToggle} />

        {isModalOpen && <Modal onClose={handleModalToggle} />}
      </div>
    </div>
  );
}

export default App;
