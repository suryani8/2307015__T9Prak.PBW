import { useState } from "react";
import ToggleText from "./ToggleText";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h1>Ini Toggle Text</h1>

      <ToggleText
        text="Teks ini muncul dan menghilang sesuai tombol."
        show={showText}
        setShow={setShowText}
      />
    </div>
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setShow(true)}>Tampilkan text</button>
      <button onClick={() => setShow(false)} style={{ marginLeft: "10px" }}>
        Sembunyikan text
      </button>

      {show && <p style={{ marginTop: "20px" }}>{text}</p>}
    </div>
  );
}

export default ToggleText;


