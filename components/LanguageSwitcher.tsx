import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button, Text } from "tamagui";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  // Obtener el idioma actual
  const currentLanguage = i18n.language;

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLocale = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLocale);
    router.push(router.pathname, router.pathname, { locale: newLocale });
  };

  return (
    <Button bg="$backgroundFocus" onPress={toggleLanguage}>
      <Text fontWeight="bold">{currentLanguage === "es" ? "EN" : "ES"}</Text>
    </Button>
  );
}
