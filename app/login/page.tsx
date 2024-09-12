import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function page() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col items-center rounded-2x1 p-10
        md:items-start">
        <h1 className=" text-2xl font-bold mb-7">Login for start</h1>

        <h3 className="mb-5 text-base">Social media:</h3>
        <div className="flex flex-col gap-2 md:gap-6 w-full md:flex-row">
          <div className="flex items-center justify-center mb-7 gap-3 border-[1px] border-gray-600
          space-x-4 w-full py-4 md:px-9 md:py-4 rounded-full cursor-pointer text-sm"
          >
            <FcGoogle size={24}/>
            Sign in with Google
          </div>

          <div className="flex items-center justify-center mb-7 border-[1px] border-gray-600 space-x-4 
            w-full py-4 md:px-9 md:py-4 rounded-full cursor-pointer text-sm"
          >
            <FaGithub size={24}/>
            <span>Sign in with GitHub</span>
          </div>
        </div>

        <h3 className="mt-6 mb-2 text-left text-base">Or login with our acount:</h3>

        <form action="/" method="POST" className="flex flex-col my-3 gap-6 w-full">
          <div className="w-full">
            <div className="flex flex-col">
              <label className="flex">
                <p className="font-medium">Enter with E-mail:</p>
              </label>
              <div className="flex items-center justify-between border p-4 rounded-lg">
                  <input 
                    type="email" 
                    placeholder="teste@gmail.com" 
                    maxLength={50} 
                    name="emailUser"
                    className="w-full outline-0 border-0 bg-transparent"  
                  />
                </div>
            </div>
          </div>  

          <div className="w-full">
            <div className="flex flex-col w-full">
              <label className="flex">
                <p className="font-medium">Enter with PassWord:</p>
              </label>
              <div className="flex items-center justify-between border p-4 rounded-lg">
                  <input 
                    type="password" 
                    name="passwordUser"
                    className="w-full outline-0 border-0 bg-transparen"  
                  />
                </div>
            </div>
          </div>  

          <Link href="/" className="text-red-600 font-bold">Forget your passwaord?</Link>
          <button 
            className="flex items-center justify-center border rounded-lg px-5 py-4 max-h-12 bg-black text-white"
          >
              Enter
          </button>
        </form>
      </div>
    </div>
  );
};
