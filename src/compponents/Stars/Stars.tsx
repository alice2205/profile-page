import React from 'react'
import s from './Lang.module.css'
type PhotoType = {
    logo?: any
}

export function Lang(props: PhotoType) {
    return <>
        <span className={s.lang_name}>
            <img className={s.img} src={props.logo.link}></img>
            <p className={s.subTitle_content}>{props.logo.title}</p>
        </span>
    </>

}