// membuat functio yang akan menerima parameter
function KontenKedua(props) {

    // destructuring props
    const {judul, deskripsi, isi, penutup } = props;

    return(
    // menggunakan data dari data props
    <div>
        <h1>Konsep Props dan State</h1>
        <h2>Belajar membuat komponen yang dinamis</h2>
        <h3>isi</h3>
        <h4>penutup</h4>
    </div>
    )



}
export default KontenKedua;