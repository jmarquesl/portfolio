import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Button, Text } from "tamagui";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLocale = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLocale);
    router.push(router.pathname, router.pathname, { locale: newLocale });
  };

  return (
    <Button bg="$backgroundFocus" onPress={toggleLanguage}>
      <Text fontWeight="bold">{currentLanguage === "es" ? "ES" : "EN"}</Text>
    </Button>
  );
}
