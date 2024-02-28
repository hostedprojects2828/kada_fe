import React, { useRef ,useState} from "react";
import img1 from "../../../assets/img/offer/woman_.png";
import img2 from "../../../assets/img/offer/woman1.png";
import img3 from "../../../assets/img/offer/bag_.png";
import img4 from "../../../assets/img/offer/woman4.png";
import img5 from "../../../assets/img/offer/kids.png";
const TypesOfProduct = () => {
  const products = [
    { id: 1, name: "Oils", image: img1 },
    { id: 2, name: "Ointments", image: img3 },
    { id: 3, name: "Face Wash", image: img1 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
    { id: 4, name: "Powders", image: img3 },
  ];

  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div 
      ref={sliderRef} 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove} 
      className="type-of-product_custom-slider">
        {products.map((slide, index) => (
          <div key={index} className="type-of-product_main_slide">
            <div className="type-of-product_slide">
              <div className="type-of-product_slide-round_image">
                <img src={slide.image} alt={slide.name} />
              </div>
              <h4>{slide.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TypesOfProduct;
