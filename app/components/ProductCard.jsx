import "../../styles/productcard.css"
import Link from "next/link";

const ProductCard = ({ title, description, image, buttonText, isImageFirst, newproduct, productLink}) => {
    
  return (
    <div className={`product-card ${isImageFirst ? "" : "reverse"}`}>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <p className="newspaper">{newproduct}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`${productLink}`}>
          <button>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;