import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import HomeComponent from "./HomeComponent";
import axios from "axios";

export default function Home({ userDetails, setUserDetails }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orderId, setOrderId] = useState("");
  async function onClickBookOrder() {
    try {
      console.log(userDetails);
      const res = await axios.post(
        `http://localhost:8080/users/${userDetails.email}/order`,
        userDetails
      );

      // console.log(res.data);
      setOrderId(res.data);
      toast({
        title: "Your Order Was Booked Sucessfully",
        //description: "We've updated your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      onOpen();
      console.log(isOpen);
    } catch (err) {
      let statement;
      if (err.response.data.errors) {
        //0,"",undefined, null,false
        statement = err.response.data.errors[0].defaultMessage;
      } else {
        statement = err.response.data.message;
      }
      toast({
        title: "Error.",
        description: statement,
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
      border="1px"
    >
      <FormControl>
        <HomeComponent
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />

        <ButtonGroup mt={"4"} p={4} variant="solid" spacing="6">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button onClick={onClickBookOrder} colorScheme="blue">
              Book Order
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Cancel</Button>
          </motion.div>
        </ButtonGroup>
      </FormControl>
      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Booked!!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {`We have successfully booked your order.`} <br />
            {`Your Order Id is:`}
            <br />
            {orderId}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
