import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext.js";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { addNewItem, getItems, deleteItem, likeItem } from "../../utils/api.js";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

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

  const [currentUser, setCurrentUser] = useState(null);
  const [jwt, setJwt] = useState(localStorage.getItem("jwt") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("jwt"));
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  function handleOpenAddClothingModal() {
    setActiveModal("add-clothing-modal");
  }
  function handleOpenItemModal(card) {
    setActiveModal("itemCard-modal");
    setSelectedCard(card);
  }
  function handleCloseModal() {
    setActiveModal("");
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
    const token = localStorage.getItem("jwt");
    addNewItem(
      {
        name: inputValues.name,
        imageUrl: inputValues.imageUrl,
        weather: inputValues.weather,
      },
      token,
    )
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        handleCloseModal();
        resetForm();
      })
      .catch(console.error);
  }

  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    const request = !isLiked
      ? likeItem(_id, token)
      : removeCardLike(_id, token);
    request
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === _id ? updatedCard.data : item)),
        );
      })
      .catch((err) => console.log("Like/Unlike failed:", err));
  };

  function handleOpenDeleteModal(card) {
    setActiveModal("delete-modal");
    setSelectedCard(card);
  }

  function handleDeleteItem(id) {
    const token = localStorage.getItem("jwt");
    deleteItem(id, token)
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
      .then((res) => {
        setClothingItems(res.data);
      })
      .catch(console.error);
  }, []);

  const handleUpdateUser = ({ name, avatar }) => {
    auth
      .editUser({ name, avatar }, jwt)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        console.error("Profile update failed:", err);
      });
  };

  useEffect(() => {
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("jwt");
          setJwt("");
          setCurrentUser(null);
          setIsLoggedIn(false);
        });
    }
  }, [jwt]);

  const handleRegister = ({ name, avatar, email, password }) => {
    auth
      .register({ name, avatar, email, password })
      .then((res) => {
        const userData = {
          email,
          password,
        };
        setIsRegisterOpen(false);
        handleLogin(userData);
      })
      .catch((err) => {
        console.error("Registration or login failed:", err);
      });
  };

  const handleLogin = ({ email, password }) => {
    auth
      .login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setJwt(data.token);
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        setIsLoginOpen(false);
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setJwt("");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const switchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const switchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="app">
          <Header
            handleOpenAddClothingModal={handleOpenAddClothingModal}
            weatherData={weatherData}
            onLoginClick={() => setIsLoginOpen(true)}
            onRegisterClick={() => setIsRegisterOpen(true)}
            onLogout={handleLogout}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  handleOpenItemModal={handleOpenItemModal}
                  onCardLike={handleCardLike}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    clothingItems={clothingItems}
                    handleOpenAddClothingModal={handleOpenAddClothingModal}
                    handleOpenItemModal={handleOpenItemModal}
                    onCardLike={handleCardLike}
                    onLogout={handleLogout}
                  />
                </ProtectedRoute>
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

          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onLogin={handleLogin}
            switchToRegister={switchToRegister}
          />

          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            onRegister={handleRegister}
            switchToLogin={switchToLogin}
          />

          <EditProfileModal
            isOpen={isEditProfileOpen}
            onClose={() => setIsEditProfileOpen(false)}
            onUpdateUser={handleUpdateUser}
          />
        </div>
      </CurrentTempUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
