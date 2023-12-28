import Constants from '../../Constants/Input';

export type InputType =
  (typeof Constants.INPUT_TYPE)[keyof typeof Constants.INPUT_TYPE];

export type SimpleInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (arg: string) => void;
  InputType: InputType;
  editable?: boolean;
};
