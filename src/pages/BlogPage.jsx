import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { newsLists } from "../mockdata/data";
import { useTranslation } from "react-i18next";
import ArrowIcon from "../assets/ArrowIcon";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Blog")}</Heading>
        <SimpleGrid
          mt={"36px"}
          gap={"24px"}
          columns={{ base: 1, md: 2, lg: 3 }}
        >
          {newsLists?.map((item) => (
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
                <Text mt={3} fontSize="md" color="gray.600">
                  {item[`description_${i18n?.language}`]}
                </Text>
              </Box>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
                className="section-link"
                to={`/article/${item?.id}`}
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

export default BlogPage;

const css = {
  title: {
    fontSize: {
      base: "30px",
      sm: "45px",
    },
    lineHeight: {
      base: "40px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#2C3543",
    margin: "12px 0",
    textAlign: "center",
  },
  name: {
    color: "#121D50",
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

