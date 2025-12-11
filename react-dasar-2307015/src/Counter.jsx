import { useState } from "react"

function Counter(){

    // Mendeklaraskan state
    const [count, setCount] = useState(0)

    // handler count menambah hitungan
    const handlerReset = () => {
        // 0
        setCount(0)
    }
    //handler count menambah hitungan
    const handlerCount = () => {
        // 0 + 1
        setCount(count +1)
    }
    //handler count mengurangi hitungan
    const handlerMinus = () => {
        setCount(count -1)
    };

    return (
        <div
        className=""
        style={{ padding: "10px", border: "1px solid #ccc" }}>
            <h3>Aplikasi Counter Sederhana</h3>
            {/* {menampilkan state (count)} */}
            <p>Hitungan Saat ini: {count}</p>

            <button
            onClick={handlerCount}>
                Tambah (+)
            </button>

             <button
            onClick={handlerMinus}>
                Kurang (-)
            </button>

             <button
            onClick={handlerReset}>
                Reset (0)
            </button>

        </div>    
    )
}

export default Counter;