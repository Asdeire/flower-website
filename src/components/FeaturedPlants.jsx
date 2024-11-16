import React, { useState } from "react";

const FeaturedPlants = () => {
    const [sortOption, setSortOption] = useState("Cheaper First");
    const [plants, setPlants] = useState([
        { id: 1, name: "Kaktus Plants", price: 85000, image: "plant1.png" },
        { id: 2, name: "Landak Plants", price: 105000, image: "plant2.png" },
        { id: 3, name: "Kecubung Plants", price: 80000, image: "plant3.png" },
        { id: 4, name: "Kecubung Plants", price: 87000, image: "plant4.png" },
        { id: 5, name: "Kecubung Plants", price: 50000, image: "plant5.png" },
    ]);

    const sortPlants = (option) => {
        let sortedPlants = [...plants];
        switch (option) {
            case "Cheaper First":
                sortedPlants.sort((a, b) => a.price - b.price);
                break;
            case "Expensive First":
                sortedPlants.sort((a, b) => b.price - a.price);
                break;
            case "A-Z":
                sortedPlants.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedPlants.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }
        setPlants(sortedPlants);
    };

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
        sortPlants(selectedOption);
    };

    return (
        <section className="featured-plants">
            <div className="featured-plants__header">
                <h2 className="featured-plants__title">Featured Plants</h2>
                <select
                    className="featured-plants__select"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="Cheaper First">Cheaper First</option>
                    <option value="Expensive First">Expensive First</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div className="featured-plants__list">
                {plants.map((plant) => (
                    <div key={plant.id} className="featured-plants__card">
                        <img
                            src={`./assets/images/${plant.image}`}
                            alt={plant.name}
                            className="featured-plants__image"
                        />
                        <h3 className="featured-plants__name">{plant.name}</h3>
                        <p className="featured-plants__price">IDR {plant.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedPlants;
