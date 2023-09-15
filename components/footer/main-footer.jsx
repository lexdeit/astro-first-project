'use client'
import {
    Link,
    Button
} from "@nextui-org/react"
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai'

const MainFooter = () => {
    return (
        <footer
            className="w-screen min-h-[20em] h-full flex flex-col bg-gray-100 p-6 xl:px-80 xl:py-24 gap-12"
        >

            <div
                className="flex flex-wrap xl:flex-nowrap gap-12"
            >

                <div
                    className="flex flex-col gap-4 w-full xl:w-1/3"
                >
                    <img
                        src="https://ucarecdn.com/6f459a3f-f325-4d0d-b945-084c83cf257c/menu1.webp"
                        className="saturate-0 w-[150px]"
                    />
                    <p
                        className="text-gray-500 text-sm"
                    >Respuesta rápida y eficiente a las necesidades del mercado, proveyendo soluciones a la medida, para cubrir los requerimientos del cliente con profesionalismo en servicio y soporte.</p>
                </div>



                <div
                    className="flex flex-col gap-4 w-full xl:w-1/3"
                >

                    <h6
                        className="text-2xl font-medium"
                    >Menu</h6>

                    <Link
                        href="/"
                        showAnchorIcon
                    >Inicio</Link>

                    <Link
                        href="/"
                        showAnchorIcon
                    >Nosotros</Link>

                    <Link
                        href="/"
                        showAnchorIcon
                    >Servicio</Link>

                    <Link
                        href="/"
                        showAnchorIcon
                    >Portafolio</Link>

                    <Link
                        href="/"
                        showAnchorIcon
                    >Tienda</Link>

                    <Link
                        href="/"
                        showAnchorIcon
                    >Contacto</Link>

                </div>

                <div
                    className="flex flex-col gap-4 w-full xl:w-1/3"
                >
                    <h6
                        className="text-2xl font-medium"
                    >Contacto</h6>

                    <Link
                        href="/"
                        showAnchorIcon
                    >+52 (55) 5265 2400</Link>
                    <Link
                        href="/"
                        showAnchorIcon
                    >contacto@rvtel.com.mx</Link>

                    <div
                        className="flex gap-4"
                    >
                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><AiOutlineFacebook size={30} /></Button>

                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><AiOutlineTwitter size={30} /></Button>

                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><AiOutlineLinkedin size={30} /></Button>

                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><AiOutlineWhatsApp size={30} /></Button>

                    </div>

                    <p
                        className="text-gray-500"
                    >Lunes a Viernes de 9:00 hrs. a 19:00 hrs.</p>
                </div>

            </div>

            <div
                className="flex w-full h-auto"
            >
                <p
                    className="text-gray-500"
                >Copyright © 2023 RED VIRTUAL.</p>
            </div>

        </footer>
    )
}

export default MainFooter
