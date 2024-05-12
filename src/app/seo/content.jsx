'use client'
import { useEffect, useRef, useState } from 'react'
import { useText } from "@/hooks/useText";
import React from "react";
import { DefaultCard } from '../components/DefaultCard';




export const Content = () => {




    return (
        <>
       
        <section className="bg-white pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
               SEO
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
        <section id="first">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/408x308/?seo,google,programming"
            />
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/407x307/?seo,google,programming"
            />
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/406x306/?seo,google,programming"
            />
          </div>
        </section>
        <section id="second">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="Meet Jon"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/400x300/?javascript,css,html"
            />
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="The best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/401x301/?seo,google,programming"
            />
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="AutoManage"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/402x302/?seo,google,programming"
            />
          </div>
        </section>
        <section id="third">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="Meet Auto Manage"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/403x303/?seo,google,programming"
            />
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="The best tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/404x304/?seo,google,programming"
            />
            <DefaultCard
              date="Dec 22, 2023"
              CardTitle="Good B"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://source.unsplash.com/random/405x305/?seo,google,programming"
            />
          </div>
        </section>
         
        </div>
      </section>
    </>
    )
}