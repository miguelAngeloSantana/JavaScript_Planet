"use client"

import { useState } from "react";

import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { FaImage, FaUpload, FaCode } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"

export default function WritePage() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

  return (
    <div>
        <input type="text" placeholder="Title" className="p-14 text-[50px] border-none outline-none bg-transparent placeholder:text-[--text]"/>
        <div className="flex gap-5 h-[700px] relative">
            <button 
                onClick={() => setOpen(!open)} 
                className="w-9 h-9 rounded-[50%] bg-transparent border-black flex items-center justify-center"
            >
                <CiCirclePlus size={32} />
            </button>

            {open && (
                <div className="flex gap-5 absolute z-50 w-full left-12">
                    <button 
                        className="w-9 h-9 flex items-center justify-center" 
                        style={{ backgroundColor: "transparent", border: "1px solid black", borderRadius: "50%" }}
                    >
                        <FaImage size={18} />
                    </button>

                    <button 
                        className="w-9 h-9 flex items-center justify-center"
                        style={{ backgroundColor: "transparent", border: "1px solid black", borderRadius: "50%" }}
                        >
                        <MdOndemandVideo size={16} />
                    </button>

                    <button 
                        className="w-9 h-9 flex items-center justify-center"
                        style={{ backgroundColor: "transparent", border: "1px solid black", borderRadius: "50%" }}    
                    >
                        <FaCode size={16} />
                    </button>

                    <button 
                        className="w-9 h-9 flex items-center justify-center"
                        style={{ backgroundColor: "transparent", border: "1px solid black", borderRadius: "50%" }}    
                    >
                        <FaUpload size={16} />
                    </button>
                </div>
            )}

            <ReactQuill 
                theme="bubble" 
                value={value} 
                onChange={setValue} 
                placeholder="Write your history" 
                className="w-full mt-10"    
            />
        </div>
        <button className="absolute top-28 px-5 py-2 border-none bg-green-500 text-white cursor-pointer rounded-[20px] z-50
            lg:right-10 lg:top-9"
        >
            Publish
        </button>
    </div>
  );
};