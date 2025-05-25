import { Button, YStack, Text, Avatar, XStack } from "tamagui";
import { useTranslation } from "react-i18next";
import { Metadata } from "next";
import { ReactTyped } from "react-typed";

export async function getStaticProps() {
  return {
    props: {
      metadata
    }
  }
}

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
  keywords: "Home, Portfolio",
}

export default function HomePage() {
  const { t, i18n } = useTranslation();
  return (
    <YStack ai="center" w="100%" p="$4" alignItems="center" paddingTop="100px">
      <XStack
        gap="$4"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center" // <- esto centra horizontalmente incluso en wrap
      >
        <Avatar circular size="$10" alignItems="center">
          <Avatar.Image src="/portfolio/static/images/profile.jpg" />
          <Avatar.Fallback backgroundColor="$backgroundFocus" />
        </Avatar>

        <YStack
          marginLeft="$6"
          jc="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize="$6" fontWeight="bold" wordWrap="break-word" textAlign="center">
            {t("name")}
          </Text>
          <Text fontSize="$6" textAlign="center">{t("role")}</Text>
        </YStack>
      </XStack>




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
