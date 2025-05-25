import { YStack, XStack, Text, Anchor, Separator, Avatar, Stack } from "tamagui";
import { Linkedin, Github, Mail } from "lucide-react";
import NavLink from "../components/NavLink";
import React from "react";
import { Metadata } from "next";

export async function getStaticProps() {
    return {
        props: {
            metadata
        }
    }
}

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Page",
    keywords: "Contact, Linkedin, Github, Email",
}

export default function ContactPage() {
    return (
        <YStack
            flex={1} alignItems="center" justifyContent="center" paddingTop="100px"
        >
            <XStack f={1} ai="center" justifyContent="center" gap="$4" p="$6" alignItems="center" flexWrap="wrap">
                <Avatar circular size="$20">
                    <Avatar.Image source="/portfolio/static/images/contact.jpg" />
                    <Avatar.Fallback bc="$gray7" />
                </Avatar>

                <YStack gap="$3">
                    <XStack ai="center" gap="$3">
                        <Linkedin size={44} />
                        <NavLink href="https://www.linkedin.com/in/jordi-marqu%C3%A9s-llaberia-11685145/"
                            target="_blank"><Text fontSize="$6" fontWeight="600">Linkedin</Text></NavLink>
                    </XStack>

                    <XStack ai="center" gap="$3">
                        <Github size={44} />
                        <NavLink
                            href="https://github.com/jmarquesl"
                        >
                             <Text fontSize="$6" fontWeight="600">Github</Text>
                        </NavLink>
                    </XStack>

                    <XStack ai="center" gap="$3">
                        <Mail size={44} />
                        <NavLink href="mailto:jordi.marquesllaberia@gmail.com">
                            <Text fontSize="$6" fontWeight="600">Email</Text>
                        </NavLink>
                    </XStack>
                </YStack>
            </XStack>
        </YStack>
    );
}