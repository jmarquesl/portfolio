import NavLink from "./NavLink";
import React from "react";
import { useTranslation } from "react-i18next";

const LinkList = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <NavLink href="/">{t("home")}</NavLink>
            <NavLink href="/aboutMe">{t("about_me")}</NavLink>
            <NavLink href="/contact">{t("contact")}</NavLink>
        </>
    );
};

export default LinkList;
