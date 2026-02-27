import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, handleOpenAddClothingModal }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your Items</h2>
        <button
          className="clothes-section__add-btn"
          onClick={handleOpenAddClothingModal}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__itemcard-list">
        {clothingItems.map((item) => {
          return <ItemCard key={item._id} data={item} />;
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
