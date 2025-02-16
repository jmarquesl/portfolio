import { Button, YStack, Text, Avatar, XStack } from "tamagui";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  return (
    <YStack ai="center" w="100%" p="$4" alignItems="center">
      {/* Sección de presentación */}
      <YStack maxWidth="100%" p="$4">
        <XStack gap="$4" ai="center">
          <Avatar circular size="$10">
            <Avatar.Image src="/portfolio/static/images/profile.jpg" />
            <Avatar.Fallback backgroundColor="$backgroundFocus" />
          </Avatar>
            <YStack marginLeft="$6" maxWidth="80%" flexWrap="wrap" jc="center" alignItems="center" flexDirection="column">
            <Text fontSize="$6" fontWeight="bold" wordWrap="break-word">
              {t("name")}
            </Text>
            <Text fontSize="$6">{t("role")}</Text>
          </YStack>
        </XStack>
      </YStack>

      {/* Texto de presentación */}
      <YStack w="100%" maxWidth={700} p="$4" alignItems="center">
        <Text fontSize="$8" fontWeight="bold" textAlign="center">
          {t("intro")}
        </Text>
        <Text fontSize="$6" textAlign="center" mt="$3">
          {t("mission")}
        </Text>
        <Text fontSize="$6" textAlign="center" mt="$3">
          {t("belief")}
        </Text>
      </YStack>

      {/* Frase inspiracional */}
      <YStack w="90%" maxWidth={600} p="$4">
        <Text fontSize="$7" fontWeight="bold" textAlign="center">
          {t("quote")}
        </Text>
        <Text fontSize="$6" textAlign="center" mt="$2">
          {t("quote_author")}
        </Text>
      </YStack>
    </YStack>
  );
}
