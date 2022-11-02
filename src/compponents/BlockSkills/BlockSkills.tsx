import React from 'react'
import s from './Button.module.css'
import share from "../assets/iconsBtn.png";

type BtnsType = {
    title: string
}

export function Button(props: BtnsType) {
    return <>
        <button className={s.btn}>
            <img src={share}></img>
            {props.title}</button>
    </>

}