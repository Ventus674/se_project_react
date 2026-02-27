import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/defaultClothing.js";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext.js";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { addNewItem, getItems, deleteItem } from "../../utils/api.js";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: {},
    tempCondition: "",
    skyCondition: "cloudy",
    period: "day",
  });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleOpenAddClothingModal() {
    setActiveModal("add-clothing-modal");
  }
  function handleOpenItemModal(card) {
    setActiveModal("itemCard-modal");
    setSelectedCard(card);
  }
  function handleCloseModal() {
    setActiveModal("");
    // console.log(card);
  }
  function handleToggleSwitchChange() {
    setCurrentTempUnit("C");
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }
  function handleAddItemSubmit(inputValues, resetForm) {
    addNewItem({
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        setActiveModal("");
        resetForm();
      })
      .catch(console.error);
  }

  function handleOpenDeleteModal(card) {
    setActiveModal("delete-modal");
    setSelectedCard(card);
  }

  function handleDeleteItem(id) {
    deleteItem(id)
      .then(() => {
        setClothingItems((prev) => prev.filter((item) => item._id !== id));
        handleCloseModal();
      })
      .catch(console.error);
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTempUnitContext.Provider
      value={{ currentTempUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <Header
          handleOpenAddClothingModal={handleOpenAddClothingModal}
          weatherData={weatherData}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                clothingItems={clothingItems}
                handleOpenItemModal={handleOpenItemModal}
                weatherData={weatherData}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                handleOpenAddClothingModal={handleOpenAddClothingModal}
              />
            }
          ></Route>
        </Routes>

        <Footer />

        <ItemModal
          isOpen={activeModal === "itemCard-modal"}
          onClose={handleCloseModal}
          card={selectedCard}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
        <AddItemModal
          isOpen={activeModal === "add-clothing-modal"}
          onClose={handleCloseModal}
          title="New Garment"
          buttonText="Add garment"
          name="add-garment-form"
          handleAddItemSubmit={handleAddItemSubmit}
        />
        <DeleteModal
          isOpen={activeModal === "delete-modal"}
          card={selectedCard}
          onClose={handleCloseModal}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </CurrentTempUnitContext.Provider>
  );
}

export default App;
