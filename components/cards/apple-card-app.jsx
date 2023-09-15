'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Link,
} from "@nextui-org/react"


const AppleCardApp = ({ media, header, description, url, subheader, background, opaque }) => {
    return (
        <Card
            radius="lg"
            shadow="none"
            className="w-full h-[40em]"
        >

            <img
                src={background}
                removeWrapper
                className="absolute w-full h-full object-cover z-[0]"
            />

            <div
                className={`w-full h-full flex flex-col z-[1] ${opaque ? 'bg-gradient-to-t from-black/20 via-transparent to-black/40' : ''}`}
            >

                <CardHeader>
                    <div
                        className="flex flex-col gap-6 z-[1]"
                    >
                        <div
                            className="flex items-center"
                        >
                            <img
                                src={media}
                                removeWrapper
                            />
                            <h4
                                className="text-white text-3xl font-medium"
                            >{header}</h4>
                        </div>

                        <p
                            className="text-white text-base"
                        >{description}</p>

                        <div
                            className="w-auto h-auto flex justify-start"
                        >
                            <Button
                                as={Link}
                                href={url}
                                radius="full"
                                size="sm"
                                className="bg-white text-gray-800"
                            >Saber mas</Button>
                        </div>
                    </div>
                </CardHeader>



                <CardFooter>
                    <div
                        className="absolute bottom-5 left-5 justify-start z-[1]"
                    >
                        <h6
                            className="text-white font-medium text-base"
                        >{subheader}</h6>

                    </div>
                </CardFooter>
            </div>

        </Card>
    )
}

export default AppleCardApp
