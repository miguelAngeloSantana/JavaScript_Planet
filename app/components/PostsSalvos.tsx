import Image from "next/image";
import Link from "next/link";

export default function PostsSalvos() {
  return (
    <div>
        <Link href="/">
            <div className="mb-8 mt-5 flex-col md:flex md:flex-row items-center gap-12">
                <div className="flex flex-col flex-1 text-center md:text-left my-12 md:my-0 gap-4">
                    <div>
                        <span className="text-[--blogText] font-medium text-sm">Miguel Ângelo - </span>
                        <span className="text-[--blogText] font-medium text-sm">Mobile</span>
                    </div>

                    <h3 className="text-lg md:text-base font-bold">
                        Lorem ipsum dolor, sit amet
                    </h3>
                    <div 
                        className="flex items-center justify-around w-[100%]
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

        <Link href="/">
            <div className="mb-16 mt-5 flex-col md:flex md:flex-row items-center gap-12">
                <div className="flex flex-col flex-1 text-center md:text-left my-12 md:my-0 gap-4">
                    <div>
                        <span className="text-[--blogText] font-medium text-sm">Miguel Ângelo - </span>
                        <span className="text-[--blogText] font-medium text-sm">Front-End</span>
                    </div>

                    <h3 className="text-lg md:text-base font-bold">
                        Planejando e arquitentando um sistema
                    </h3>
                    <div 
                        className="flex items-center justify-around w-[100%]
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
    </div>
  );
};