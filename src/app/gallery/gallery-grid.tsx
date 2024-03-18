"use client"

import UploadButton from "./upload-button"
import cloudinary from 'cloudinary'
import CloudinaryImage from "./cloudinary-image"
import ImageGrid from "@/components/image-grid"
import { SearchResult } from "./page"

const GalleryGrid = ({images}:{images:SearchResult[]}) => {
  return (
            <ImageGrid 
                images={images}
                getImage={(imageData:SearchResult)=>
                    (<CloudinaryImage
                            key={imageData.public_id}
                            imageData={imageData}
                            width="400"
                            height="300"
                            alt='an image of something'
                        />)
                }
            />
  )
}

export default GalleryGrid