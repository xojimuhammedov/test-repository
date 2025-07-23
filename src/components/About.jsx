import { Box, Flex, Grid, Heading, Image, Text, Link } from "@chakra-ui/react";

// import CompanyImage from "../assets/company.jpeg";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export const MotionBox = motion(Box);

const features = [
  {
    number: "01",
    title_ru: "ЭКСПЕРТИЗА И ОПЫТ",
    title_uz: "EKSPERTIZA VA TAJRIBASI",
    title_en: "EXPERTISE AND EXPERIENCE",
  },
  {
    number: "02",
    title_ru: "ПРИВЕРЖЕННОСТЬ КАЧЕСТВУ",
    title_uz: "SIFATGA SOG'LIK",
    title_en: "QUALITY HEALTH",
  },
  {
    number: "03",
    title_ru: "КОМПЛЕКСНЫЕ УСЛУГИ",
    title_uz: "YUQORI XIZMATLAR",
    title_en: "COMPREHENSIVE SERVICES",
  },
];

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <FadeInSection direction="up" delay={0.8}>
      <Box p={"84px 0"}>
        <Box className="container">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={16}
            mb={16}
          >
            <Box maxW={{ base: "full", md: "50%" }}>
              <Text
                color="#D3A68D"
                fontWeight="bold"
                textTransform="uppercase"
                mb={2}
              >
                {t("About")}
              </Text>
              <Heading
                color={"#2C3543"}
                fontSize={{ base: "2xl", md: "45px" }}
                mb={4}
              >
                {t(
                  "Biz O'zbekistondagi eng yaxshi inson resurslari kompaniyasimiz"
                )}
              </Heading>
              <Text fontSize="md" color="gray.600" mb={6}>
                {t(
                  "Job Bridge agentligi xalqaro mehnat migratsiyasi sohasida uzoq yillardan buyon faoliyat yuritib kelayotgan inson resurslari agentligi bo‘lib, o‘zining ko‘p yillik faoliyati va tajribasi tufayli nafaqat O‘zbekistonda, balki Markaziy Osiyoda ham katta mavqega erishgan. Xizmat ko'rsatilayotgan mijozlar miqyosi. Ushbu agentlikdan o‘tgan minglab nomzodlar Angliya, Germaniya, Belgiya, Xorvatiya, Polsha, Latviya, Litva, Janubiy Koreya va Yaponiya kabi Yevropa, Arab va Uzoq Sharq mamlakatlarida mukammal sharoit va maosh bilan ishlab kelmoqda."
                )}
              </Text>
              <Link
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                href="tel:+998777690990"
                w={"190px"}
                h={"54px"}
                bg="#D3A68D"
                color="white"
                borderRadius={"12px"}
                // _hover={{ bg: "orange.600" }}
              >
                {t("ЗАПРОСИТЬ СЕЙЧАС")}
              </Link>
            </Box>
            <Box>
              <Image
                src={'https://jobbridge.uz/assets/company-BlMYQfyX.jpeg'}
                alt="CompanyImage"
                style={{
                  borderRadius: "16px",
                  objectFit: "cover",
                  height: "390px",
                }}
              />
            </Box>
          </Flex>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {features.map((feature, idx) => (
              <Box
                key={idx}
                bg="#D3A68D"
                color="white"
                p={"24px"}
                rounded="xl"
                textAlign="left"
                display="flex"
                alignItems="center"
                gap={4}
              >
                <Text fontSize="2xl" fontWeight="700">
                  {feature.number}
                </Text>
                <Text fontSize="lg" fontWeight="700">
                  {feature[`title_${i18n?.language}`]}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default About;
