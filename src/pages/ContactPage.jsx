import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ContactPage = () => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [email, setEmail] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeFirstName(item) {
    setFirstName(item);
  }
  function changeLastName(item) {
    setLastName(item);
  }
  function changeText(item) {
    setTextValue(item);
  }
  function changeEmail(item) {
    setEmail(item);
  }
  const handleClear = () => {
    setFirstName("");
    setNumberValue("");
    setTextValue("");
    setLastName("");
    setEmail("");
  };
  let bot = {
    TOKEN: "7631398922:AAGKOlveMCNStM3PJHaZ1i3CeHd0zbw47VQ",
    chatID: "-1002701060935",
    message: `
          Здравствуйте, для вас новые новости!
          Имя 👤: ${firstName} ${lastName}; 
          Номер телефона ☎: ${numberValue};
          Почта: ${email};
          Сообщение: ${textValue};
          `,
  };
  const encodedMessage = encodeURIComponent(bot.message);

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
      {
        method: "GET",
      }
    ).then(
      () => {
        handleClear();
        toast.success(t("Ваше сообщение успешно отправлено!"));
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <Box p={{ base: "24px 0" }}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          align={"center"}
          gap={"36px"}
        >
          <Box>
            <Heading {...css.title}>{t("Contact")}</Heading>
            <Text {...css.text}>
              {t(
                "Have questions or need assistance? Feel free to reach out to us. We’re here to help with any inquiries."
              )}{" "}
            </Text>
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
            <SimpleGrid gap={"36px"} mt={"60px"} columns={{ base: 1, lg: 2 }}>
              <Flex gap={"8px"} flexDirection={"column"}>
                <Heading {...css.name}>{t("Customer Support")}</Heading>
                <Text {...css.texts}>
                  {t(
                    "Contact us for quick and efficient solutions to your issues."
                  )}
                </Text>
              </Flex>
              <Flex gap={"8px"} flexDirection={"column"}>
                <Heading {...css.name}>{t("Feedback and Suggestions")}</Heading>
                <Text {...css.texts}>
                  {t(
                    "We appreciate your feedback and suggestions to improve our services."
                  )}
                </Text>
              </Flex>
              <Flex gap={"8px"} flexDirection={"column"}>
                <Heading {...css.name}>{t("Media Inquiries")}</Heading>
                <Text {...css.texts}>
                  {t(
                    "Reach out for press inquiries, collaborations, and interviews."
                  )}
                </Text>
              </Flex>
            </SimpleGrid>
          </Box>
          <Box {...css.item}>
            <Heading {...css.title}>{t("Get in Touch")}</Heading>
            <Text {...css.text}>{t("You can reach us anytime")}</Text>
            <input
              type="name"
              placeholder={t("FirstName")}
              className="form-input"
              value={firstName}
              onChange={(e) => changeFirstName(e.target.value)}
            />
            <input
              type="name"
              placeholder={t("LastName")}
              className="form-input"
              value={lastName}
              onChange={(e) => changeLastName(e.target.value)}
            />
            <input
              type="number"
              placeholder={t("Phone Number")}
              className="form-input"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}
            />
            <input
              type="email"
              placeholder={t("Email")}
              className="form-input"
              value={numberValue}
              onChange={(e) => changeNumber(e.target.value)}
            />
            <textarea
              value={textValue}
              onChange={(e) => changeText(e.target.value)}
              placeholder={t("Message")}
              className="form-input"
            />
            <Button onClick={sendMessage} type="submit" {...css.button}>
              {t("Submit")}
            </Button>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          pb={"24px"}
          mt={"60px"}
          align={"center"}
          gap={"48px"}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.2506208015257!2d69.22123417596973!3d41.25987877131637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a7667710b21%3A0xc478dc0d295f9756!2sVega%20Centre!5e0!3m2!1sru!2s!4v1752035082719!5m2!1sru!2s"
            className="form-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box>
            <Heading {...css.subname}>{t("Our Location")}</Heading>
            <Heading {...css.title}>{t("Connecting Near and Far")}</Heading>
            <Text mt={"24px"} {...css.name}>
              {t("Headquarters")}
            </Text>
            <Text mt={"12px"} {...css.texts}>
              Toshkent shahar, Yakkasaroy tuman, Shota Rustaveli ko'chasi, 150
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactPage;

const css = {
  title: {
    color: "#2C3543",
    fontSize: {
      base: "32px",
      lg: "42px",
    },
    lineHeight: {
      base: "40px",
      lg: "58px",
    },
    fontWeight: "600",
    textTransform: "capitalize",
    marginTop: "12px",
  },
  link: {
    color: "#D3A68D",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "500",
    transition: "0.3s",
    display: "block",

    _hover: {
      textDecoration: "none",
    },
  },
  text: {
    color: "#988c7b",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    width: {
      base: "100%",
      lg: "410px",
    },
  },
  name: {
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3543",
  },
  texts: {
    color: "#988c7b",
    fontSize: "14px",
    lineHeight: "24px",
    width: "270px",
  },
  item: {
    borderRadius: "12px",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
    background: "#fff",
    width: {
      base: "100%",
      lg: "450px",
    },
    padding: {
      base: "12px",
      lg: "24px",
    },
  },
  button: {
    backgroundColor: "#D3A68D",
    color: "#fff",
    height: "45px",
    width: "100%",
    margin: "0px auto",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    marginTop: "20px",
    transition: "0.3s",
    borderRadius: "12px",

    _hover: {
      backgroundColor: "#f0cc89",
    },
  },
  subname: {
    color: "#D3A68D",
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: "500",
    textTransform: "capitalize",
  },
};
