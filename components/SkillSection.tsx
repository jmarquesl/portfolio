import { useEffect, useState } from "react";
import SkillCard from "./SkillsCard";
import i18n from "../i18n";
import { YStack } from "tamagui";

const SkillSection: React.FC = () => {
    const [skills, setSkills] = useState([]);
    const [isSkillsLoading, setIsSkillsLoading] = useState(true);
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
            {isSkillsLoading ? <></> : (skills.map((skill) => (
                <SkillCard
                    area={skill.area}
                    skills={skill.skills} />
            )))
            }
        </YStack>
    )
}

export default SkillSection;