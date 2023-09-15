'use client'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";



const MainMenu = () => {
    return (
        <Navbar
            isBlurred
            isBordered
        >
            <NavbarBrand>
                <img
                    src="https://ucarecdn.com/6f459a3f-f325-4d0d-b945-084c83cf257c/menu1.webp"
                />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/nosotros">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/servicios">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/portafolio">
                        Portafolio
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/tienda">Tienda</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Contacto
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default MainMenu;