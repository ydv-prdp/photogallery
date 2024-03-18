'use client'
import ForceRefresh from "@/components/force-refresh";
import CloudinaryImage from "../gallery/cloudinary-image"
import { SearchResult } from '../gallery/page';
import { useEffect, useState } from 'react';
import ImageGrid from "@/components/image-grid";

  
const FavoritesList = ({initialResources}:{initialResources:SearchResult[] }) => {
    const [resources, setResources] = useState(initialResources);
    useEffect(()=>{
      setResources(initialResources)
    },[initialResources])
  return (
    <section>
             <ImageGrid 
                images={resources}
                getImage={(imageData:SearchResult)=>(
                  <CloudinaryImage
                  key={imageData.public_id}
                  imageData={imageData}
                  width={"400"}
                  height={"300"}
                  alt="Description of my image"
                  onUnheart={(unheartedResource)=>{
                    setResources(currentResources=>{
                      return currentResources.filter(resource=>{
                        return resource.public_id !== unheartedResource.public_id
                      })
                    })
                  }}
                />
            )}
            />
           
    </section>
  )
}

export default FavoritesList 