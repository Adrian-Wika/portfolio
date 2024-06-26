import { IconBrandReact, IconBrandNextjs, IconBrandJavascript } from '@tabler/icons-react'

const HomeManager = () => {
    return (
        <div className="">
            <div className="bg-transparent backdrop-blur-md  rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-4">Adrian Wika</h1>
                <h2 className="text-xl md:text-2xl font-medium mb-6">Front-End Developer</h2>
                <div>
                    <p className="mb-6">
                        Jestem doświadczonym frontend developerem z pasją do tworzenia intuicyjnych i responsywnych interfejsów użytkownika.
                        Specjalizuję się w technologiach takich jak:
                    </p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <span className="flex items-center md:text-xl">
                            <span className="mr-2"><IconBrandJavascript size={18} /></span> JavaScript
                        </span>
                        <span className="flex items-center md:text-xl">
                            <span className="mr-2"><IconBrandReact size={18} /></span> React
                        </span>
                        <span className="flex items-center md:text-xl">
                            <span className="mr-2"><IconBrandNextjs size={18} /></span> Next.js
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Moje projekty charakteryzują się wysoką jakością kodu, dbałością o detale i zgodnością z praktykami UX/UI.
                    </p>
                    <p className="text-sm leading-relaxed">
                        Mam doświadczenie w pracy zarówno z zespołami, jak i w samodzielnych projektach, co pozwala mi efektywnie realizować różnorodne zadania i osiągać wyznaczone cele.
                        Ciągle poszerzam swoje umiejętności, śledząc najnowsze trendy i technologie w branży, aby dostarczać nowoczesne i funkcjonalne rozwiązania.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeManager