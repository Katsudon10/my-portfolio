'use client';
import SkillTable from "@/components/elements/Table/SkillTable";
import React from "react";

type Skill = {
    name: string;
    level: number;
}

type Skills = {
    name: string;
    skills: Skill[];
}

const tech:Skills = {
    name: "Frontend",
    skills: [
        {name:"HTML", level: 2},
        {name:"CSS", level: 2},
        {name:"React", level: 3},
        {name:"Next.js", level: 3},
        {name:"Tailwind CSS", level: 2},
    ]
};

const Frontend = () => {
  return (
    <SkillTable name={tech.name} skills={tech.skills} />
  );
}

export default Frontend;