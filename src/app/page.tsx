'use client'
import Image from "next/image";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info:{
    public_id:string
  },
  event:'success'
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello welcome to home
      
    </main>
  );
}
