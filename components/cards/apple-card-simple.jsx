import {
    Card,
    CardBody,
    Image
} from "@nextui-org/react"

const AppleCardSimple = ({ header, subheader, media }) => {
    return (
        <Card
            shadow="none"
            radius="lg"
            className="w-full h-[20em] bg-black overflow-hidden"
        >
            {
                media ?

                    <CardBody>
                        <div
                            className="w-full h-full flex flex-col items-center gap-6 overflow-hidden"
                        >
                            <h6
                                className="text-gray-200 font-medium text-xl"
                            >{subheader}</h6>

                            <div
                                className="flex w-full h-full relative justify-center"
                            >

                                <Image
                                    removeWrapper
                                    src={media}
                                    className="object-contain object-center w-full h-full"
                                />

                            </div>

                        </div>
                    </CardBody>
                    :
                    <CardBody>
                        <div
                            className="w-full h-full flex flex-col justify-center items-center gap-6"
                        >
                            <h4
                                className="text-gray-100 font-semibold text-3xl text-center"
                            >{header}</h4>

                            <h6
                                className="text-gray-400 font-medium text-xl"
                            >{subheader}</h6>
                        </div>
                    </CardBody>


            }

        </Card>
    )
}

export default AppleCardSimple
