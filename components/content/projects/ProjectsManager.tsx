import { Accordion, Avatar, Badge, Button, Card, Group, Image, Spoiler, Text } from "@mantine/core"
import { projectsList } from './ProjectsData'
import { IconCode, IconComponents, IconHome, IconExternalLink } from '@tabler/icons-react'


interface AccordionLabelProps {
    label: string
    image: string
    description: string
    links?: {
        url: string
        name: string
    }[]
    status?: string | undefined
}

function AccordionLabel({ label, image, description, links, status }: AccordionLabelProps) {
    return (
        <Group wrap="nowrap">
            <Avatar src={image} radius="xl" size="lg" />
            <div className="w-full">
                <div className=" flex gap-2 w-full items-center flex-wrap">
                    <Text>
                        {label}
                    </Text>
                    {status && (
                        <Badge size="xs" color="blue">{status}</Badge>
                    )}
                </div>
                <Text size="sm" c="dimmed" fw={400} className="flex flex-col">
                    {description}
                </Text>


            </div>
        </Group>
    )
}

const ProjectsManager = () => {

    const items = projectsList.map((item, index) => (
        <Accordion.Item value={index.toString()} key={item.label}>
            <Accordion.Control>
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>
                <Text size="sm">{item.content}</Text>
                {item?.links && item?.links?.length > 0 && (
                    <div className=" text-[0.65rem] mt-2 flex flex-row gap-1 justify-end">
                        {item.links?.map((link, index) => {
                            return <a className=" flex flex-row items-start hover:text-blue-400 duration-300" key={index} href={link.url}>{link.name} <IconExternalLink size={11} /></a>
                        })}
                    </div>
                )}
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <div className=" mt-[-50px] md:mt-[0px]">
            <div className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Projekty w których brałem udział:</h1>
                <div className=" max-h-[60vh] overflow-auto">
                    <Accordion chevronPosition="right" variant="contained">
                        {items}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ProjectsManager