import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiWantedly } from "react-icons/si";
import { SiQiita } from "react-icons/si";
import { SiZenn } from "react-icons/si";
import { SiX } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";

import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

const Links = () => {
    const links = [
        {name:"GitHub", path: "https://github.com/Katsudon10", icon: <SiGithub size={20} color="foreground"/>},
        {name:"LinkedIn", path: "https://www.linkedin.com/in/kaitoinoue/", icon: <SiLinkedin size={20} color="foreground"/>},
        {name:"Wantedly", path: "https://www.wantedly.com/id/Kaito_Inoue10", icon: <SiWantedly size={20} color="foreground"/>},
        {name:"Qiita", path: "https://qiita.com/katsudon_qiita", icon: <SiQiita size={20} color="foreground"/>},
        {name:"Zenn", path: "https://zenn.dev/katsudon_zenn", icon: <SiZenn size={20} color="foreground"/>},
        {name:"X", path: "https://twitter.com/katsudon_pro", icon: <SiX size={20} color="foreground"/>},
        {name:"AtCoder", path: "https://atcoder.jp/users/katsudon_"},
    ];
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button disableRipple color="default" endContent={<FaChevronDown />}>
                    Links
                </Button>
            </DropdownTrigger>
            <DropdownMenu>
                {links.map((link, index) => (
                    <DropdownItem key={index} startContent={link.icon}>
                        <Link href={link.path} color="foreground" isExternal>
                            {link.name}
                        </Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default Links;