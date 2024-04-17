import Image from "next/image";
import { useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

export function Loader() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    <Image
      src="/sprites/thor.png"
      alt="thor-sprite"
      height={100}
      width={100}
    />,
    <Image
      src="/sprites/hulk.png"
      alt="hulk-sprite"
      height={100}
      width={100}
    />,
  ];

  function changeInRangeImageIndex() {
    let index;
    if (imageIndex + 1 < images.length) {
      index = imageIndex + 1;
    } else {
      index = 0;
    }
    setImageIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(() => changeInRangeImageIndex(), 500);

    return () => clearInterval(interval);
  }, []);

  return images[imageIndex];
}
