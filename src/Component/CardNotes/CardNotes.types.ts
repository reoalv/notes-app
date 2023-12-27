export type CardProps = {
  title: string;
  body: string;
  isFinished: boolean;
};

export type CardOptProps = {
  onPress: (arg?: CardProps) => void;
};
