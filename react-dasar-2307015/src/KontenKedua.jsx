// membuat functio yang akan menerima parameter
function KontenKedua(props) {

    // destructuring props
    const {judul, deskripsi, isi, penutup } = props;

    return(
    // menggunakan data dari data props
    <div>
        <h1>judul</h1>
        <h2>deskripsi</h2>
        <h3>isi</h3>
        <h4>penutup</h4>
    </div>
    )

}
export default KontenKedua;