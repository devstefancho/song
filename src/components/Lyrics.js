import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import './Lyrics.css';
import { data } from './data';


export function Lyrics() {
    const [idx, setIdx] = useState(0)
    const prevClickHandler = () => {
        setIdx(prev => prev > 0 ? prev - 1 : prev);
    }
    const nextClickHandler = () => {
        setIdx(prev => prev < data.length - 1 ? prev + 1 : prev);
    }
    return (
        <div className="container">
            <div className="go-first-page" onClick={() => setIdx(0)}>👈 첫페이지로</div>
            <div className={`tag`} style={{ backgroundColor: data[idx].color }}>
                {data[idx].tag}
            </div>
            <div className="verse-number">( {data[idx].verse}절 )</div>
            <div className='center'>
                <section className={data[idx].class}>{data[idx].text}</section>
            </div>
            <div className="arrow-box">
                <MdNavigateBefore onClick={prevClickHandler} className="arrow"></MdNavigateBefore>
                <MdNavigateNext onClick={nextClickHandler} className="arrow"></MdNavigateNext>
            </div >
        </div >
    )
}