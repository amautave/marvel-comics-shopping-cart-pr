import Image from "next/image";
import Link from "next/link";

interface ComicCadProps {
  id: number;
  src: string;
  alt: string;
  name: string;
}

export function ComicCard({ id, src, alt, name }: ComicCadProps) {
  return (
    <Link href={`/comics/${id}/static`}>
      <div className="relative h-[310px] w-[200px]">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="absolute object-cover max-h-[310px] h-full"
        />
        <div className="absolute z-10 bg-black opacity-0 hover:opacity-90 h-full w-full">
          <span className="absolute text-white bottom-[40px] left-[15px] text-2xl">
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
}
