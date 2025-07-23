import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as Alink } from "react-router-dom";

import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/tg.svg";
import LogoIcon from "../assets/newlogo.jpg";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Image {...css.image} src={LogoIcon} alt="Logo" />
        <SimpleGrid
          {...css.box}
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={10}
        >
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("INFORMATION")}</Heading>
            <Alink onClick={() => window.scrollTo(0, 0)} to={"/"}>
              <Text {...css.link}>{t("Home")}</Text>
            </Alink>
            <Alink onClick={() => window.scrollTo(0, 0)} to={"/"}>
              <Text {...css.link}>{t("About")}</Text>
            </Alink>
            <Alink onClick={() => window.scrollTo(0, 0)} to={"/"}>
              <Text {...css.link}>{t("Blog")}</Text>
            </Alink>
            <Alink onClick={() => window.scrollTo(0, 0)} to={"/contact"}>
              <Text {...css.link}>{t("Contact")}</Text>
            </Alink>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("Contact")}</Heading>
            <Link {...css.link} target="_blank" href={"tel:+998777690990"}>
              +998 77 769 09 90
            </Link>
            <Link
              {...css.link}
              target="_blank"
              href={"mailto:info@jobbridge.uz"}
            >
              info@jobbridge.uz
            </Link>
            <Link
              target="_blank"
              {...css.link}
              href={"https://maps.app.goo.gl/26aoaPwtmbmPDcCo9"}
            >
              {t("Toshkent shahar, Yakkasaroy tuman, Shota Rustaveli ko'chasi, 150")}
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("FOLLOW US ON SOCIAL MEDIA")}</Heading>
            <Text {...css.link}>{t("Join Us")}</Text>
            <Flex gap={"12px"}>
              <Link
                target="_blank"
                href="https://www.instagram.com/jobbridge_xba?igsh=dTI3NGl2YWNwOG91&utm_source=qr"
              >
                <Image {...css.icon} src={Instagram} alt="Instagram" />
              </Link>
              <Link target="_blank" href="https://t.me/JobBridgeXBA">
                <Image {...css.icon} src={Telegram} alt="Telegram" />
              </Link>
              <Link target="_blank" href="https://youtube.com/@jobbridgexba?si=Ie0lqulfqHVrrKAP">
                <BsYoutube color="white" fontSize={'25px'} />
              </Link>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Text
          color={"#fff"}
          fontSize={"16px"}
          textAlign={"center"}
          lineHeight={"24px"}
          mt={"40px"}
        >
          © 2025 {t("All rights reserved")}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

const css = {
  footer: {
    background: "#2C3543",
    padding: "40px 0",
  },
  title: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "700",
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
  box: {
    borderBottom: "1px solid #fff",
    padding: "48px 0",
    borderTop: "1px solid #fff",
  },
  icon: {
    width: "25px",
  },
  image: {
    width: "220px",
    height: "130px",
    objectFit: "cover",
    cursor: "pointer",
    marginBottom:"10px"
  },
};
