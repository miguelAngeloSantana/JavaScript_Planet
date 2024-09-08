import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <Link href="/">
        <div className="mb-16 flex-col md:flex md:flex-row items-center gap-12">
            <div className="md:w-56 md:h-48 w-[100%] h-52 mx-auto relative">
                <Image src="/post_img.png" alt="Icone do post" fill className="object-contain md:object-cover"/>
            </div>
            <div className="flex flex-col flex-1 text-center md:text-left my-12 md:my-0 gap-4">
                <div>
                    <span className="text-[--blogText] font-medium text-sm">Miguel Ângelo - </span>
                    <span className="text-[--blogText] font-medium text-sm">Front-End</span>
                </div>

                <h1 className="text-lg md:text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                <p className="text-sm md:text-base text-[--text]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore 
                    eaque amet cumque ipsam cum.
                </p>

                <div 
                    className="flex items-center justify-around w-[100%] mt-2 
                        lg:justify-between lg:w-[80%] md:justify-between"
                >
                    <span className="text-[--blogText] text-sm">09 Set</span>

                    <Image 
                        src="/nodejs.svg"
                        alt="node icon"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    </Link>
  );
};