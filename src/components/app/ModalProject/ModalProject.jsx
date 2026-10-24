import { useState } from 'react'
import Modal from '@mui/material/Modal'
import { BsX } from 'react-icons/bs'

import projectTemplates from '../../../utils/projectTemplates'

import {
    Block,
    Header,
    Title,
    Text,
    Icon,
    Form,
    Label,
    Input,
    TextHelp,
    Templates,
    Legend,
    Template,
    Radio,
    TemplateInfo,
    TemplateTitle,
    TemplateText,
    Preview,
    PreviewColumn,
    Footer,
    ButtonCancel,
    ButtonCreate,
    backdrop,
} from './modalproject.style'

function ModalProject({
    open,
    handleClose,
    newProject,
    setNewProject,
    addTodo,
}) {
    const [creating, setCreating] = useState(false)
    const isNameEmpty = !newProject.name.trim()

    async function create(event) {
        event.preventDefault()
        if (isNameEmpty || creating) return
        setCreating(true)
        await addTodo()
        setCreating(false)
    }

    return (
        <Modal
            open={open}
            onClose={() => handleClose()}
            aria-labelledby='modal-project-title'
            aria-describedby='modal-project-description'
            slotProps={{ backdrop }}
        >
            <Block>
                <Header>
                    <div>
                        <Title id='modal-project-title'>Nuevo proyecto</Title>
                        <Text id='modal-project-description'>
                            Ponle nombre y elige con qué columnas empieza.
                        </Text>
                    </div>
                    <Icon
                        type='button'
                        aria-label='Cerrar'
                        onClick={() => handleClose()}
                    >
                        <BsX />
                    </Icon>
                </Header>

                <Form onSubmit={create}>
                    <Label htmlFor='project-name'>Nombre</Label>
                    <Input
                        id='project-name'
                        type='text'
                        maxLength={60}
                        autoFocus
                        placeholder='Ej. Rediseño web'
                        value={newProject.name}
                        onChange={event =>
                            setNewProject({
                                ...newProject,
                                name: event.target.value,
                            })
                        }
                    />
                    <TextHelp>{newProject.name.length}/60</TextHelp>

                    <Templates>
                        <Legend>Columnas</Legend>
                        {projectTemplates.map(template => (
                            <Template
                                key={template.id}
                                className={
                                    newProject.lists === template.lists
                                        ? 'selected'
                                        : ''
                                }
                            >
                                <Radio
                                    type='radio'
                                    name='project-template'
                                    value={template.id}
                                    checked={
                                        newProject.lists === template.lists
                                    }
                                    onChange={() =>
                                        setNewProject({
                                            ...newProject,
                                            lists: template.lists,
                                        })
                                    }
                                />
                                <TemplateInfo>
                                    <TemplateTitle>{template.name}</TemplateTitle>
                                    <TemplateText>
                                        {template.description}
                                    </TemplateText>
                                    <Preview>
                                        {template.lists.length > 0 ? (
                                            template.lists.map(
                                                (list, index) => (
                                                    <PreviewColumn
                                                        key={list}
                                                        className={`color-${
                                                            index % 6
                                                        }`}
                                                    >
                                                        {list}
                                                    </PreviewColumn>
                                                )
                                            )
                                        ) : (
                                            <PreviewColumn className='empty'>
                                                + Añada lista
                                            </PreviewColumn>
                                        )}
                                    </Preview>
                                </TemplateInfo>
                            </Template>
                        ))}
                    </Templates>

                    <Footer>
                        <ButtonCancel
                            type='button'
                            onClick={() => handleClose()}
                        >
                            Cancelar
                        </ButtonCancel>
                        <ButtonCreate
                            type='submit'
                            disabled={isNameEmpty || creating}
                        >
                            {creating ? 'Creando…' : 'Crear proyecto'}
                        </ButtonCreate>
                    </Footer>
                </Form>
            </Block>
        </Modal>
    )
}

export default ModalProject
