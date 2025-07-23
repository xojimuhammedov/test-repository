import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

export default function LogisticsStatistics() {
  const { t } = useTranslation();
  const [count, setCount] = useState(false);
  return (
    <Box width="100%" bg="#F9F5EE">
      {/* Header Section */}
      <Container maxW="container.xl" py={12} textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", lg: "4xl" }}
          fontWeight="bold"
          mb={4}
          color="gray.900"
        >
          {t("Natijalarimiz raqamlarda")}
        </Heading>
        <Text fontSize="14px" color="#333" maxW="3xl" mx="auto">
          {t(
            "Повышайте производительность и добивайтесь успеха с помощью видимости в реальном времени и автоматизации на каждом этапе вашего рабочего процесса."
          )}
        </Text>
      </Container>

      {/* Statistics Section */}
      <Box width="100%" bg="#F9F5EE" py={{ base: 8, lg: 16 }}>
        <Container maxW="container.xl">
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {/* Stat 1 */}
              <Flex direction="column" align="center">
                <Heading
                  as="h2"
                  fontSize={{ base: "65px", lg: "80px" }}
                  fontWeight="600"
                  color="#2C3543"
                  mb={{ base: 2, lg: 6 }}
                >
                  {count && (
                    <CountUp
                      className="static-number"
                      start={2000}
                      duration={2.75}
                      end="2500"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#D3A68D" }}>+</span>
                </Heading>
                <Text textAlign="center" fontWeight="500" color="#121D50">
                  {t("Ro'yxatga olingan")}
                </Text>
              </Flex>

              {/* Stat 2 */}
              <Flex direction="column" align="center">
                <Heading
                  as="h2"
                  fontSize={{ base: "65px", lg: "80px" }}
                  fontWeight="600"
                  color="#2C3543"
                  mb={{ base: 2, lg: 6 }}
                >
                  {count && (
                    <CountUp
                      className="static-number"
                      start={1000}
                      duration={2.75}
                      end="1538"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#D3A68D" }}>+</span>
                </Heading>
                <Text textAlign="center" fontWeight="500" color="#121D50">
                  {t("Viza")}
                </Text>
              </Flex>

              {/* Stat 3 */}
              <Flex direction="column" align="center">
                <Heading
                  as="h2"
                  fontSize={{ base: "65px", lg: "80px" }}
                  fontWeight="600"
                  color="#2C3543"
                  mb={{ base: 2, lg: 6 }}
                >
                  {count && (
                    <CountUp
                      className="static-number"
                      start={100}
                      duration={2.75}
                      end="380"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#D3A68D" }}>+</span>
                </Heading>
                <Text textAlign="center" fontWeight="500" color="#121D50">
                  {t("Vakansiya")}
                </Text>
              </Flex>
            </SimpleGrid>
          </ScrollTrigger>
        </Container>
      </Box>
    </Box>
  );
}
