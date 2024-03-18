'use client'

import Heart from "@/components/heart"
import { CldImage } from "next-cloudinary"
import { setAsFavoriteAction } from "./actions"
import { startTransition, useTransition } from "react"
import { SearchResult } from "./page"
import Fullheart from "@/components/fullheart"

const CloudinaryImage = (props:any & {imageData:SearchResult; path:string}) => {
  const [transition, startTransition] = useTransition();
  const {imageData} = props;
  const isFavorited  = imageData.tags.includes('favorite');

  return (
   <div className="relative">
     <CldImage
             {...props}
             src={imageData.public_id} 
      />
      { 
      
        isFavorited ? 
        (<Fullheart onClick={()=>{
          startTransition(()=>{
            setAsFavoriteAction(imageData.public_id, false, props.path);
          })
        }} className="absolute top-2 right-2 hover:text-white  text-red-500 cursor-pointer"/>)
            : 
            (<Heart onClick={()=>{
              startTransition(()=>{
                setAsFavoriteAction(imageData.public_id, true,props.path);
              })
            }} className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"/>)
      }
      
   </div>
  )
}

export default CloudinaryImage