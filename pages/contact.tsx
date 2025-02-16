import { YStack, XStack, Text, Anchor, Separator, Avatar, Stack } from "tamagui";
import { Linkedin, Github, Mail } from "lucide-react";
import NavLink from "../components/NavLink";
import React from "react";

export default function ContactPage() {
    return (
        <YStack alignItems="center">
            <XStack f={1} ai="center" jc="center" gap="$4" p="$6" alignItems="center">
                <Avatar circular size="$15">
                    <Avatar.Image src="/static/images/contact.jpg" />
                    <Avatar.Fallback bc="$gray7" />
                </Avatar>

                <YStack gap="$3">
                    <XStack ai="center" gap="$3">
                            <Linkedin size={34} />
                            <NavLink href="https://www.linkedin.com/in/jordi-marqu%C3%A9s-llaberia-11685145/"
                            target="_blank">Linkedin</NavLink>
                        </XStack>

                        <XStack ai="center" gap="$3">
                            <Github size={34} />
                            <NavLink
                                href="https://github.com/jmarquesl"
                            >
                                Github
                            </NavLink>
                        </XStack>

                        <XStack ai="center" gap="$3">
                            <Mail size={34} />
                            <NavLink href="mailto:tuemail@example.com">
                                Email
                            </NavLink>
                        </XStack>
                </YStack>
            </XStack>
        </YStack>
    );
}