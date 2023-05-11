import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import Lottie from "react-lottie";
const center = { lat: 48.8584, lng: 2.2949 };

export default function TrackShipment() {
  //const map = useMap();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./lottiefiles/MOGRAPH.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [orderId, setOrderId] = useState("");
  //const { isLoaded } = useJsApiLoader({
  //  googleMapsApiKey: "AIzaSyDl8y2ZP0ZXT9s9hrLCfRIuyP1jHPIUdSs",
  // });
  //if (!isLoaded) {
  //return <Skeleton />;
  // }
  const [orderLocation, setOrderLocation] = useState([]);
  function onChangeOrderId(e) {
    setOrderId(e.target.value);
  }
  // console.log(isLoaded);

  const [showLocation, setShowLocation] = useState("");

  async function onClickTrackOrder() {
    const res = await axios.get(`http://localhost:8080/users/${orderId}`);
    // let result = new google.maps.Geocoder(); // eslint-disable-line
    // const xxx = await result.geocode({ address: "bhopal" });
    // console.log(xxx);
    // console.log(res.data);
    // const location = res.data.currentLocation;
    const obj = {
      text: res.data.currentLocation,
    };
    setShowLocation(obj.text.split(",")[0]);
    const urllocation = new URLSearchParams(obj).toString();
    const location = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?${urllocation}&apiKey=3ab20da7ff4d4f828591517860636c2d`
    );
    const lat = location.data.features[0].properties.lat;
    const lon = location.data.features[0].properties.lon;
    setOrderLocation([lat, lon]);
    // map.setView(orderLocation);
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
      <Stack
        height={"100%"}
        width={"100%"}
        spacing={"5"}
        direction={{ base: "column", xl: "row" }}
      >
        <VStack
          //bgColor={"red"}
          h={"100%"}
          width={{ base: "100%", xl: "50%" }}
          spacing={"5"}
        >
          <FormControl as="fieldset">
            <HStack spacing="24px">
              <FormLabel borderColor={"black"}>Enter Your Order ID::</FormLabel>
            </HStack>

            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              value={orderId}
              onChange={onChangeOrderId}
            ></Input>
          </FormControl>
          <ButtonGroup p={4} variant="solid" spacing="6">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button onClick={onClickTrackOrder} colorScheme="blue">
                GO
              </Button>
            </motion.div>
          </ButtonGroup>
        </VStack>
        <Box
          //bgColor={"green"}
          height={{ base: "20rem", xl: "100%" }}
          width={"100%"}
        >
          {/*<GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
  ></GoogleMap>*/}
          {orderLocation.length ? (
            <MapContainer
              center={[23.42605475, 75.4064082]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[orderLocation[0], orderLocation[1]]}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{showLocation}</Popup>
              </Marker>
              <RecenterAutomatically
                lat={orderLocation[0]}
                lng={orderLocation[1]}
              />
            </MapContainer>
          ) : (
            <Lottie
              options={defaultOptions}
              style={{ position: "relative", height: "100%", width: "100%" }}
              isClickToPauseDisabled="true"
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
}
const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
    //console.log("done");
  }, [lat, lng, map]);
  return null;
};
