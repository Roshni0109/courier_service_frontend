import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  FormControl,
  HStack,
  Input,
  Spacer,
  InputGroup,
  InputRightAddon,
  Button,
  FormLabel,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import axios from "axios";

export default function History({ userDetails }) {
  const [orderDetail, setOrderDetail] = useState({});

  useEffect(() => {
    async function preOrders() {
      try {
        const res = await axios.get(
          `http://localhost:8080/users/${userDetails.email}/order`
        );
        const history = res.data;
        setOrderDetail(history[0]);
      } catch (err) {}
    }

    preOrders();
  }, [userDetails.email]);

  console.log(orderDetail);

  return (
    <Box
      borderRadius={"xl"}
      w="100%"
      h="100%"
      p={"30"}
      bg="lavenderblush"
      borderColor="black"
      borderWidth={"2px"}
    >
      <FormControl>
        <HStack>
          <VStack
            spacing={3}
            alignItems="stretch"
            alignContent={"stretch"}
            width="50%"
            htmlFor=""
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Order ID:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.orderID}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Name of Sender:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.nameOfSender}</Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor="">
                Phone Number of Sender:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.phoneOfSender}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.stateOfSender}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.cityOfSender}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                From:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.addressOfSender}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.pincodeOfSender}</Text>
            </Flex>
          </VStack>

          <VStack
            spacing={3}
            alignItems="stretch"
            alignContent={"stretch"}
            width="50%"
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Status
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.status}</Text>
            </Flex>
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Name of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.nameOfReceiver}</Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor="">
                Phone Number of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.phoneOfReceiver}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.stateOfReceiver}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }}>{orderDetail.cityOfReceiver}</Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                To:
              </FormLabel>
              <Text sx={{ width: "100%" }}>
                {orderDetail.addressOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }}>
                {orderDetail.pincodeOfReceiver}
              </Text>
            </Flex>
          </VStack>
        </HStack>

        <HStack mt={"3"} alignItems="center" alignContent={"stretch"}>
          <FormLabel width={"40"} htmlFor="">
            Anything else you would like to add:
          </FormLabel>
          <Text sx={{ width: "100%" }}></Text>
        </HStack>

        <HStack mt={"3%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              icon={<VscTriangleLeft size={"lg"} />}
              colorScheme="blue"
            />
          </motion.div>
          <Spacer />
          <InputGroup size="lg" w={"50rem"}>
            <Input
              type="text"
              variant="outline"
              size="lg"
              borderColor={"black"}
            />
            <InputRightAddon
              alignItems="stretch"
              padding={0}
              size="lg"
              children={
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Button height="100%" colorScheme={"blue"} borderRadius="0">
                    Search
                  </Button>
                </motion.div>
              }
            />
          </InputGroup>
          <Spacer />

          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              icon={<VscTriangleRight size={"lg"} />}
              colorScheme="blue"
            />
          </motion.div>
        </HStack>
      </FormControl>
    </Box>
  );
}
