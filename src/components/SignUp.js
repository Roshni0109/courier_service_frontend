import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
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

export default function SignUp({ setUserDetails }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [credentials, setCredentials] = useState({
    nameOfSender: "",
    phoneOfSender: "",
    stateOfSender: "",
    cityOfSender: "",
    addressOfSender: "",
    pincodeOfSender: "",
    email: "",
  });
  const [identity, setIdentity] = useState({
    password: "",
    confPassword: "",
  });

  const handleClickPass = () => setShowPass(!showPass);
  const handleClickConfPass = () => setShowConfPass(!showConfPass);
  const toast = useToast();

  function onChangeCredentials(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [name]: value,
      };
    });
  }
  function onChangeIdentity(e) {
    const name = e.target.name;
    const value = e.target.value;

    setIdentity((prevIdentity) => {
      return {
        ...prevIdentity,
        [name]: value,
      };
    });
  }
  async function onClickSignUp() {
    if (identity.password === identity.confPassword) {
      try {
        const res = await axios.post("http://localhost:8080/users", {
          ...credentials,
          password: identity.password,
        });
        //console.log(res);
        setUserDetails((prevDetails) => {
          return {
            ...prevDetails,
            ...credentials,
          };
        });
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } catch (err) {
        //console.log(err);
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
    } else {
      toast({
        title: "Error.",
        description: "Password and Confirm Password Does Not Match",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }
  // console.log(credentials);

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
      <FormControl h="100%">
        <HStack spacing={6}>
          <VStack alignItems={"stretch"} spacing={6}>
            <HStack>
              <FormLabel width={80} htmlFor="name">
                Name:
              </FormLabel>
              <Input
                type="text"
                borderColor={"black"}
                name="nameOfSender"
                id="name"
                onChange={onChangeCredentials}
                value={credentials["nameOfSender"]}
              />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="state">
                State:
              </FormLabel>
              <Input
                type="text"
                borderColor={"black"}
                name="stateOfSender"
                id="state"
                onChange={onChangeCredentials}
                value={credentials["stateOfSender"]}
              />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="email">
                Email address:
              </FormLabel>
              <Input
                type="email"
                borderColor={"black"}
                name="email"
                id="email"
                onChange={onChangeCredentials}
                value={credentials["email"]}
              />
            </HStack>

            <HStack spacing={0}>
              <FormLabel width={80} htmlFor="password">
                Password:
              </FormLabel>
              <InputGroup p="0" m="0">
                <Input
                  type={showPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="password"
                  id="password"
                  onChange={onChangeIdentity}
                  value={identity["password"]}
                />
                <InputRightElement>
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleClickPass}
                    icon={showPass ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </VStack>

          <VStack alignItems={"stretch"} spacing={6}>
            <HStack>
              <FormLabel width={"20rem"} htmlFor="phoneNo">
                Phone Number:
              </FormLabel>
              <Input
                type="number"
                borderColor={"black"}
                name="phoneOfSender"
                id="phoneNo"
                onChange={onChangeCredentials}
                value={credentials["phoneOfSender"]}
              />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="city">
                City:
              </FormLabel>
              <Input
                type="text"
                borderColor={"black"}
                name="cityOfSender"
                id="city"
                onChange={onChangeCredentials}
                value={credentials["cityOfSender"]}
              />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="pincode">
                Pincode:
              </FormLabel>
              <Input
                type="number"
                borderColor={"black"}
                name="pincodeOfSender"
                id="pincode"
                onChange={onChangeCredentials}
                value={credentials["pincodeOfSender"]}
              />
            </HStack>

            <HStack spacing={0}>
              <FormLabel width={80} htmlFor="confPassword">
                Confirm Password:
              </FormLabel>
              <InputGroup>
                <Input
                  type={showConfPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="confPassword"
                  id="confPassword"
                  onChange={onChangeIdentity}
                  value={identity["confPassword"]}
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    onClick={handleClickConfPass}
                    icon={showConfPass ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </VStack>
        </HStack>
        <HStack mt={6}>
          <FormLabel width={80} htmlFor="address">
            Address:
          </FormLabel>
          <Input
            type="text"
            borderColor={"black"}
            name="addressOfSender"
            id="address"
            onChange={onChangeCredentials}
            value={credentials["addressOfSender"]}
          />
        </HStack>

        <ButtonGroup p={4} variant="solid" mt={"5%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button onClick={onClickSignUp} colorScheme="blue">
              Sign Up
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Cancel</Button>
          </motion.div>
        </ButtonGroup>
      </FormControl>
    </Box>
  );
}
