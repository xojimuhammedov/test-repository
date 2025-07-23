import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { Link as Alink } from "react-router-dom";

import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/tg.svg";
import { BsYoutube } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <Box bg={"#2C3543"} pt={"12px"}>
      <Box className="container">
        <Flex justify={"flex-end"}>
          <Flex gap={"12px"}>
            <Link {...css.link} target="_blank" href={"tel:+998777690990"}>
              +998 77 769 09 90
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/jobbridge_xba?igsh=dTI3NGl2YWNwOG91&utm_source=qr"
            >
              <Image {...css.icon} src={Instagram} alt="Instagram" />
            </Link>
            <Link target="_blank" href="https://t.me/JobBridgeXBA">
              <Image {...css.icon} src={Telegram} alt="Telegram" />
            </Link>
            <Link
              target="_blank"
              href="https://youtube.com/@jobbridgexba?si=Ie0lqulfqHVrrKAP"
            >
              <BsYoutube color="white" fontSize={"25px"} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Nav;

const css = {
  icon: {
    width: "25px",
  },
  link: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "500",
    transition: "0.3s",

    _hover: {
      textDecoration: "none",
    },
  },
};
