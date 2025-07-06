import { AutoPlayCarousel } from "../molecules/auto-play-carousel";
import Image from "next/image";
import Slide1 from "@/public/images/home/slide-1.png";
import { v4 as uuid } from "uuid";

export default function HomeCarousel() {
  return (
    <AutoPlayCarousel
      elements={[
        <div className="text-4xl font-semibold" key={uuid()}>
          <Image src={Slide1} alt="Slide 1" objectFit="cover" />
        </div>,
        <div className="text-4xl font-semibold" key={uuid()}>
          <Image src={Slide1} alt="Slide 1" objectFit="cover" />
        </div>,
        <div className="text-4xl font-semibold" key={uuid()}>
          <Image src={Slide1} alt="Slide 1" objectFit="cover" />
        </div>,
        <div className="text-4xl font-semibold" key={uuid()}>
          <Image src={Slide1} alt="Slide 1" objectFit="cover" />
        </div>,
        <div className="text-4xl font-semibold" key={uuid()}>
          <Image src={Slide1} alt="Slide 1" objectFit="cover" />
        </div>,
      ]}
    />
  );
}
