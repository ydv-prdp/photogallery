

import { CldImage } from "next-cloudinary"
import UploadButton from "./upload-button"
import cloudinary from 'cloudinary'
import CloudinaryImage from "./cloudinary-image"

type SearchResult = {
    public_id:string
}
  
const Gallery = async() => {
  const results = await  cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(20)
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
            <div className="grid grid-cols-4 gap-4">
                {results.resources.map((result)=>(
                    <CloudinaryImage
                        key={result.public_id}
                        width={"400"}
                        height={"300"}
                        src={result.public_id}
                        sizes="100vw"
                        alt="Description of my image"
                  />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Gallery