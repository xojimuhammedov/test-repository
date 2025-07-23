import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  Button,
  Divider,
  Container,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  TimeIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";

const FilialPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Filiallar")}</Heading>
        <Text {...css.text}>{t("Iltimos, bo'sh ish o'rinlari bilan tanishing")}</Text>
        <Box
          bg="white"
          borderRadius="2xl"
          p={8}
          shadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          {/* Top section with contact info */}
          <VStack spacing={8} align="stretch">
            {/* Contact details grid */}
            <HStack
              spacing={12}
              align="start"
              justify="space-between"
              wrap="wrap"
            >
              {/* Phone section */}
              <VStack align="start" spacing={3} minW="200px">
                <HStack spacing={3}>
                  <Icon as={PhoneIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    Telefon nomer
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  {/* <Text color="gray.600" fontSize="md">
                    +998781470030
                  </Text> */}
                  <Text color="gray.600" fontSize="md">
                    +998 95 961 09 90
                  </Text>
                </VStack>
              </VStack>

              {/* Address section */}
              <VStack align="start" spacing={3} minW="200px">
                <HStack spacing={3}>
                  <Icon as={MdLocationOn} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Manzil")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    Toshkent shahar, Yakkasaroy tuman
                  </Text>
                  <Text color="gray.600" fontSize="md">
                    Shota Rustaveli ko'chasi, 150
                  </Text>
                </VStack>
              </VStack>

              {/* Email section */}
              <VStack align="start" spacing={3} minW="200px">
                <HStack spacing={3}>
                  <Icon as={EmailIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Elektron pochta manzili")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    info@jobbridge.uz
                  </Text>
                </VStack>
              </VStack>

              {/* Working hours section */}
              <VStack align="start" spacing={3} minW="200px">
                <HStack spacing={3}>
                  <Icon as={TimeIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Ish vaqti")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    09:00 – 18:00
                  </Text>
                </VStack>
              </VStack>
            </HStack>

            {/* Divider */}
            <Divider borderColor="gray.200" />

            {/* Office section */}
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                {t("Bosh ofis")}
              </Text>

              <HStack
                spacing={8}
                align="start"
                justify="space-between"
                w="full"
              >
                <VStack align="start" spacing={2}>
                  <HStack spacing={3}>
                    <Icon as={MdLocationOn} color="gray.500" boxSize={4} />
                    <Text color="gray.600" fontSize="md">
                      Toshkent, Yakkasaroy tuman, Shota Rustaveli ko'chasi, 150
                    </Text>
                  </HStack>

                  <HStack spacing={3}>
                    <Icon as={PhoneIcon} color="gray.500" boxSize={4} />
                    <Text color="gray.600" fontSize="md">
                      +998 95 961 09 90
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default FilialPage;

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
    color: "#121D50",
    margin: "12px 0",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "26px",
  },
};
