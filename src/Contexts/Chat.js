import { createContext, useReducer } from "react";

export const ActionTypes = {
  REQUEST: "CHAR_REQUEST",
  RESPPONSE: "CAHT_RESPONSE",
  LIKE: "LIKE_RESPONSE",
  DISLIKE: "DISLIKE_RESPONSE",
};

const intialChatState = {
  requests: new Map(), // request Obj
  response: new Map(), // response Obj
};

export const ChatContext = createContext(intialChatState);

const ChatProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.REQUEST:
        break;
      case ActionTypes.RESPPONSE:
        break;
      case ActionTypes.LIKE:
        break;
      case ActionTypes.DISLIKE:
        break;
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, intialChatState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
