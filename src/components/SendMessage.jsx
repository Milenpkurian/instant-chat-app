import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter Valid Message...");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-200 py-6 shadow-lg">
      <form onSubmit={handleMessage} className="containerWrap flex px-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input w-full rounded-r-none bg-gray-100 text-black focus:outline-none"
        />
        <button
          type="submit"
          className="w-auto rounded-r-lg bg-gray-500 px-5 text-sm text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
