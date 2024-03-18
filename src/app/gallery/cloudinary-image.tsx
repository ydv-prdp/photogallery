'use client'

import Heart from "@/components/heart"
import { CldImage, CldImageProps } from "next-cloudinary"
import { setAsFavoriteAction } from "./actions"
import { startTransition, useState, useTransition } from "react"
import { SearchResult } from "./page"
import Fullheart from "@/components/fullheart"

const CloudinaryImage = (props: {imageData:SearchResult; onUnheart?: (unheartedResource:SearchResult)=>void; [key:string]:any}
  & Omit<CldImageProps, "src">
) => {
  const [transition, startTransition] = useTransition();
  const {imageData, onUnheart} = props;
  const [isFavorited, setIsFavorited] = useState(imageData.tags.includes('favorite'))

  return (
   <div className="relative">
     <CldImage
             {...props}
             src={imageData.public_id} 
      />
      { 
      
        isFavorited ? 
        (<Fullheart onClick={()=>{
          onUnheart?.(imageData)
          setIsFavorited(false)
          startTransition(()=>{
            setAsFavoriteAction(imageData.public_id, false);
          })
        }} className="absolute top-2 right-2 hover:text-white  text-red-500 cursor-pointer"/>)
            : 
            (<Heart onClick={()=>{
              setIsFavorited(true)
              startTransition(()=>{
                setAsFavoriteAction(imageData.public_id, true);
              })
            }} className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"/>)
      }
      
   </div>
  )
}

export default CloudinaryImage