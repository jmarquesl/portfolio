import { useEffect, useState } from "react";
import SkillCard from "./SkillsCard";
import { YStack } from "tamagui";
import { useTranslation } from "next-i18next-static-site";

const SkillSection: React.FC = () => {
    const [skills, setSkills] = useState([]);
    const [isSkillsLoading, setIsSkillsLoading] = useState(true);
    const { i18n } = useTranslation();
    useEffect(() => {
        const loadSkills = async () => {
            const locale = i18n.language;
            const response = await fetch(`/data/${locale}/skills.json`);
            const data = await response.json();
            setSkills(data);
            setIsSkillsLoading(false);
        };
        loadSkills();
    }, [i18n.language]);
    return (
        <YStack>
            {isSkillsLoading ? <></> : (skills.map((skill: any) => (
                <SkillCard
                    area={skill.area}
                    skills={skill.skills} />
            )))
            }
        </YStack>
    )
}

export default SkillSection;
