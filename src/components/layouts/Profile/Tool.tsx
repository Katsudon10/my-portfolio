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
    name: "Tool",
    skills: [
        {name:"VSCode", level: 3},
        {name:"Notion", level: 3},
        {name:"Postman", level: 1},
        {name:"Github", level: 2},
        {name:"slack", level: 2},
        {name:"Miro", level: 2},
        {name:"Docker", level: 1},
    ]
};

const Tool = () => {
  return (
    <SkillTable name={tech.name} skills={tech.skills} />
  );
}

export default Tool;