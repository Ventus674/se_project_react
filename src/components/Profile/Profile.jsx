import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, handleOpenAddClothingModal }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        clothingItems={clothingItems}
        handleOpenAddClothingModal={handleOpenAddClothingModal}
      />
    </div>
  );
}

export default Profile;
