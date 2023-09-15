import ModalForm from "../../providers/modal-form"

import usePreviewModalForm from "../../hooks/useFormPreview"
import { Button } from "@nextui-org/react";

const ButtonOpenModal = () => {

    const usePreview = usePreviewModalForm();


    return (
        <>
            <ModalForm />
            <Button
                size="lg"
                color="primary"
                onPress={() => usePreview.onOpen()}
                className="font-medium"
            >Comenzar</Button>
        </>
    )
}

export default ButtonOpenModal
