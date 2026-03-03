import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenAddClothingModal,
  handleOpenItemModal,
}) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        onCardClick={handleOpenItemModal}
        clothingItems={clothingItems}
        handleOpenAddClothingModal={handleOpenAddClothingModal}
      />
    </div>
  );
}

export default Profile;
