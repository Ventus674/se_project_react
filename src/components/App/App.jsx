import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  defaultClothingItems,
  coordinates,
  APIkey,
} from "../../utils/constants.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemCardModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

  function handleOpenAddClothingModal() {
    setActiveModal("add-clothing-modal");
  }
  function handleOpenItemCardModal(card) {
    setActiveModal("itemCard-modal");
    setSelectedCard(card);
  }
  function handleCloseModal() {
    setActiveModal("");
  }

  <header city={getWeather?.city} />;

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header handleOpenAddClothingModal={handleOpenAddClothingModal} />
      <Main
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleOpenItemCardModal={handleOpenItemCardModal}
      />
      <Footer />

      <ItemCardModal
        isOpen={activeModal === "itemCard-modal"}
        onClose={handleCloseModal}
        card={selectedCard}
      />
      <ModalWithForm
        isOpen={activeModal === "add-clothing-modal"}
        onClose={handleCloseModal}
        title="New Garment"
        buttonText="Add garment"
        name="add-garment-form"
      >
        <fieldset className="modal__fieldset">
          <label className="modal__label" htmlFor="add-garment-name">
            Name
            <input
              className="modal__input"
              id="add-garment-name"
              type="text"
              required
              placeholder="Name"
            />
          </label>

          <label className="modal__label" htmlFor="add-garment-url">
            Image
            <input
              className="modal__input"
              id="add-garment-url"
              type="url"
              required
              placeholder="Image URL"
            />
          </label>
        </fieldset>
        <fieldset className="modal__fieldset">
          <legend>Select the weather type:</legend>
          <div>
            <input
              className="modal__radio-input"
              type="radio"
              id="Hot"
              name="temp"
              value="Hot"
            />
            <label className="modal__label" htmlFor="Hot">
              Hot
            </label>
          </div>
          <div>
            <input
              className="modal__radio-input"
              type="radio"
              id="Warm"
              name="temp"
              value="Warm"
            />
            <label className="modal__label" htmlFor="Warm">
              Warm
            </label>
          </div>
          <div>
            <input
              className="modal__radio-input"
              type="radio"
              id="Cold"
              name="temp"
              value="Cold"
            />
            <label className="modal__label" htmlFor="Cold">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
