import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import HeaderBanner from "../assets/header-banner.avif";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Box {...css.header}>
      <Box className="container">
        <Flex flexDirection={"column"}>
          <Heading {...css.title}>{t("Chet elda ishlash oson")}</Heading>
          <Text {...css.text}>{t("header_text")}</Text>
          <Link href="https://forms.gle/aRJSk6qbD4tJsK2m8" target="_blank" {...css.button}>
            {t("Men ishlashni xohlayman")}
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;

const css = {
  header: {
    backgroundImage: `url(${HeaderBanner})`,
    backgroundSize: "cover",
    minHeight: "95vh",
    padding: "100px 0",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: {
      base: "40px",
      lg: "55px",
    },
    lineHeight: {
      base: "45px",
      lg: "60px",
    },
    paddingTop: "72px",
    margin: "12px 0",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    margin: "12px 0",
    lineHeight: "26px",
    width: {
      base: "100%",
      lg: "650px",
    },
    fontWeight: "500",
  },
  button: {
    width: "240px",
    height: "50px",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333",
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    fontWeight: "500",
  },
};
