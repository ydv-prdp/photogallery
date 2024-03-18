

import UploadButton from "./upload-button"
import cloudinary from 'cloudinary'
import CloudinaryImage from "./cloudinary-image"
import ImageGrid from "@/components/image-grid"
import GalleryGrid from "./gallery-grid"

export type SearchResult = {
    public_id:string,
    tags:string[]
}
  
const Gallery = async() => {
  const results = await  cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute() as {resources:SearchResult[]};


  return (
    <section>
        <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">
                    Gallery
                </h1>
                <UploadButton/>
            </div>
            <GalleryGrid
                images={results.resources}
            />
        </div>
    </section>
  )
}

export default Gallery