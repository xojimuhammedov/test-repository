import {
  Button,
  Flex,
  Link,
  Menu,
  Text,
  useDisclosure,
  MenuList,
  MenuItem,
  MenuButton as MenuButtonTwo,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Link as Alink, useNavigate } from "react-router-dom";
import MenuButton from "../assets/MenuButton";
import { useTranslation } from "react-i18next";
import { navberMenu } from "../mockdata/data";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Button {...css.button} onClick={onOpen}>
        <MenuButton />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...css.menuList}>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              pt={"48px"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"36px"}
            >
              <Alink onClick={onClose} to={"/"}>
                <Text {...css.link}>{t("Home")}</Text>
              </Alink>
              <Alink onClick={onClose} to={"/about"}>
                <Text {...css.link}>{t("About")}</Text>
              </Alink>
              <Menu>
                <MenuButtonTwo {...css.link}>
                  {t("Mutaxasisliklar")}
                </MenuButtonTwo>
                {/* <Portal> */}
                  <MenuList>
                    {navberMenu?.map((item) => (
                      <MenuItem
                        color={"#2C3543"}
                        onClick={() => {
                          navigate(`/program/${item?.id}`);
                          onClose();
                        }}
                        key={item?.id}
                        {...css.link}
                      >
                        {item[`title_${i18n?.language}`]}
                      </MenuItem>
                    ))}
                  </MenuList>
                {/* </Portal> */}
              </Menu>
              <Alink onClick={onClose} to="/blog">
                <Text color={"#fff"} {...css.link}>
                  {t("Blog")}
                </Text>
              </Alink>
              <Alink onClick={onClose} to="/filial">
                <Text color={"#fff"} {...css.link}>
                  {t("Filiallar")}
                </Text>
              </Alink>
              <Alink onClick={onClose} to={"/contact"}>
                <Text color={"#fff"} {...css.link}>
                  {t("Contact")}
                </Text>
              </Alink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavbarMenu;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    color: "#2C3543",
  },
  menuList: {
    borderRadius: "0",
    margin: "0",
    height: "100%",
  },
  button: {
    backgroundColor: "transparent",
    width: "55px",
    display: {
      base: "block",
      md: "none",
    },
  },
};
