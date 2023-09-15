'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Select,
    SelectItem,
    Textarea
} from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import usePreviewModalForm from "../hooks/useFormPreview";


const services = [
    'Atencion a cliente',
    'Gestion y cobranza',
    'Telemarketing',
    'Back office',
    'Otros...'
]



const ModalForm = () => {

    const usePreview = usePreviewModalForm();




    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Number: "",
        Business: "",
        Subject: "",
        Message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleOnChange = (e) => {
        const value = e.target.value;
        const property = e.target.name;


        setForm({ ...form, [property]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post(`/api/send`, form)
            .then(res => {
                setLoading(false)
                toast.success(`Datos enviados ${form.Name} 🎉`)

                setTimeout(() => {
                    usePreview.onClose()
                    router.push('/sucessfully');
                }, 1000);

                setForm({
                    Name: "",
                    Email: "",
                    Number: "",
                    Business: "",
                    Subject: "",
                    Message: "",
                })
            })
            .catch(err => toast.error(`Ocurrio un error al enviar sus datos ${form.Name} 😓`))
    };

    return (
        <>
            <Modal
                isOpen={usePreview.isOpen}
                onOpenChange={usePreview.onClose}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Formulario de contacto</ModalHeader>
                            <ModalBody>
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-2"
                                >

                                    <Input
                                        value={form.Name}
                                        name="Name"
                                        onChange={handleOnChange}
                                        clearButton
                                        autoFocus
                                        endContent={<></>}
                                        description={`Opcional`}
                                        type="text"
                                        label="Nombre"
                                        placeholder="Ingresa tu nombre completo"
                                    />
                                    <Input
                                        value={form.Number}
                                        name="Number"
                                        onChange={handleOnChange}
                                        clearButton
                                        isRequired
                                        description={`Obligatorio`}
                                        autoFocus
                                        endContent={<></>}
                                        type="number"
                                        label="Celular"
                                        placeholder="Ingresa tu numero de celular"
                                    />
                                    <Input
                                        value={form.Email}
                                        name="Email"
                                        onChange={handleOnChange}
                                        isRequired
                                        clearButton
                                        autoFocus
                                        description={`Obligatorio`}
                                        endContent={<></>}
                                        type="email"
                                        label="Email"
                                        placeholder="Ingresa tu email"
                                    />
                                    <Textarea
                                        value={form.Message}
                                        name="Message"
                                        onChange={handleOnChange}
                                        description={`Opcional`}
                                        clearButton
                                        autoFocus
                                        endContent={<></>}
                                        type="text"
                                        label="Mensaje"
                                        placeholder="Si lo necesitas escribe un mensaje"
                                    />
                                    <Select
                                        description={`Opcional`}
                                        label="Servicio de interes"
                                        placeholder="Selecciona un servicio"
                                        selectionMode="multiple"
                                        className=""
                                        value={form.Subject}
                                        name="Subject"
                                        onChange={handleOnChange}
                                    >
                                        {
                                            services.map((service) =>
                                                <SelectItem
                                                    key={service}
                                                    value={service}
                                                >{service}</SelectItem>
                                            )
                                        }
                                    </Select>

                                    <div
                                        className="w-full h-auto flex justify-end items-center"
                                    >
                                        <Button
                                            isLoading={loading}
                                            color="primary"
                                        // type="submit"
                                        >{loading ? `Enviando...` : `Enviar`}</Button>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalForm