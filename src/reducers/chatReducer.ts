import { Message } from "@/@types/Message";

type addAction = {
  type: "add";
  payload: {
    user: string;
    text: string;
  };
};

type ChatActions = addAction;

export const chatReducer = (state: Message[], actions: ChatActions) => {
  switch (actions.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          user: actions.payload.user,
          text: actions.payload.text,
        },
      ];
    default:
      return state;
  }
};
