import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenAddClothingModal,
  handleOpenItemModal,
  onCardLike,
  onLogout,
}) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditProfileOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditProfileOpen(false);
  };
  return (
    <div className="profile">
      <Sidebar onEditProfile={handleEditClick} onLogout={onLogout} />
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
