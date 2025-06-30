import { YStack, Text } from "tamagui";
import ExperienceCard from "./ExperienceCard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconName } from "lucide-react/dynamic";

const ExperienceSection = () => {
    const { t, i18n } = useTranslation();
    interface Experience {
        title: string;
        company: string;
        dates: string;
        description: string;
        logo: string;
        skills: string[];
        icon: IconName;
        color?: string;
    }

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [isExperiencesLoading, setIsExperiencesLoading] = useState(true);

    useEffect(() => {
        const loadExperiences = async () => {
            const locale = i18n.language;
            const response = await fetch(`/data/${locale}/experiences.json`);
            const data = await response.json();
            setExperiences(data);
            setIsExperiencesLoading(false);
        };
        loadExperiences();
    }, [i18n.language]);

    return (
        <YStack>
            {isExperiencesLoading ? <></> : (experiences.map((exp) => (
                <ExperienceCard
                    key={exp.title}
                    title={exp.title}
                    company={exp.company}
                    dates={exp.dates}
                    description={exp.description}
                    logo={exp.logo}
                    skills={exp.skills}
                    icon={exp.icon}
                    color={exp.color}
                />
            )))}
        </YStack>
    );
}

export default ExperienceSection;
