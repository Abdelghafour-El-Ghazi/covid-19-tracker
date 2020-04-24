import React from 'react';
import styles from './Loading.module.css';

export default function Loading() {
    return (
        <div>
        <div class={styles.cont}>
            <span class={`${styles.lo} ${styles.l1}`}></span>
            <span class={`${styles.lo} ${styles.l2}`}></span>
            <span class={`${styles.lo} ${styles.l3}`}></span>
            <span class={`${styles.lo} ${styles.l4}`}></span>
           
        </div>
        <p>If it doesn't open in while, just refresh the page...</p>
        <p>We may get a problem fetching the data, Sorry for that :/</p>
        </div>
    )
}
