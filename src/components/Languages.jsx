import React from "react";
import { useTranslation } from "react-i18next";
import UzbekImage from "../assets/uz.svg";
import RussianImage from "../assets/ru.svg";
import EnglishImage from "../assets/en.svg";
import {
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const languageData = [
  {
    id: 1,
    image: UzbekImage,
    value: "uz",
  },
  {
    id: 2,
    image: RussianImage,
    value: "ru",
  },
  {
    id: 3,
    image: EnglishImage,
    value: "en",
  },
];

function Language() {
  const { i18n } = useTranslation();

  const onChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };


  const languageImage =
    i18n?.language === "uz"
      ? UzbekImage
      : i18n?.language === "en"
      ? EnglishImage
      : RussianImage;

  const data = languageData?.filter((item) => item?.value != i18n.language);

  return (
    <>
      <Menu isLazy>
        <MenuButton minW={"15px"}>
          <Flex alignItems={'center'} gap={'8px'}>
            <Image
              className={"language-image"}
              src={languageImage}
              alt="Language"
            />
            <Heading
              textTransform={"uppercase"}
              fontWeight={"600"}
              fontSize={"base"}
              color={'#fff'}
            >
              {i18n.language}
            </Heading>
          </Flex>
        </MenuButton>
        <MenuList ml={"-12px"} zIndex="999" {...css.menuItem}>
          {data?.map((item, index) => (
            <MenuItem key={index}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"8px"}
                onClick={() => onChangeLanguage(item.value)}
              >
                <Image
                  className={"language-image"}
                  src={item.image}
                  alt="English"
                />
                <Heading
                  textTransform={"uppercase"}
                  fontWeight={"600"}
                  fontSize={"base"}
                >
                  {item?.value}
                </Heading>
              </Box>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default Language;

const css = {
  menuItem: {
    minWidth: "35px",
  },
};
