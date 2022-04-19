import { useState } from 'react';
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
            <div className={`tag`} style={{ backgroundColor: data[idx].color }}>{data[idx].tag}</div>
            <div className='center'>
                <section className={data[idx].class}>{data[idx].text}</section>
            </div>
            <div className="arrow-box">
                <div onClick={prevClickHandler} className="arrow">&lt;</div>
                <div onClick={nextClickHandler} className="arrow">&gt;</div>
            </div>
        </div>
    )
}