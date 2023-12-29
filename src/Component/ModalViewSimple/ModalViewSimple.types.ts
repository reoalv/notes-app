export type ModalViewSimpleProps = {
  isVisible: boolean;
  onRequestClose: () => void;
  onPressDelete: () => void;
};

export type RenderContentProps = {
  onRequestClose: () => void;
  onPressDelete: () => void;
};
