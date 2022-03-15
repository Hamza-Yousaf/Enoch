export type Action = {
  type: string;
  payload?: any;
};

export type State = {
  innerPath: string;
  messageTab: string;
};
