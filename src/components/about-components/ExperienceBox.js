import React from 'react'
import styles from './ExperienceBox.module.css'

function ExperienceBox(props) {
    if(props.picSide === 'right') {
        return (
            <div className={styles.boxContainerRight}>
                <div className={styles.rightPic}>
                    <a href={props.link} target="_blank">
                        <img className={styles.pic} src={props.src}></img>
                    </a>
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}> {props.title}</h2>
                    <p className={styles.p}> {props.text}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.boxContainerLeft}>
                <div className={styles.leftPic}>
                    <a href={props.link} target="_blank">
                        <img className={styles.pic} src={props.src}></img>
                    </a>
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}> {props.title}</h2>
                    <p className={styles.p}> {props.text}</p>
                </div>
            </div>
          )
    }
}

export default ExperienceBox