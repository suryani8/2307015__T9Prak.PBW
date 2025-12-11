import { useState } from "react";

function ToggleText({ show }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {show === true && <p>Suryani 2307015</p>}
      {show === false && <p>text disembunyikan</p>}
    </div>
  );
}

function App() {
  const [show, setShow] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Ini Toggle Text</h1>

      {/* Hasil tampil berada di atas tombol */}
      <ToggleText show={show} />

      <button onClick={() => setShow(true)} style={{ marginTop: "15px" }}>
        Tampilkan text
      </button>

      <button
        onClick={() => setShow(false)}
        style={{ marginLeft: "10px" }}
      >
        Sembunyikan text
      </button>
    </div>
  );
}

export default App;
