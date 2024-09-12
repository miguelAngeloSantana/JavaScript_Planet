import Image from "next/image";
import Link from "next/link";

export default function Comments() {

    const status = "authenticated";

  return (
    <div className="mt-14">
        <h1 className="mb-8">Comentarios</h1>

        { status === "authenticated" ? (
            <div className="flex items-center justify-between gap-8">
                <textarea placeholder="Write something..." className="w-full p-3"/>
                <button className="px-4 py-5 bg-black text-white font-bold border-none rounded-md">
                    Send
                </button>
            </div>
        ) :(
            <Link href="/login">Login for write a coment</Link>            
        )}

        <div className="mt-10">
            <div className="mb-12">
                <div className="flex items-center gap-5 mb-5">
                    <Image 
                        src="/career.png" 
                        alt="Foto de perfil do usuario" 
                        width={45} 
                        height={45}
                        className="rounded-[50%]"
                    />

                    <div className="flex flex-col">
                        <span className="font-medium">Jhon Jhon</span>
                        <span className="text-sm">08 Set</span>
                    </div>
                </div>

                <p className="text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis sint, 
                    atque excepturi, deserunt provident mollitia aspernatur ratione modi possimus dignissimos
                     ipsam at officia, dolore delectus inventore expedita saepe neque!
                </p>
            </div>
        </div>

        <div className="mt-10">
            <div className="mb-12">
                <div className="flex items-center gap-5 mb-5">
                    <Image 
                        src="/career.png" 
                        alt="Foto de perfil do usuario" 
                        width={45} 
                        height={45}
                        className="rounded-[50%]"
                    />

                    <div className="flex flex-col">
                        <span className="font-medium">Jhon Jhon</span>
                        <span className="text-sm">08 Set</span>
                    </div>
                </div>

                <p className="text-base md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis sint, 
                    atque excepturi, deserunt provident mollitia aspernatur ratione modi possimus dignissimos
                     ipsam at officia, dolore delectus inventore expedita saepe neque!
                </p>
            </div>
        </div>

        <div className="mt-10">
            <div className="mb-12">
                <div className="flex items-center gap-5 mb-5">
                    <Image 
                        src="/career.png" 
                        alt="Foto de perfil do usuario" 
                        width={45} 
                        height={45}
                        className="rounded-[50%]"
                    />

                    <div className="flex flex-col">
                        <span className="font-medium">Jhon Jhon</span>
                        <span className="text-sm">08 Set</span>
                    </div>
                </div>

                <p className="text-base md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis sint, 
                    atque excepturi, deserunt provident mollitia aspernatur ratione modi possimus dignissimos
                     ipsam at officia, dolore delectus inventore expedita saepe neque!
                </p>
            </div>
        </div>
    </div>
  );
};