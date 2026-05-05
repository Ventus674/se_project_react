import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import handleEditClick from "../App/App";
import handleCloseModal from "../App/App";
import isEditProfileOpen from "../App/App";

function Profile({
  clothingItems,
  handleOpenAddClothingModal,
  handleOpenItemModal,
  onCardLike,
  onLogout,
  onEditProfile,
  handleCloseModal,
  isEditProfileOpen,
  handleEditProfileOpen,
}) {
  return (
    <div className="profile">
      <Sidebar onEditProfile={handleEditProfileOpen} onLogout={onLogout} />
      <ClothesSection
        onCardClick={handleOpenItemModal}
        clothingItems={clothingItems}
        handleOpenAddClothingModal={handleOpenAddClothingModal}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
