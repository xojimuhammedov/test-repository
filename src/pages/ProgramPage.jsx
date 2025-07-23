import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React from "react";
import ArrowIcon from "../assets/ArrowIcon";
import { Link, useParams } from "react-router-dom";
import { jobListData } from "../mockdata/data";
import { useTranslation } from "react-i18next";
import LocationIcon from "../assets/location.svg";

const ProgramPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const filterData = jobListData.filter(
    (item) => item?.category === Number(id)
  );

  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Dasturlar")}</Heading>
        <Text {...css.name}>
          {t(
            "Sizning qiziqishlaringiz va orzularingizga mos keladigan dasturni tanlang"
          )}
        </Text>
        <SimpleGrid
          mt={"36px"}
          gap={"24px"}
          columns={{ base: 1, md: 2, lg: 3 }}
        >
          {filterData?.map((item) => (
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
                alt={item.title_uz}
                src={item.image}
              />
              <Box p={4}>
                <Flex justify={"center"} gap={"4px"} alignItems={"center"}>
                  <Image src={LocationIcon} alt="Location Icon" />
                  <Heading color="gray.600" fontSize={"sm"}>
                    {item[`country_${i18n?.language}`]}
                  </Heading>
                </Flex>
                <Heading
                  display="-webkit-box"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textAlign={"center"}
                  sx={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                  {...css.names}
                >
                  {item[`title_${i18n?.language}`]}
                </Heading>
                <Text
                  display="-webkit-box"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  sx={{
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                  textAlign={"center"}
                  fontSize="md"
                  color="gray.600"
                >
                  {item[`description_${i18n?.language}`]}
                </Text>
              </Box>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
                className="section-link"
                to={`/program/about/${item?.id}`}
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

export default ProgramPage;

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
  names: {
    color: "#121D50",
    margin: "12px 0",
    fontWeight: "600",
    letterSpacing: "0.65px",
    fontSize: "22px",
    lineHeight: "30px",
  },
  image: {
    height: "280px",
    objectFit: "cover",
    width: "100%",
  },
};
