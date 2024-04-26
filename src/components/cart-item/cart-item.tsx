import Image from "next/image";
import { GarbageIcon } from "../icons/garbage";

export interface CartItemProps {
  id: number;
  src: string;
  title: string;
  author: string;
  year: string;
  price: string;
  onDelete: (comicId: number) => void;
}

export function CartItem({
  src,
  title,
  author,
  year,
  price,
  id,
  onDelete,
}: CartItemProps) {
  return (
    <div className="w-full h-fit flex flex-row text-black">
      <Image
        className="max-h-[200px]"
        src={src}
        alt={"alt"}
        width={100}
        height={200}
      />
      <div className="flex flex-col p-8 w-2/3">
        <p className="text-black">{title}</p>
        <span className="text-xs">
          {author} | {year}
        </span>
        <span className="text-sm mt-3">${price}</span>
      </div>
      <div
        className="flex justify-end items-center cursor-pointer"
        onClick={() => onDelete(id)}
      >
        <GarbageIcon fillClassName="fill-black" />
      </div>
    </div>
  );
}
