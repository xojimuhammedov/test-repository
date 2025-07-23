import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AboutBanner from "../assets/about-banner.jpg";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Box p="48px 0">
      <Box className="container">
        <Heading {...css.title}>{t("Biz haqimizda")}</Heading>
        <Text {...css.name}>{t("BIZ HAQIMIZDA KO'PROQ O'QING!")}</Text>
        <Flex
          flexDirection={"column"}
          mt={{ base: "24px", lg: "36px" }}
          gap={"24px"}
        >
          <Text {...css.text}>
            {t("header_text")} <br /> <br />
            {t("header_text1")} <br /> <br />
            {t("header_text2")}
          </Text>
          <Image src={AboutBanner} {...css.image} />
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutPage;

const css = {
  title: {
    fontSize: {
      base: "30px",
      sm: "35px",
    },
    lineHeight: {
      base: "40px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#121D50",
    margin: "12px 0",
    textAlign: "center",
  },
  name: {
    color: "#808d9c",
    fontWeight: "500",
    letterSpacing: "0.65px",
    fontSize: "20px",
    textAlign: "center",
  },
  text: {
    fontSize: "18px",
    lineHeihgt: "35px",
    fontWeight: "500",
    color: "#121D50",
    marginTop: "25px",
    letterSpacing: "0.5px",
  },
  image: {
    height: {
      base: "300px",
      lg: "500px",
    },
    objectFit: "cover",
    borderRadius: "12px",
  },
};
