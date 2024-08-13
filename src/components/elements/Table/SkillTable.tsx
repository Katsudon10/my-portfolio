import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/react";
import Rating from "../Rating/Rating";

type Skill = {
    name: string;
    level: number;
}

type Skills = {
    name: string;
    skills: Skill[];
}



const SkillTable = ({name,skills}:Skills) => {
    return (
        <div className="w-96">  
            <h2 className="text-center">{name}</h2>
            <Table aria-label="skill table" className="border">
                <TableHeader>
                    <TableColumn>Skill</TableColumn>
                    <TableColumn>Level</TableColumn>
                </TableHeader>
                <TableBody>
                    {skills.map((skill, index) => (
                        <TableRow key={index}>
                            <TableCell>{skill.name}</TableCell>
                            <TableCell>
                                <Rating rating={skill.level} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        
    )
}

export default SkillTable;