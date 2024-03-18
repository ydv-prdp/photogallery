'use client'
import ForceRefresh from "@/components/force-refresh";
import CloudinaryImage from "../gallery/cloudinary-image"
import { SearchResult } from '../gallery/page';
import { useEffect, useState } from 'react';

  
const FavoritesList = ({initialResources}:{initialResources:SearchResult[] }) => {
    const [resources, setResources] = useState(initialResources);
    useEffect(()=>{
      setResources(initialResources)
    },[initialResources])
  return (
    <section>
            <ForceRefresh/>
            <div className="grid grid-cols-4 gap-4">
                {resources.map((result)=>(
                    <CloudinaryImage
                        key={result.public_id}
                        imageData={result}
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
                ))}
            </div>
    </section>
  )
}

export default FavoritesList 