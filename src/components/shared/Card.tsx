import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
interface WorkImageCardProps {
  name: string;
  description?: string;
  image?: string;
  alt?: string;
}


export const ImageCard = ({ name, description, image, alt }: WorkImageCardProps) => {
  const overlayStyles = `bg-gray-50 
    flex min-w-36 md:min-w-60 relative
     md:min-h-60 z-10 md:hover:z-20 
     hover:scale-110 transition
      duration-500 shadow-md hover:shadow-
      lg  min-h-auto m-2 mt-5 sm:min-w-36 `;

  return (
    <Card className={overlayStyles}>
      <div className='flex flex-col items-center justify-between whitespace-normal h-[400px] md:h-[460px]'>
        <CardHeader >
          <CardTitle className={'text-slate-700'}>{name}</CardTitle>
          <div className='pt-4'>
            <CardDescription className={'font-medium text-slate-500'}>{description}</CardDescription>
        </div>
        </CardHeader>
        <CardContent className={'align-bottom'}>
          <img alt={`${alt}`} src={image} className='object-cover rounded-lg h-[105px] md:align-bottom md:h-32 w-52 md:w-72' />
        </CardContent>
      </div>
    </Card>
  )
}