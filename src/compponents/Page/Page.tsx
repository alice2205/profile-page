import React from 'react'
import s from './Page.module.css'
import {User} from "../User/User";
import img from "../assets/iconSet.png";

export function Page() {
    return <>
        <div className={s.content}>
            <User/>
            <div className={s.line} ></div>
            <span>
                <img className={s.img} src={img}></img>
                <p className={s.title_content}>Technologies stack</p>
            </span>
        </div>
    </>

}