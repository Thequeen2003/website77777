import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
//import project2 from "AG/public/images/projects/nft-collection-website-cover-image.jpg";
//import project3 from "../../public/images/projects/fashion-studio-website.jpg";
import project4 from "../../public/images/projects/portfolio-cover-image.jpg";
import project5 from "../../public/images/projects/agency-website-cover-image.jpg";
import project6 from "../../public/images/projects/devdreaming.jpg";
import { motion } from "framer-motion";
//import project3 from " ../../public/images/projects/icons8-sql-50.png";
import project3 from "public/images/projects/sql-server.png";
import TransitionEffect from "@/components/TransitionEffect";
import project2 from "public/images/projects/screenshot.png";
//import project1 from "/Users/alantisgreen/Downloads/AG/src/pages/assets";
import project1 from "public/images/projects/BreastCancerAI.png";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Breast Cancer Prediction with Machine Learning"
                summary="A feature-rich Breast Cancer Screener App using Python,CSS, Machine Learning. The Breast Cancer Diagnosis app is a machine learning-powered tool designed to assist medical professionals in diagnosing breast cancer. Using a set of measurements, the app predicts whether a breast mass is benign or malignant."
                img={project1}
                link="https://thequeen2003-breast-cancer-appmain-pdin3v.streamlit.app/"
                github="https://github.com/Thequeen2003/breast-cancer"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Admin Website"
                title="Admin E-commerce Finanical Website"
                img={project2}
                link="https://financial-tracker-xd52.vercel.app/ecommerce"
                github="https://github.com/Thequeen2003/Financial-Tracker/tree/main/project_syncfusion_dashboard-main"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="CHAT GPT OPEN API INTERGATION"
                title="Generate SQL using Query Language with Chat Gpt" 
                img={project3}
                link="https://github.com/Thequeen2003/genereate-sql/tree/main/openai-sql-generator-main"
                github="https://github.com/Thequeen2003/genereate-sql/tree/main/openai-sql-generator-main"
              />
            </div>

            </div>
          
        </Layout>
      </main>
    </>
  );
};

export default projects;
