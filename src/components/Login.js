import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import axios from "axios";

export default function Login({ setUserDetails, setPanels }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [creds, setCreds] = useState({ email: "", password: "" });
  const toast = useToast();
  function onChangeCreds(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCreds((prevCreds) => {
      return {
        ...prevCreds,
        [name]: value,
      };
    });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./lottiefiles/MOGRAPH.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function onClickLoginIn() {
    try {
      const res = await axios.get(
        `http://localhost:8080/users/${creds.email}/${creds.password}`,
        creds
      );
      toast({
        title: "Successfully Login in",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      console.log(res);
      //console.log(...res);
      setUserDetails((prevDetails) => {
        return {
          ...prevDetails,
          ...res.data,
        };
      });

      setPanels({
        home: true,
        login: false,
        signup: false,
        trackship: false,
        prevorder: false,
        updateprofile: false,
      });
    } catch (err) {
      //console.log(err);
      toast({
        title: "Error",
        description: err.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }
  //console.log(creds);

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
          <VStack width={"50%"}>
            <Flex alignSelf={"flex-start"}>
              <FormLabel htmlFor="email">Email address/Phone Number</FormLabel>
            </Flex>
            <Flex alignSelf={"flex-start"}>
              <Input
                width={"80"}
                type="email"
                borderColor={"black"}
                name="email"
                id="email"
                onChange={onChangeCreds}
                value={creds["email"]}
              />
            </Flex>

            <Flex alignSelf={"flex-start"}>
              <FormLabel mt="6" htmlFor="password">
                Password
              </FormLabel>
            </Flex>

            <Flex alignSelf={"flex-start"}>
              <InputGroup width={"80"}>
                <Input
                  pr="3.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  variant="outline"
                  borderColor={"black"}
                  width={"80"}
                  name="password"
                  onChange={onChangeCreds}
                  value={creds["password"]}
                  id="password"
                />
                <InputRightElement width="2.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    icon={show ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </Flex>

            <br />

            <ButtonGroup p={4} variant="solid" spacing="6" mt={6}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Button onClick={onClickLoginIn} colorScheme={"blue"}>
                  Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Button colorScheme={"blue"}>Cancel</Button>
              </motion.div>
            </ButtonGroup>
          </VStack>

          <Lottie
            options={defaultOptions}
            height={"25rem"}
            isClickToPauseDisabled="true"
          />
        </HStack>
      </FormControl>
    </Box>
  );
}
