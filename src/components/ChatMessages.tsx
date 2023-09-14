import { useChatContext } from "@/contexts/ChatContext";
import { useUserContext } from "@/contexts/UserContext";

export const ChatMessages = () => {
  const chatContext = useChatContext();
  const userContext = useUserContext();

  return (
    <>
      {chatContext?.chat.map(({ id, text, user }) => (
        <p
          key={id}
          className={`${userContext?.username === user ? "bg-slate-700 text-right ml-auto" : "bg-slate-800 mr-auto"} rounded-md p-2 border border-slate-600 break-words max-w-full font-bold`}
        >
          {user.trim()} <br /> <span className="font-normal">{text}</span>
        </p>
      ))}
    </>
  );
};

// <p className="bg-slate-700 max-w-max mr-auto rounded-md p-2 border border-slate-600 font-bold">
//   Bot <br /> <span className="font-normal">{text}</span>
// </p>
