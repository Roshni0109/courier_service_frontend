import { FormLabel, HStack, Input, VStack } from "@chakra-ui/react";

export default function HomeComponent({ userDetails, setUserDetails }) {
  function onChangeUserDetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <HStack>
        <VStack spacing={2}>
          <HStack>
            <FormLabel width={"60"} htmlFor="nameOfSender">
              Name of Sender:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="nameOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.nameOfSender}
              id="nameOfSender"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="phoneOfSender">
              Phone Number of Sender:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="phoneOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.phoneOfSender}
              id="phoneOfSender"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="stateOfSender">
              State:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="stateOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.stateOfSender}
              id="stateOfSender"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="cityOfSender">
              City:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="cityOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.cityOfSender}
              id="cityOfSender"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="addressOfSender">
              From:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="addressOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.addressOfSender}
              id="addressOfSender"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="pincodeOfSender">
              Pin code:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="pincodeOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.pincodeOfSender}
              id="pincodeOfSender"
            />
          </HStack>
        </VStack>

        <VStack spacing={2}>
          <HStack>
            <FormLabel width={"60"} htmlFor="nameOfReceiver">
              Name of Receiver:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="nameOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.nameOfReceiver}
              id="nameOfReceiver"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="phoneOfReceiver">
              Phone Number of Receiver:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="phoneOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.phoneOfReceiver}
              id="phoneOfReceiver"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="stateOfReceiver">
              State:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="stateOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.stateOfReceiver}
              id="stateOfReceiver"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="cityOfReceiver">
              City:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="cityOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.cityOfReceiver}
              id="cityOfReceiver"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="addressOfReceiver">
              To:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="addressOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.addressOfReceiver}
              id="addressOfReceiver"
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="pincodeOfReceiver">
              Pin code:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="pincodeOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.pincodeOfReceiver}
              id="pincodeOfReceiver"
            />
          </HStack>
        </VStack>
      </HStack>

      <HStack mt={"2"} alignItems={"stretch"}>
        <FormLabel width={"40"} htmlFor="additionalDetails">
          Anything else you would like to add:
        </FormLabel>
        <Input
          variant={"outline"}
          type="text"
          borderColor={"black"}
          name="additionalDetails"
          onChange={onChangeUserDetails}
          value={userDetails.additionalDetails}
          id="additionalDetails"
        />
      </HStack>
    </div>
  );
}
