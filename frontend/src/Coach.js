import React, { useState } from "react";
import axios from "axios";

function Coach() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/aromi-coach",
        null,
        {
          params: { message: message }
        }
      );

      setReply(response.data.response);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h2>🤖 AROMI AI Coach</h2>

      <input
        type="text"
        placeholder="Ask the coach..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={sendMessage}>
        Ask Coach
      </button>

      <h3>Coach Reply</h3>

      <pre>{reply}</pre>

    </div>
  );
}

export default Coach;
