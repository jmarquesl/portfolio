import { useEffect, useState } from "react";
import SkillCard from "./SkillsCard";
import { YStack } from "tamagui";
import { getLanguage } from "next-i18next-static-site";

const SkillSection: React.FC = () => {
    const [skills, setSkills] = useState([]);
    const [isSkillsLoading, setIsSkillsLoading] = useState(true);
    useEffect(() => {
        const loadSkills = async () => {
            const locale = getLanguage;
            const response = await fetch(`/data/${locale}/skills.json`);
            const data = await response.json();
            setSkills(data);
            setIsSkillsLoading(false);
        };
        loadSkills();
    }, [getLanguage]);
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