import App from "./App"

function komponenUtama() {
      const namaPengguna = "Mahasiswa"

  const angka1 = 5;
  const angka2 = 7;
  const materi = ["Belajar Reactjs", "Belajar JavaScript", "Belajar Vite"]
  const kelas = [
    {
      name : "SISFO 1",
      total : 30

    },
    {
      name : "SISFO 2",
      total : 20

    },
    {
      name : "SISFO 3",
      total : 19

    },
  ]

    retun (
                
         <div>
      
      <h1>Selamat Datang  {namaPengguna}</h1>
      <h1>Hallo Dunia React</h1>
      <p>Ini adalah komponen utama dari react</p>

      {/* contoh logika sederhana */}

      {namaPengguna === "Mahasiswa" ? (
        <p> Anda Berhasil Masuk</p>
      ) : (
        <p> Sedang Menunggu..... </p>
      )}

      {/* contoh logika sederhana */}
      <p>hasil dari {angka1} + {angka2} = {angka1+angka2} </p>

      <h1>Daftar Materi</h1>

      {/* contoh pengguna perulangan looping */}
      <ul>
        {materi.map((materi, index) => (
          <li key = {index}>{materi}</li>
        ))}
      </ul>

      {/* mapping kelas */}
      <h1>Terdiri Dari Kelas</h1>
      <ul>
        {kelas.map((item, index) => (
          <li key={index}>{item.name} - Total Mahasiswa: {item.total}</li>
        ))}
      </ul>
    </div>
    )
}

export default komponenUtama; 