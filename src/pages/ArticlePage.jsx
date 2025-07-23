import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { newsLists } from "../mockdata/data";
import { useTranslation } from "react-i18next";
import EkologiyaVaTabiat from "./EkologiyaVaTabiat";

const ArticlePage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const aboutData = newsLists?.find((item) => item?.id === Number(id));
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>
          {" "}
          {aboutData[`title_${i18n?.language}`]}
        </Heading>
        <Flex gap={"24px"} m={"24px 0"}>
          <Box width={{ base: "100%", lg: "70%" }}>
            <Image
              src={aboutData?.image}
              alt={aboutData?.title_en}
              {...css.image}
            />
          </Box>
        </Flex>
        <Heading {...css.title}>
          {" "}
          {aboutData[`title_${i18n?.language}`]}
        </Heading>
        <Text {...css.text}>{aboutData[`description_${i18n?.language}`]}</Text>
        <EkologiyaVaTabiat />
      </Box>
    </Box>
  );
};

export default ArticlePage;

const css = {
  image: {
    borderRadius: "12px",
    height: {
      base: "350px",
      lg: "550px",
    },
    objectFit: "cover",
    width: "100%",
  },
  title: {
    fontSize: {
      base: "25px",
      sm: "35px",
    },
    lineHeight: {
      base: "40px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#2C3543",
    margin: "12px 0",
    width: {
      base: "100%",
      lg: "70%",
    },
  },
  text: {
    color: "gray",
    fontSize: "18px",
    lineHeight: "26px",
    width: {
      base: "100%",
      lg: "70%",
    },
  },
  name: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "30px",
    letterSpacing: "0.5px",
    margin: "12px 0",
    marginTop: "36px",
  },
};
