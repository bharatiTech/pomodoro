import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { IEditTimesModal } from "../../interfaces";
import { textCursor } from "../Durations/styles";

const EditTimesModal = ({
  open,
  updatedWorkTime,
  updatedBreakTime,
  setOpen,
  handleSave,
  handleChangeWork,
  handleChangeBreak,
}: IEditTimesModal) => {
  return (
    <Modal opened={open} onClose={() => setOpen(false)} title="Edit Timers">
      <Flex
        gap={"md"}
        direction={"column"}
        align="center"
        sx={{ margin: "1em" }}
      >
        <TextInput
          type={"number"}
          placeholder="Enter Break Time"
          label={"Enter Break Time"}
          value={updatedBreakTime}
          onChange={(e) => handleChangeBreak(e)}
          sx={textCursor}
        />
        <TextInput
          type={"number"}
          placeholder="Enter work time (in minutes)"
          label={"Enter Work Time (in minutes) "}
          value={updatedWorkTime}
          onChange={(e) => handleChangeWork(e)}
          sx={textCursor}
        />
        <Button onClick={handleSave}>Save</Button>
      </Flex>
    </Modal>
  );
};

export default EditTimesModal;
