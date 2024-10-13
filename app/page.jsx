import Image from "next/image";
import { data } from "./data";

export default function Home() {

  return (
    <div className="">
      <h1 className='text-5xl text-center my-10'>Lio Gallery</h1>
      <div className="space-y-52">
        {data.map((datum, idx) => (
          <section key={idx} className="flex flex-wrap items-center justify-center gap-8">
            {datum.images.map((image, idx) => (
              <Image className="object-cover w-full md:max-w-[calc(50%-1rem)]" key={idx} src={image} alt={`lio gallery`} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0cfepBwADBgFYlcy+XgAAAABJRU5ErkJggg==" width={500} height={250} quality={100} loading="lazy" />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
