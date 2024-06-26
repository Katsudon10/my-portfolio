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
    name: "Backend",
    skills: [
        {name:"Python", level: 3},
        {name:"FastAPI", level: 3},
        {name:"MySQL", level: 2},
    ]
};

const Backend = () => {
  return (
    <SkillTable name={tech.name} skills={tech.skills} />
  );
}

export default Backend;