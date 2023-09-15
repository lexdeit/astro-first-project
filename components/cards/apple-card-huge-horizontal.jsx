'use client'
import {
    Card,
    CardFooter,
} from "@nextui-org/react"


const AppleCardHugeHorizontal = ({ media, header, description, url, subheader, background, color, reverse, invert }) => {

    const words = header.split(' ');

    return (
        <Card
            radius="lg"
            shadow="none"
            className={`w-full h-full xl:h-[40em] 
            ${color === "primary" ? "bg-black" : color === 'foreground' ? 'bg-gray-50' : color === 'blue' ? 'bg-blue-500' : 'bg-white'} overflow-hidden`
            }
        >

            <div
                className={`w-full h-full flex ${reverse ? 'xl:flex-row-reverse p-6 xl:py-12' : 'flex-wrap  xl:flex-nowrap'}  flex-wrap  xl:flex-nowrap justify-center items-center xl:gap-12 relative p-6 xl:px-20`}
            >

                <div
                    className="w-full xl:w-[50%] h-full flex flex-col justify-center "
                >
                    <h4 className="text-4xl xl:text-6xl font-semibold">
                        <span
                            className={`${reverse & color !== 'foreground' ? 'text-white' : color === 'foreground' ? 'text-gray-800' : "bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent"}`}
                        >
                            {words.slice(0, 2).join(' ')}
                        </span>
                        {' '}
                        <span
                            className={`${reverse & color !== 'foreground' ? "text-gray-200" : reverse & color === 'foreground' ? 'text-gray-400' : "text-white"}`}
                        >
                            {words.slice(2).join(' ')}
                        </span>
                    </h4>

                </div>

                <div
                    className={`w-full xl:w-[50%] h-full flex justify-center ${reverse ? 'pt-0' : 'pt-0'} overflow-hidden relative`}
                >

                    <img
                        className={`${reverse ? 'rounded-2xl' : ''} w-full h-full object-contain object-center ${invert ? 'invert' : ''}`}
                        src={media}
                    />

                </div>

            </div>

            {
                background &&
                <img
                    src={background}
                    removeWrapper
                    className="absolute w-full h-full object-cover z-[-0]"
                />
            }

            <CardFooter>
                <div
                    className={`absolute ${reverse ? "bottom-5 right-5" : "bottom-5 left-5"}  justify-start z-[1]`}
                >
                    <h6
                        className={`${reverse & color !== 'foreground' ? 'text-white' : 'text-gray-400'} font-medium text-base`}
                    >{subheader}</h6>

                </div>
            </CardFooter>


        </Card>
    )
}

export default AppleCardHugeHorizontal
