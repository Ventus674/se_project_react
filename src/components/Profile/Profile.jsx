import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenAddClothingModal,
  handleOpenItemModal,
  onCardLike,
}) {
  return (
    <div className="profile">
      <Sidebar />
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
