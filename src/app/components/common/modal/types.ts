export interface IModalProps {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

export interface IModalContentStyled {
  modalMainColor: string;
}
