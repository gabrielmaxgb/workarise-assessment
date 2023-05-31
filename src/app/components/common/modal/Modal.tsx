import MuiModal from "@mui/material/Modal";
import { IModalProps } from "./types";
import { ModalContent } from "./ModalStyled";
import { useTheme } from "@mui/material";

export default function Modal({ open, handleClose, children }: IModalProps) {
  const theme = useTheme();

  return (
    <MuiModal open={open} onClose={handleClose}>
      <ModalContent modalMainColor={theme.palette.primary.main}>
        {children}
      </ModalContent>
    </MuiModal>
  );
}
