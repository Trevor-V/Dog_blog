import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className="text-center pt-20 mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-10">
        <div className="absolute left-0 right-0 -top-14">
            <Image
                alt={author.name}
                unoptimized
                height="150px"
                width="150px"
                className="align-middle rounded-full"
                src={author.photo.url}
            />
        </div>
        <h3 className=" text-white my-4 text-2xl font-bold pt-4">{author.name}</h3>
        <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author