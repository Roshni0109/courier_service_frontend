import React, { useEffect, useRef, useState } from "react";
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
  useToast,
  Stack,
} from "@chakra-ui/react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import axios from "axios";

export default function History({ userDetails }) {
  const [orderDetail, setOrderDetail] = useState({
    nameOfSender: "",
    phoneOfSender: "",
    stateOfSender: "",
    cityOfSender: "",
    addressOfSender: "",
    pincodeOfSender: "",
    email: "",
    nameOfReceiver: "",
    phoneOfReceiver: "",
    stateOfReceiver: "",
    cityOfReceiver: "",
    addressOfReceiver: "",
    pincodeOfReceiver: "",

    orderID: "",
    status: "",
  });
  const history = useRef([]);
  //let history = [];
  const index = useRef(0);
  const toast = useToast();

  const [orderId, setOrderId] = useState("");
  function onChangeOrderId(e) {
    setOrderId(e.target.value);
  }
  const inputBreakpoint = { xl: "sm", "2xl": "md" };
  useEffect(() => {
    async function preOrders() {
      try {
        const res = await axios.get(
          `http://localhost:8080/users/${userDetails.email}/order`
        );
        history.current = res.data;
        if (history.current.length) {
          setOrderDetail(history.current[index.current]);
        }
      } catch (err) {}
    }

    preOrders();
  }, [userDetails.email]);

  function onClickRightButton() {
    index.current = index.current + 1;
    setOrderDetail(history.current[index.current]);
  }
  function onClickLeftButton() {
    //console.log("errr");
    index.current = index.current - 1;
    setOrderDetail(history.current[index.current]);
  }
  //console.log(orderDetail);

  function onClickSearchButton() {
    let orderIndex = -1;
    for (let i = 0; i < history.current.length; i++) {
      const obj = history.current[i];
      if (obj.orderID === orderId) {
        orderIndex = i;
      }
    }

    if (orderIndex > -1) {
      index.current = orderIndex;
      setOrderDetail(history.current[index.current]);
    } else {
      toast({
        title: "Error.",
        description: "OrderId does not exist.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }
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
        <Stack spacing={6} direction={{ base: "column", xl: "row" }}>
          <VStack
            spacing={{ lg: "1", "2xl": "3" }}
            alignItems="stretch"
            alignContent={"stretch"}
            width={{ base: "100%", xl: "50%" }}
            htmlFor=""
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Order ID:
              </FormLabel>
              <Text
                size={{ inputBreakpoint }}
                textAlign={"left"}
                sx={{ width: "100%" }}
                fontFamily={"mono"}
              >
                {orderDetail.orderID}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel fontFamily={"mono"} width={"60"} htmlFor="">
                Name of Sender:
              </FormLabel>
              <Text
                textAlign={"left"}
                size={{ inputBreakpoint }}
                sx={{ width: "100%" }}
              >
                {orderDetail.nameOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor="">
                Phone Number of Sender:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.phoneOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                State:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.stateOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                City:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.cityOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                From:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.addressOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Pin code:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.pincodeOfSender}
              </Text>
            </Flex>
          </VStack>

          <VStack
            spacing={{ "2xl": "3" }}
            alignItems="stretch"
            alignContent={"stretch"}
            width={{ base: "100%", xl: "50%" }}
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Status
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.status}
              </Text>
            </Flex>
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Name of Receiver:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.nameOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor="">
                Phone Number of Receiver:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.phoneOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                State:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.stateOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                City:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.cityOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                To:
              </FormLabel>
              <Text
                //fontStyle={"italic"}
                size={{ inputBreakpoint }}
                sx={{ width: "100%" }}
              >
                {orderDetail.addressOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Pin code:
              </FormLabel>
              <Text size={{ inputBreakpoint }} sx={{ width: "100%" }}>
                {orderDetail.pincodeOfReceiver}
              </Text>
            </Flex>
          </VStack>
        </Stack>

        {/*<HStack mt={"3"} alignItems="center" alignContent={"stretch"}>
          <FormLabel width={"40"} htmlFor="">
            Anything else you would like to add:
          </FormLabel>
          <Text sx={{ width: "100%" }}></Text>
  </HStack>*/}

        <HStack mt={{ lg: "1%", "2xl": "3%" }}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              onClick={onClickLeftButton}
              icon={<VscTriangleLeft size={"100%"} />}
              colorScheme="blue"
              isDisabled={index.current === 0}
              //zIndex={100}
            />
          </motion.div>
          <Spacer />
          <InputGroup w={"50rem"}>
            <Input
              type="text"
              variant="outline"
              borderColor={"black"}
              value={orderId}
              onChange={onChangeOrderId}
            />
            <InputRightAddon
              alignItems="stretch"
              padding={0}
              children={
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Button
                    onClick={onClickSearchButton}
                    height="100%"
                    colorScheme={"blue"}
                    borderRadius="0"
                  >
                    Search
                  </Button>
                </motion.div>
              }
            />
          </InputGroup>
          <Spacer />

          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              onClick={onClickRightButton}
              icon={<VscTriangleRight size={"100%"} />}
              colorScheme="blue"
              isDisabled={index.current >= history.current.length - 1}
            />
          </motion.div>
        </HStack>
      </FormControl>
    </Box>
  );
}
