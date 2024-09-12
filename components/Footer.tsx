import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-2 md:mt-11 pt-2 pb-7 border-t-2 flex-col items-center justify-between md:flex md:flex-row">
      <div className="flex-col flex-[2] gap-3 mb-7 text-center md:text-left md:mb-0">
        <h1 className='text-center font-bold text-xl mb-5 lg:text-lg md:text-left md:text-2xl'>
          JavaScript Planet
        </h1>

        <span className="text-xs sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Voluptates vero obcaecati doloribus autem repellat qui laboriosam 
          ad ut aut aliquid quas ipsam, sequi iste soluta.
        </span>
      </div>

      <div className="flex flex-1 justify-center gap-5 mt-9 lg:justify-end lg:mt-0">
        <Image src="/facebook.svg" alt="facebook icon" width={26} height={26} />
        <Image src="/instagram.svg" alt="Instagran icon" width={26} height={26} />
        <Image src="/x.svg" alt="x/twitter icon" width={26} height={26} />
        <Image src="/tiktok.svg" alt="tiktiok icon" width={26} height={26} />
      </div>
    </div>
  );
};