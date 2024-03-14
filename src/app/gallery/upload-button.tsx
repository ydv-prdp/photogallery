'use client'
import { Button } from "@/components/ui/button"
import { CldUploadButton } from "next-cloudinary"
import { useRouter } from "next/navigation"

type UploadResult = {
    info:{
      public_id:string
    },
    event:'success'
  }
  
const UploadButton = () => {
  const router = useRouter()
  return (
  
            <Button asChild>
                <CldUploadButton  uploadPreset="a08ua3yd"
                    onUpload={(result: UploadResult)=>{
                      router.refresh()
                }} />
            </Button>
        
  )
}

export default UploadButton