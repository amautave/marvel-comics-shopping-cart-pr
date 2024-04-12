import Image from "next/image";
import { GarbageIcon } from "../icons/garbage";

export interface CartItemProps {}

export function CartItem() {
  return (
    <div className="w-full h-fit flex flex-row">
      <Image
        src={"http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg"}
        alt={"alt"}
        width={100}
        height={200}
      />
      <div className="flex flex-col p-8 w-2/3">
        <p className="text-black">Comic xmen</p>
        <span className="text-xs">Jim Nausedas | 2019</span>
        <span className="text-sm mt-3">$300</span>
      </div>
      <div className="flex justify-end items-center cursor-pointer">
        <GarbageIcon fillClassName="fill-black" />
      </div>
    </div>
  );
}
