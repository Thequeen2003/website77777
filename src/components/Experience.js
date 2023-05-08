import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Academic Technology Constulant"
              company="Wake Forest University"
              companyLink="https://google.com"
              time="2022-Present"
              address="Winston-Salem, NC"
              work="As a Technology Consultant at Wake Forest University, 
              I provide expert guidance to students through one-on-one consultations
               and adapt to different technological environments to effectively 
               resolve technical issues. I assist students in utilizing software
                such as Adobe Creative Cloud and Audacity for creative projects
                 using my proficiency in various software applications and 
                 troubleshooting skills.As a Technology Consultant at Wake Forest 
                 University, I provide expert guidance to students through one-on-one
                  consultations and adapt to different technological environments 
                  to effectively resolve technical issues. I assist students in 
                  utilizing software such as Adobe Creative Cloud and Audacity 
                  for creative projects using my proficiency in various software 
                  applications and troubleshooting skills. "
                  />

            <Details
              position="Executive Assistant"
              company="Black Mental Health Matter"
              companyLink="https://bmhm.org/"
              time="2021-2023 "
              address="Houston,TX"
             work="Collaborated closely with the CEO to ensure that the organization's
              mission was fulfilled on a weekly basis. I Leveraged my computer science skills
               to enhance the organization's website with the backend and frontend with Rest API.
                Played a pivotal role in increasing the organization's social media presence 
                to further its cause of promoting mental health in the Black community. 
                Assisted with technical issues as they arose, 
                ensuring that the organization's digital operations ran smoothly. "
              />
             
            

            <Details
              position="Student Immersion Program "
              company="Girls Who Code"
              companyLink="https://girlswhocode.com/?gclid=Cj0KCQjwla-hBhD7ARIsAM9tQKu55PBLVvPi61aJ3zc1tQRk-eG1Y1wMB5ZdYSSexaGCrNJ981pNq2kaAuCIEALw_wcB"
              time="Summer 2021"
              address="Houston,TX."
              work="As a rising senior, I had the opportunity to participate
               in the Summer Immersion Program, a virtual program led by industry-leading 
               companies such as MetLife, Bank of America, and Accenture. 
               Through live interactive classes, I was introduced to game design 
               and gained knowledge in intermediate computer science concepts, 
               the iterative design process, and UX design basics. 
               This program gave me a glimpse into the tech industry
                and inspired me to pursue a career in STEM.

              After completing the Summer Immersion Program,
               I further explored my interest in computer science
                through the Girl Who Code self-paced program. This program allowed me
                 to delve deeper into web development using HTML, CSS, and JavaScript, 
                 as well as cybersecurity and data science applications with Python. 
                 Through weekly live advisory sessions and activities, I had the opportunity
                  to build a community and connect with other high school students
                   who shared my passion for technology."
            />
            

            <Details
            position="Student Of Rice University Ethics and Society Program"
              company="Rice University"
              companyLink="https://www.rice.edu/"
              time="Summer 2021"
              address="Houston,TX."
                  work=" throughout this three weeks program, I engaged in daily discussions 
              with my peers on a wide range of ethical issues from Ai, Self-driving cars
               to social and moral dilemmas. The rice philospophers were expertise
                in their fields and was always willing to listen to our opinions.
                 I was always amazed by their insight and ability to encourage 
                 passionate discussion and debate. 
              One of my favorite parts of the program was the interactive workshops
               and activities that we participated in. These helped me develop my critical
                thinking, problem-solving, and communication skills and gave me the 
                opportunity to work collaboratively with my peers. "
            />

            
        </ul>
      </div>
    </div>
  );
};

export default Experience;
