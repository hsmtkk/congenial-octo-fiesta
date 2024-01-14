import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
    return (
        <Navbar position="static">
            <NavbarContent justify="center">
                <NavbarBrand>
                    <Link href="#">SNS Clone</Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        ログイン
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        サインアップ
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
