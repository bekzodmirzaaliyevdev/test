import React, { useContext, useEffect, useState } from 'react';
import { useApp } from '../context/AppContext'
import { Link } from 'react-router-dom';

const ProductCards = ({ product }) => {
  const { cart, setCart } = useApp()

  const [isFavorite, setIsFavorite] = useState(false);
  const discountedPrice = (product?.price * (1 - product?.discountPercentage / 100)).toFixed(2);
  const averageRating = product?.reviews.reduce((sum, review) => sum + review?.rating, 0) / product?.reviews.length;
  const reviewCount = product?.reviews.length;

  useEffect(() => {
    console.log("Ruslan boq: ", cart)
  }, [cart])
  
  return (
    <Link to={`/product/${product.id}`} className="card flex-1 min-w-64 bg-base-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .card-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .card-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }
        
        .card-shimmer:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Image Section */}
      <figure className="relative bg-base-200 h-72 card-shimmer">
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 z-10 btn btn-circle btn-sm bg-base-100/90 border-0 hover:bg-base-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-error text-error' : 'fill-none text-base-content'}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Discount Badge */}
        {product?.discountPercentage > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <div className="badge badge-error gap-1 font-semibold">
              -{Math.round(product.discountPercentage)}%
            </div>
          </div>
        )}

        {/* Stock Badge */}
        {product?.stock < 20 && (
          <div className="absolute top-12 left-3 z-10">
            <div className="badge badge-warning badge-sm">
              Only {product.stock} left
            </div>
          </div>
        )}

        <img
          src={product?.thumbnail || product?.images[0]}
          alt={product?.title}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Content Section */}
      <div className="card-body p-4">
        {/* Brand */}
        <div className="text-xs text-primary font-semibold uppercase tracking-wide">
          {product?.brand}
        </div>

        {/* Title */}
        <h2 className="card-title text-base font-semibold leading-tight line-clamp-2 mb-1">
          {product?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-warning" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">{averageRating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-base-content/60">
            ({reviewCount?.toLocaleString()} reviews)
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-base-content">
              ${discountedPrice}
            </span>
            {product?.discountPercentage > 0 && (
              <span className="text-sm text-base-content/40 line-through">
                ${product?.price}
              </span>
            )}
          </div>

          {/* Monthly Payment */}
          <div className="flex items-center gap-1">
            <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded font-medium">
              ${(discountedPrice / 12).toFixed(2)}/month
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center gap-2 text-xs text-base-content/60 mb-4">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span>{product?.minimumOrderQuantity} min</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{product?.shippingInformation}</span>
          </div>
        </div>

        {/* Action Button */}
        <button onClick={() => setCart([...cart, product])} className="btn btn-primary w-full gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCards;