'use client'
import {
    Card,
    CardFooter,
} from "@nextui-org/react"



const AppleCardSquare = ({ media, header, subheader }) => {
    return (
        <Card
            radius="lg"
            shadow="none"
            className="w-full min-h-[40em]"
        >
            <img
                src={media}
                removeWrapper
                className="absolute w-full h-full z-[0]"
            />

            <div
                className="w-full h-full flex bg-gradient-to-t from-black via-black/20 to-transparent z-[1]"
            >
                <CardFooter>
                    <div
                        className="w-full h-full flex flex-col justify-end gap-2  p-4"
                    >

                        <h4
                            className="text-gray-200 font-medium"
                        >{subheader}</h4>

                        <h2
                            className="text-white font-semibold text-4xl"
                        >{header}</h2>

                    </div>
                </CardFooter>
            </div>

        </Card>
    )
}

export default AppleCardSquare
