//import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState } from "react";
import {
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  HStack,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MdCall, MdEmail } from "react-icons/md";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TrackShipment from "./components/TrackShipment";
import History from "./components/History";
import UpdateProfile from "./components/UpdateProfile";
//import { Link } from "react-router-dom";
//import axios from "axios";
//import { useJsApiLoader } from "@react-google-maps/api";
function App() {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure({
    defaultIsOpen: true,
  });
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onClose: onCloseSignUp,
  } = useDisclosure();

  const [userDetails, setUserDetails] = useState({
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
  //console.log(userDetails);
  const userName = useRef();
  //console.log(panels);
  return (
    <>
      <Login
        userName={userName}
        setUserDetails={setUserDetails}
        //setPanels={setPanels}
        isOpenLogin={isOpenLogin}
        onCloseLogin={onCloseLogin}
        onOpenSignUp={onOpenSignUp}
      />
      <SignUp
        setUserDetails={setUserDetails}
        isOpenSignUp={isOpenSignUp}
        onCloseSignUp={onCloseSignUp}
        //onOpenSignUp={onOpenSignUp}
        onOpenLogin={onOpenLogin}
        userName={userName}
      />
      <Tabs
        variant="soft-rounded"
        align="center"
        colorScheme="red"
        isLazy
        defaultIndex={0}
        pt={{ xl: "2", "2xl": "10" }}
      >
        <Flex width={"100%"} m={0} pt={0}>
          <Heading
            fontWeight={"extrabold"}
            //bgGradient="linear(to-r,yellow.500,yellow.700,yellow.900)"
            color={"yellow.200"}
            fontStyle={"oblique"}
            sx={{ flex: 1 }}
            //bgClip="text"
            size={{ base: "lg", lg: "xl" }}
          >
            <Flex pl={10}>Bon Voyage</Flex>
          </Heading>
          <TabList mb={"2"}>
            <Tab color={"blackAlpha.700"} name="home">
              Home
            </Tab>

            <Tab color={"blackAlpha.700"} name="trackship">
              Track Shipment
            </Tab>
            <Tab color={"blackAlpha.700"} name="prevorder">
              Previous Orders
            </Tab>
            <Tab color={"blackAlpha.700"} name="updateprofile">
              Update Profile
            </Tab>
          </TabList>
          <div style={{ flex: 1 }}>
            {" "}
            {userDetails.email && <Avatar name={userName.current} />}
          </div>
        </Flex>

        <TabPanels>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "26rem", "2xl": "32rem" }}
          >
            {<Home userDetails={userDetails} setUserDetails={setUserDetails} />}
          </TabPanel>

          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "26rem", "2xl": "32rem" }}
          >
            {<TrackShipment />}
          </TabPanel>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "26rem", "2xl": "32rem" }}
          >
            {<History userDetails={userDetails} />}
          </TabPanel>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "26rem", "2xl": "32rem" }}
          >
            {
              <UpdateProfile
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            }
          </TabPanel>
        </TabPanels>
      </Tabs>

      <HStack
        spacing={4}
        position="absolute"
        bottom={0}
        p={{ xl: "5", "2xl": "10" }}
      >
        <Link href="mailto: pg6272695@gmail.com">
          <Button leftIcon={<MdEmail />} colorScheme="purple" variant="solid">
            Contact Us
          </Button>
        </Link>
      </HStack>
    </>
  );
}

export default App;
