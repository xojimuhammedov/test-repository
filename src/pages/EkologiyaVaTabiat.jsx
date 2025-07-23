import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function EkologiyaVaTabiat() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("#121D50", "blue.300");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const shadowColor = useColorModeValue(
    "0 4px 6px rgba(0, 0, 0, 0.1)",
    "0 4px 6px rgba(0, 0, 0, 0.3)"
  );

  const { t } = useTranslation();

  return (
    <Box py={8}>
      <VStack spacing={4} align="stretch">
        {/* Main Title */}
        <Box>
          <Heading as="h1" size="lg" color={headingColor} fontWeight="bold">
            {t("Ekologiya va tabiat")}
          </Heading>
        </Box>

        {/* First Section */}
        <Box
          bg={cardBg}
          w={{ base: "100%", lg: "70%" }}
          p={8}
          borderRadius="xl"
          boxShadow={shadowColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Text
            fontSize="lg"
            lineHeight="tall"
            color={textColor}
            // textAlign="justify"
          >
            {t(
              "Avstraliya sizni hayratlanarli tabiat bilan o'rab oladi. Cheksiz plyajlardan tortib ajoyib milliy bog'largacha, har lahza tabiatning ajoyib go'zalligi va uyg'unligi bilan to'ldiriladi. Okean, palma daraxtlari va Buyuk to'siq rifi atrof- muhitga hayrat va hurmat tuyg'usini uyg'otadigan atmosferani yaratadi."
            )}
          </Text>
        </Box>

        {/* Second Section */}
        <Box
          bg={cardBg}
          p={8}
          borderRadius="xl"
          w={{ base: "100%", lg: "70%" }}
          boxShadow={shadowColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Heading
            as="h2"
            size="lg"
            color={headingColor}
            mb={2}
            fontWeight="semibold"
          >
            {t("Turli xil ish imkoniyatlari")}
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="tall"
            color={textColor}
            // textAlign="justify"
          >
            {t(
              "Mamlakat gullab-yashnayotgan iqtisodiyotga ega, turli xil ish joylari mavjud. IT, sog'liqni saqlash, moliya yoki boshqa sohalarda ishlaysizmi, Avstraliya malakali mutaxassislarni qabul qiladi. Mehnat bozori juda faol va martaba o'sishi va rivojlanishi uchun imkoniyatlar yaratadi."
            )}
          </Text>
        </Box>

        {/* Third Section */}
        <Box
          bg={cardBg}
          p={8}
          borderRadius="xl"
          w={{ base: "100%", lg: "70%" }}
          boxShadow={shadowColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Heading
            as="h2"
            size="lg"
            color={headingColor}
            mb={2}
            fontWeight="semibold"
          >
            {t("Hayot sifati")}
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="tall"
            color={textColor}
            // textAlign="justify"
          >
            {t(
              "Avstraliyada hayot sifati juda yuqori. Rivojlangan sog'liqni saqlash tizimi, birinchi darajali ta'lim, kuchli ijtimoiy qo'llab-quvvatlash tarmoq'i – bularning barchasi yuqori turmush darajasini ta'minlaydi. Mamlakotda mehnat va hayotning uyg'un muvozanatini yaratish bo'yicha doimiy intilish ish joyidan tashqarida hayotning keng ko'lamli jabhalarini o'rganish va ulardan bahramand bo'lish uchun keng imkoniyatlar mavjudligini ta'minlaydi."
            )}
          </Text>
        </Box>

        {/* Fourth Section */}
        <Box
          bg={cardBg}
          p={8}
          borderRadius="xl"
          w={{ base: "100%", lg: "70%" }}
          boxShadow={shadowColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Heading
            as="h2"
            size="lg"
            color={headingColor}
            mb={2}
            fontWeight="semibold"
          >
            {t("Kutishlarni rad etuvchi festivalar")}
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="tall"
            color={textColor}
            // textAlign="justify"
          >
            {t(
              "Avstraliya nafaqat otashinlar bilan nishonlashni biladi. Quruj qayiq poygasi uchun Elis Springsning injiq Henley- on-Todd Regattasini tomosha qiling yoki Melburndagi Moomba festivalining jonli ranglarini his qiling. Noan'anaviy, kutilmagan, unutilmas."
            )}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
