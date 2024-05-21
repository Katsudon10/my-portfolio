"use client";
import React,{ useState } from "react";

import {
    Navbar,
    NavbarMenuToggle, 
    NavbarMenu, 
    NavbarMenuItem, 
    NavbarContent, 
    NavbarItem, 
    Link
} from "@nextui-org/react";

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiWantedly } from "react-icons/si";

import Links from "./Links";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {name:"Home", path: "/"},
        {name:"Profile", path: "/profile"},
        {name:"Works", path : "/works"},
        {name:"Contact", path: "/contact"}
    ];

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent justify="start" className="sm:hidden">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            

            <NavbarContent className="hidden sm:flex gap-5">
                <NavbarItem>
                    <Link href="/" color="foreground">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/profile" color="foreground">
                        Profile
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/works" color="foreground">
                        Works
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" color="foreground">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Links />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="flex">
                <NavbarItem>
                    <Link href="https://github.com/Katsudon10" color="foreground" isExternal>
                        <SiGithub size={20} color="foreground"/>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="https://www.linkedin.com/in/kaitoinoue/" color="foreground" isExternal>
                        <SiLinkedin size={20} color="foreground"/>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="https://www.wantedly.com/id/Kaito_Inoue10" color="foreground" isExternal>
                        <SiWantedly size={20} color="foreground"/>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link color="foreground" href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Links />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}

export default Header;