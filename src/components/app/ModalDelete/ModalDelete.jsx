import { useState } from 'react'
import Modal from '@mui/material/Modal'
import { BsTrash, BsX } from 'react-icons/bs'

import {
    Block,
    Header,
    IconDanger,
    Icon,
    Title,
    Text,
    TextError,
    Footer,
    ButtonCancel,
    ButtonDelete,
    backdrop,
} from './modaldelete.style'

function ModalDelete({ open, handleClose, projectName, deleteProject }) {
    const [deleting, setDeleting] = useState(false)
    const [error, setError] = useState('')

    function close() {
        setError('')
        handleClose()
    }

    async function remove() {
        if (deleting) return
        setDeleting(true)
        setError('')
        try {
            await deleteProject()
        } catch (error) {
            console.error(error.message)
            setError('No se ha podido eliminar el proyecto. Inténtalo de nuevo.')
            setDeleting(false)
        }
    }

    return (
        <Modal
            open={open}
            onClose={() => close()}
            aria-labelledby='modal-delete-title'
            aria-describedby='modal-delete-description'
            slotProps={{ backdrop }}
        >
            <Block>
                <Header>
                    <IconDanger>
                        <BsTrash />
                    </IconDanger>
                    <Icon
                        type='button'
                        aria-label='Cerrar'
                        onClick={() => close()}
                    >
                        <BsX />
                    </Icon>
                </Header>

                <Title id='modal-delete-title'>
                    ¿Eliminar este proyecto?
                </Title>
                <Text id='modal-delete-description'>
                    Se borrarán <strong>{projectName}</strong>, sus columnas y
                    todas sus tareas. No se puede deshacer.
                </Text>

                {error && <TextError role='alert'>{error}</TextError>}

                <Footer>
                    <ButtonCancel type='button' onClick={() => close()}>
                        Cancelar
                    </ButtonCancel>
                    <ButtonDelete
                        type='button'
                        disabled={deleting}
                        onClick={() => remove()}
                    >
                        {deleting ? 'Eliminando…' : 'Eliminar proyecto'}
                    </ButtonDelete>
                </Footer>
            </Block>
        </Modal>
    )
}

export default ModalDelete
