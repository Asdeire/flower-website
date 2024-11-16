import React from "react";

const RelaxedSection = () => {
    return (
        <section className="relaxed-section">
            <div className="relaxed-section__content">
                <div className="relaxed-section__block">
                    <div className="relaxed-section__text">
                        <h2 className="relaxed-section__title">
                            Buy more plants, it helps you to be relaxed
                        </h2>
                        <p className="relaxed-section__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
                        </p>
                    </div>
                    <img
                            src="./assets/images/left-image.png"
                            alt="Plants on a table"
                            className="relaxed-section__image--left"
                        />
                </div>
                <div className="relaxed-section__images">
                    <img
                        src="./assets/images/right-image.png"
                        alt="Plants on shelves"
                        className="relaxed-section__image--right"
                    />
                </div>
            </div>
        </section>
    );
};

export default RelaxedSection;
