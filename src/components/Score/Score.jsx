import './Score.css';
import ScoreLittle from './ScoreLittle';

const Score=(props)=>{
    return(
        <div>
            <div className="container">
           <div className="smt">
           <ScoreLittle num="500+" title="Judul Buku" />
            <ScoreLittle num="$0" title="Gratis Peminjaman" />
            <ScoreLittle num="5" title="Kegiatan Rutin" />
           </div>
        </div>
        </div>
        
    )
}
export default Score;