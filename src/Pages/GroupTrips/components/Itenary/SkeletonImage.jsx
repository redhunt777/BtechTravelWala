import React from 'react';
import style from './SkeletonImage.module.css'; // Add your styles

const SkeletonImage = ({ images }) => {
  return (
    <div className={style.skeletonContainer}>
      <div className={style.leftColumn}>
        <div className={style.skeletonGroup}>
          {images && images.length > 0 ? (
            images.slice(0, 3).map((src, index) => (
              <img key={index} src={src} alt={`Image ${index + 1}`} className={style.loadedImage} />
            ))
          ) : (
            <div className={style.skeleton} />
          )}
        </div>
      </div>
      <div className={style.rightColumn}>
        {images && images.length > 3 && images.slice(3).map((src, index) => (
          <img key={index + 3} src={src} alt={`Extra Image ${index + 4}`} className={style.loadedImage} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonImage;
