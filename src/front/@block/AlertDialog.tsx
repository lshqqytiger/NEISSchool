import React from "react";
import {
  AlertDialog as _AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export const AlertDialog = ({ title, text, children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const confirmRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>{text}</Button>
      <_AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={confirmRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{title}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{children}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={confirmRef} onClick={onClose}>
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </_AlertDialog>
    </>
  );
};
