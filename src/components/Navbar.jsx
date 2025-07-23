import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  MenuItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import LogoIcon from "../assets/newlogo.jpg";
import { Link as Alink, useNavigate } from "react-router-dom";
import Language from "./Languages";
import NavbarMenu from "./NavbarMenu";
import { navberMenu } from "../mockdata/data";

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box {...css.navbar}>
      <Box className="container">
        <Flex justifyContent={"space-between"} align={"center"}>
          <Alink to={"/"}>
            <Image {...css.icon} src={LogoIcon} alt="Logo" />
          </Alink>
          <Flex align={"center"} gap={{ base: "16px", lg: "32px" }}>
            <Alink to={"/"}>
              <Text color={"#fff"} {...css.link}>
                {t("Home")}
              </Text>
            </Alink>
            <Alink to={"/about"}>
              <Text color={"#fff"} {...css.link}>
                {t("About")}
              </Text>
            </Alink>
            <Menu>
              <MenuButton color={"#fff"} {...css.link}>
                {t("Mutaxasisliklar")}
              </MenuButton>
              <Portal>
                <MenuList>
                  {navberMenu?.map((item) => (
                    <MenuItem
                      color={"#2C3543"}
                      onClick={() => navigate(`/program/${item?.id}`)}
                      key={item?.id}
                      {...css.link}
                    >
                      {item[`title_${i18n?.language}`]}
                    </MenuItem>
                  ))}
                </MenuList>
              </Portal>
            </Menu>
            <Alink to="/blog">
              <Text color={"#fff"} {...css.link}>
                {t("Blog")}
              </Text>
            </Alink>
            <Alink to="/filial">
              <Text color={"#fff"} {...css.link}>
                {t("Filiallar")}
              </Text>
            </Alink>
            <Alink to={"/contact"}>
              <Text color={"#fff"} {...css.link}>
                {t("Contact")}
              </Text>
            </Alink>
            <Language />
            <NavbarMenu />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "500",
    display: {
      base: "none",
      lg: "block",
    },
  },
  navbar: {
    paddingTop: {
      base: "8px",
    },
    backgroundColor: "#2C3543",
  },
  icon: {
    width: "150px",
    height: "100px",
    objectFit: "contain",
  },
};
