'use client'
import {
    Card,
    CardHeader,
    CardFooter,
    Input,
    Textarea,
    Button,
} from '@nextui-org/react'
import { useState } from 'react'
import axios from 'axios'

const FormAppleCard = () => {


    const [form, setForm] = useState({
        name: '',
        emailAddress: '',
        phoneNumber: '',
        message: '',
    })

    const handleOnChange = (e) => {
        const value = e.target.value;
        const property = e.target.name;

        setForm({ ...form, [property]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault()

        axios.post('/send', form)
            .then(res => console.log(res))
            .catch(err => console.error(err))

    }


    return (
        <Card
            shadow='none'
            radius='full'
            className='w-full h-full xl:h-[40em] bg-black p-6 xl:p-20'
        >

            <CardHeader>

            </CardHeader>

            <div
                className='flex flex-wrap xl:flex-nowrap w-full h-full gap-12 xl:gap-0'
            >
                <div
                    className='w-full xl:w-[50%] flex flex-col justify-center gap-4'
                >
                    <h4
                        className='text-gray-300 font-semibold text-5xl'
                    >
                        <span
                            className='bg-gradient-to-t from-gray-700 to-white text-transparent bg-clip-text text-7xl xl:text-8xl'
                        >
                            Hablemos,
                        </span>
                        <br /> Tu Comunicación es Nuestra Especialidad</h4>

                    <h5
                        className='text-gray-500 font-medium text-2xl'
                    >Juntos, Construyendo Puentes en el Mundo de la Comunicación.</h5>
                </div>

                <div
                    className='w-full xl:w-[50%] h-full flex p-0 xl:p-6'
                >
                    <form
                        onSubmit={handleSubmit}
                        className='w-full h-full'
                    >
                        <div
                            className='flex flex-col gap-4 h-full w-full '
                        >
                            <Input
                                name='name'
                                onChange={handleOnChange}
                                value={form.name}
                                isClearable
                                variant='flat'
                                isRequired
                                label='Nombre'
                                placeholder='Jose antonio'
                            />

                            <Input
                                name='emailAddress'
                                onChange={handleOnChange}
                                value={form.emailAddress}
                                isClearable
                                variant='flat'
                                isRequired
                                label='Correo electronico'
                                placeholder='jose@example.com'
                            />

                            <Input
                                name='phoneNumber'
                                onChange={handleOnChange}
                                value={form.phoneNumber}
                                isClearable
                                variant='flat'
                                isRequired
                                label='Numero celular'
                                placeholder='55 5555 5555'
                            />

                            <Textarea
                                name='message'
                                onChange={handleOnChange}
                                value={form.message}
                                variant='flat'
                                label='Mensaje'
                                placeholder='Hola me gustaria obtener una cotizacion de...'
                                description="*Aceptas nuestros terminos y condiciones asi como el aviso de privacidad."
                            />

                            <div
                                className='flex w-full justify-end '
                            >
                                <Button
                                    type='submit'
                                    radius='full'
                                    className='bg-white text-gray-800 font-medium'
                                >Enviar</Button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

            <CardFooter>

                <p
                    className='text-gray-400'
                >Tu voz, nuestra misión; unidos en comunicación.</p>

            </CardFooter>

        </Card>
    )
}

export default FormAppleCard
