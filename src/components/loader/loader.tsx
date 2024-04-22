import Image from "next/image";
import { useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

const images = [
  {
    src: "/sprites/thor.png",
    alt: "thor-space",
  },
  {
    src: "/sprites/hulk.png",
    alt: "hulk-sprite",
  },
];
export function Loader() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex((imageIndex + 1) % 2),
      500,
    );

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <Image
      src={images[imageIndex].src}
      alt={images[imageIndex].alt}
      height={100}
      width={100}
    />
  );
}
