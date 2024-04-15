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
import { cn } from '@/lib/utils';

interface WorkImageCardProps {
  className?: string | undefined;
  name: string;
  description?: string;
  image?: string;
  alt?: string;
}


export const WorkImageCard = ({ name, className, description, image, alt }: WorkImageCardProps) => {
  const overlayStyles = `bg-gray-50 
    flex min-w-36 md:min-w-60 relative
     md:min-h-60 z-[14] 
     hover:scale-110 transition
      duration-500 shadow-md hover:shadow-
      lg px-0 min-h-auto mt-5 sm:min-w-36 overflow-hidden`;

  return (
    <Card className={cn(overlayStyles, className)}>
      <div className='flex flex-col items-center justify-between whitespace-normal h-[32rem] md:h-[30rem]'>
        <CardHeader className='h-[50%] bg-zinc-300 bg-opacity-30 w-full'>
          <CardTitle className={'text-slate-700 py-20'}>{name}</CardTitle>
        </CardHeader>
        <CardContent className={'align-bottom w-full h-[50%]'}>
          <img alt={`${alt}`} src={image} className='w-full object-cover scale-125 h-full' />
        </CardContent>
      </div>
    </Card>
  )
}