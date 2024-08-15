import React from 'react'
import styles from './ExperienceBox.module.css'

function ExperienceBox(props) {
    if(props.picSide === 'right') {
        return (
            <div className={styles.boxContainerRight}>
                <div className={styles.rightPic}>
                    <img src={props.src}></img>
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}> {props.title}</h2>
                    <p className={styles.title}> {props.text}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.boxContainerLeft}>
                <div className={styles.leftPic}>
                    <img className={styles.pic} src={props.src}></img>
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}> {props.title}</h2>
                    <p className={styles.title}> {props.text}</p>
                </div>
            </div>
          )
    }
}

export default ExperienceBox