import { useUserContext } from "@/contexts/UserContext";
import { KeyboardEvent } from "react";

export const InitialSreeen = () => {
  const userContext = useUserContext();

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      if (userContext?.username.trim() === "") return;
      userContext?.goToChatModal();
    }
  };

  return (
    <section className="mt-6 max-w-lg w-full">
      <label htmlFor="name" className="text-xl">
        Qual seu nome?
      </label>
      <div className="flex items-center mt-3">
        <input
          type="text"
          name="name"
          id="name"
          className="p-3 mr-3 flex-1 bg-slate-800 border border-slate-600 outline-none focus:border-slate-300 rounded-md"
          value={userContext?.username}
          onChange={(e) => {
            userContext?.setUsername(e.target.value);
          }}
          onKeyUp={handleKeyUpAction}
        />
        <button
          type="button"
          className="p-3 rounded-md bg-slate-700"
          onClick={userContext?.goToChatModal}
        >
          Iniciar agora
        </button>
      </div>
    </section>
  );
};
