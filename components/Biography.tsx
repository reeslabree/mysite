import React from "react";
import styles from '../styles/components/Biography.module.css'

const Biography = () => {
    return(
        <div className={styles.container}>
            <span className={styles.content}>
                Welcome to my corner of the internet, subject of my personal musings. I'm a software developer in Boulder, CO with a project to-do list the length of my arm.
                <br />
                <br />
                My latest fascination is <b>blockchain</b>, and I've been spending a lot of my free time over the past 6 months learning how to develop on <b>Ethereum</b> and <b>Solana</b>.
                I've also been learning some <b>React</b> and <b>NextJS</b> to complement, in the form of this site.
                <br />
                <br />
                Checkout my <a href='/blog'>blog</a>, where I try to document at least some of my thoughts on what I've been working on, or my <a href='/projects'>projects</a> page which contains a brief overview of work I'm most proud of.
            </span>
        </div>
    )
}
export default Biography;