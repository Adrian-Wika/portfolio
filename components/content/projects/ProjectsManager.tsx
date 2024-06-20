import { Accordion, Avatar, Badge, Button, Card, Group, Image, Spoiler, Text } from "@mantine/core"
import { projectsList } from './ProjectsData'


interface AccordionLabelProps {
    label: string
    image: string
    description: string
    status?: string | undefined
}

function AccordionLabel({ label, image, description, status }: AccordionLabelProps) {
    return (
        <Group wrap="nowrap">
            <Avatar src={image} radius="xl" size="lg" />
            <div>
                <Text className="flex flex-row gap-2 items-center">
                    {label}
                    {status && (
                        <Badge size="xs" color="blue">{status}</Badge>
                    )}
                </Text>
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
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <div className="mt-[1vh]">
            <div className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-4">Projekty w których brałem udział:</h1>
                <div className=" max-h-[500px] overflow-auto">
                    <Accordion chevronPosition="right" variant="contained">
                        {items}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ProjectsManager