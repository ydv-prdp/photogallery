'use client'
import { Button } from "@/components/ui/button"
import { CldUploadButton } from "next-cloudinary"

type UploadResult = {
    info:{
      public_id:string
    },
    event:'success'
  }
  
const Gallery = () => {
  return (
    <section>
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold">
                Gallery
            </h1>
            <Button asChild>
                <CldUploadButton  uploadPreset="a08ua3yd"
                    onUpload={(result: UploadResult)=>{
                    
                }} />
            </Button>
        </div>
    </section>
  )
}

export default Gallery