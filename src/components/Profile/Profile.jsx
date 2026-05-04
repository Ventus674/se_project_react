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
}) {
  return (
    <div className="profile">
      <Sidebar onEditProfile={onEditProfile} onLogout={onLogout} />
      <ClothesSection
        onCardClick={handleOpenItemModal}
        clothingItems={clothingItems}
        handleOpenAddClothingModal={handleOpenAddClothingModal}
        onCardLike={onCardLike}
      />
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={handleCloseModal}
        onUpdateUser={(data) => {
          onUpdateUser(data);
          handleCloseModal();
        }}
      />
    </div>
  );
}

export default Profile;
