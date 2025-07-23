import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { jobListings } from "../mockdata/data";
import LocationIcon from "../assets/location.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ArrowIcon from "../assets/ArrowIcon";

const Section = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Eng mashhur dasturlar")}</Heading>
        <Text fontSize="md" color="gray.600" mb={6}>
          {t("Mijozlarimiz tanlagan mashhur chet eldagi ish dasturlari")}
        </Text>
        <SimpleGrid gap={"24px"} columns={{ base: 1, md: 2, lg: 3 }}>
          {jobListings.map((item) => (
            <Box
              bg="white"
              color="gray.800"
              rounded="xl"
              boxShadow="md"
              key={item.id}
            >
              <Image
                rounded="12px 12px 0 0"
                {...css.image}
                alt={item.title}
                src={item.image}
              />
              <Box p={4}>
                <Flex gap={"4px"} alignItems={"center"}>
                  <Image src={LocationIcon} alt="Location Icon" />
                  <Heading color="gray.600" fontSize={"sm"}>
                    {item[`country_${i18n?.language}`]}
                  </Heading>
                </Flex>
                <Heading
                  display="-webkit-box"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  sx={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                  {...css.name}
                >
                  {item[`title_${i18n?.language}`]}
                </Heading>
                <Text fontSize="md" color="gray.600">
                  {item[`description_${i18n?.language}`]}
                </Text>
              </Box>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
                className="section-link"
                to={`/news/${item?.id}`}
              >
                <ArrowIcon />
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Section;

const css = {
  title: {
    fontSize: {
      base: "30px",
      sm: "65px",
    },
    lineHeight: {
      base: "40px",
      sm: "80px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#2C3543",
    margin: "12px 0",
  },
  name: {
    color: "#121D50",
    margin: "12px 0",
    fontWeight: "600",
    letterSpacing: "0.65px",
    fontSize: "24px",
  },
  image: {
    height: "280px",
    objectFit: "cover",
    width: "100%",
  },
};
