import Image from "next/image";
import React from "react";

const ImageGallery = () => {
  return (
    <div className="container text-center">
      <p className="text-label">THIS IS WHAT BEAUTY LOOKS LIKE</p>
      <h3 className="text-heading mt-2 underline text-5xl">#prosehair</h3>
      <Image
        src="/image/banner/5.jpg"
        alt="Kasomo"
        width={2880}
        height={1692}
        className="block w-full lg:h-[30vw] h-[50vh] mt-10"
      />
    </div>
  );
};

export default ImageGallery;
