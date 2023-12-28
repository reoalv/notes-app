export type CardProps = {
  id: string;
  title: string;
  body: string;
  isFinished: boolean;
};

export type CardOptProps = {
  onPress: (arg?: CardProps) => void;
};
