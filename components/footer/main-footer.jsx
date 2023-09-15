'use client'
import {
    Link,
    Button
} from "@nextui-org/react"

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
                        ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg></Button>

                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg></Button>

                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg></Button>

                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            className="bg-transparent"
                        ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg></Button>

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
