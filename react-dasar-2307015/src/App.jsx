//import ,modul, komponen
import "./App.css";
import Counter from "./Counter";
import Header from "./header";
import komponenUtama from "./KomponenUtama";
import KontenKedua from "./KontenKedua";
import ToggleText from "./ToggleText";

// regular function
function App(){
  // data yang dikirim
  const namaModul = "Konsep Props dan State"
  const ringkasan = "Belajar membuat komponen yang dinamis"
  const isiJudul = "Tahapan penggunaan react";
  const penutupJudul = "React dapat diakses di web browser";
  
  return(
    <div>
      {/* <KomponenUtama /> */}
      <KontenKedua
      judul={namaModul}
      deskripsi={ringkkasan}
      isi={isiJudul}
      penutup={penutupJudul}
      />
      {/* memanggil komponen counter.jsx */}
      <Counter/>
      {/* memanggil komponen toggle text */}
      <ToggleText/>
    </div>
  )
}

export default App;
