import Comments from "@/components/Comments";
import Image from "next/image";

export default function SinglePage() {
  return (
    <div>
        <div className="flex max-w-[700px] flex-col mx-auto items-start">
            <div className="flex w-[100%] h-[45vh] relative lg:h-[75vh] z-">
                <Image src="/post_img.png" alt="Imagem de capa do post" fill className="object-contain"/>
            </div>

            <div className="mx-auto">
                <h1 className="my-5 text-2xl font-bold text-center md:text-4xl md:my-8">Titulo do post</h1>
            </div>

            <div className="flex items-center">
                <div className="w-10 h-10 relative md:w-12 md:h-12">
                    <Image src="/career.png" alt="Icone do criador do post" fill className="object-cover"/>
                </div>
                
               <div className="flex flex-col ml-5 md:ml-8">
                    <span className="text-sm md:text-lg">Angelo - <span className="text-green-400">Follow</span> </span>
                    <span className="text-sm md:text-lg">
                        Published in <span className="font-medium">Security</span> . 10 Set
                    </span>
               </div>
            </div>

            <div className="mt-14">
                <div>
                    <p className="text-base font-normal mb-5 md:text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, 
                        accusamus minima. Tempora itaque sequi, delectus amet saepe labore unde 
                        cumque ipsum repellat voluptatum deleniti quaerat recusandae aperiam eum 
                        exercitationem accusantium!
                    </p>
                    <p className="text-base font-normal mb-5 md:text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, 
                        accusamus minima. Tempora itaque sequi, delectus amet saepe labore unde 
                        cumque ipsum repellat voluptatum deleniti quaerat recusandae aperiam eum 
                        exercitationem accusantium!
                    </p>
                    <p className="text-base font-normal md:text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, 
                        accusamus minima. Tempora itaque sequi, delectus amet saepe labore unde 
                        cumque ipsum repellat voluptatum deleniti quaerat recusandae aperiam eum 
                        exercitationem accusantium!
                    </p>
                </div>
            </div>

            <div>
                <Comments />
            </div>
        </div>
    </div>
  );
};