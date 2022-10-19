import React from 'react'
import s from './User.module.css'
import photo from "../assets/ava.png"
import icon from "../assets/icon.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icons3.png"
import icon4 from "../assets/icons4.png"
import {Button} from "../Button/Button";

const btns = ['Share', 'Book a call']

export function User() {
    return <>
        <div className={s.content}>
            <img src={photo}></img>
            <div className={s.user_description}>
                <div className={s.box}>
                    <div>
                        <p className={s.name}>Ivan Ivanov</p>
                        <p className={s.user_position}>Senior Frontend Developer</p>
                        <div className={s.icons}>
                        <span className={s.icon_span}>
                            <img className={s.icon} src={icon}></img>
                            <p>6 years - total work experience</p>
                        </span>
                        <span className={s.icon_span}>
                            <img className={s.icon} src={icon2}></img>
                            <p>Overlap with your time zone: XX am - XX pm</p>
                        </span>
                        <span className={s.icon_span}>
                            <img className={s.icon} src={icon3}></img>
                            <p>Availability: Ready to start now</p>
                        </span>
                        <span className={s.icon_span}>
                            <img className={s.icon} src={icon4}></img>
                            <p>Full time - 40 hours per week</p>
                        </span>
                        </div>
                    </div>
                    <Button title={btns[0]}/>
                    <Button title={btns[1]}/>
                </div>

                <p className={s.about_user}>
                    Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus egestas mauris fringilla iaculis
                    feugiat tincidunt auctor tellus. Faucibus enim condimentum est adipiscing varius id fermentum
                    tincidunt nisl. Aliquam. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt
                    nisl. Aliquam. Faucibus enim condimentum est adipiscing varius id fermentum tincidunt nisl. Aliquam.
                </p>
            </div>


        </div>
    </>

}