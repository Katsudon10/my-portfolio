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
    name: "Infrastructure",
    skills: [
        {name:"Versel", level: 1},
        {name:"Heroku", level: 1},
        {name:"AWS", level: 0},
    ]
};

const Infrastructure = () => {
  return (
    <SkillTable name={tech.name} skills={tech.skills} />
  );
}

export default Infrastructure;