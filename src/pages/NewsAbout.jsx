import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { jobListings } from "../mockdata/data";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const NewsAbout = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const aboutData = jobListings?.find((item) => item?.id === Number(id));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

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
  const handleClear = () => {
    setFirstName("");
    setNumberValue("");
    setTextValue("");
    setLastName("");
  };
  let bot = {
    TOKEN: "7631398922:AAGKOlveMCNStM3PJHaZ1i3CeHd0zbw47VQ",
    chatID: "-1002701060935",
    message: `
            Здравствуйте, для вас новые новости!
            Имя 👤: ${firstName} ${lastName}; 
            Номер телефона ☎: ${numberValue};
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
    <Box p={"48px 0"}>
      <Box className="container">
        <Heading {...css.title}>
          {" "}
          {aboutData[`title_${i18n?.language}`]}
        </Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={"24px"}
          m={"24px 0"}
        >
          <Box width={{ base: "100%", lg: "70%" }}>
            <Image
              src={aboutData?.image}
              alt={aboutData?.title_en}
              {...css.image}
            />
            <Text {...css.text}>
              {aboutData[`description_${i18n?.language}`]}
            </Text>
            <Box {...css.box}>
              <Text {...css.texts}>{t("header_text")}</Text>
              <Heading {...css.subname}>
                {t(
                  "Agentligimiz tomonidan barcha hujjatlarni rasmiylashtirish:"
                )}
              </Heading>
              <Heading {...css.subname}>{t("Viza")}</Heading>
              <Heading {...css.subname}>{t("Aviachipta")}</Heading>
              <Heading {...css.subname}>
                {t("Ish joyiga kuzatib borish")}
              </Heading>
              <Heading {...css.subname}>
                {t("Muddatli va doimiy monitoringni tashkillashtiradi.")}
              </Heading>
              <Heading {...css.name}>
                {t(
                  "Bepul maslahat olish uchun quyida so’ralgan ma’lumotlarni kiriting va biz sizga ish kuni davomida murojaat qilamiz!"
                )}
              </Heading>
            </Box>
          </Box>

          <Box {...css.item}>
            <Heading {...css.titles}>{t("Bepul konsultatsiya oling")}</Heading>
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
              value={numberValue}
              onChange={(e) => changeNumber(e.target.value)}
              className="form-input"
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
      </Box>
    </Box>
  );
};

export default NewsAbout;

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
  titles: {
    fontSize: {
      base: "30px",
    },
    lineHeight: {
      base: "40px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#121D50",
    textAlign: "center",
  },
  text: {
    color: "gray",
    fontSize: "18px",
    lineHeight: "26px",
    margin: "12px 0",
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
    height: "410px",
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
  box: {
    backgroundColor: "#D3A68D",
    width: "100%",
    borderRadius: "12px",
    padding: "12px 24px",
    marginTop: "24px",
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
  texts: {
    color: "#fff",
    fontWeight: "500",
    fontSize: {
      base: "16px",
      lg: "18px",
    },
    marginBottom: "36px",
    opacity: "0.7",
  },
  subname: {
    color: "#fff",
    fontSize: {
      base: "18px",
      lg: "20px",
    },
    fontWeight: "600",
    lineHeight: "25px",
    margin: "12px 0",
  },
};
