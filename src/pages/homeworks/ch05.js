import styles from '../../styles/div.module.css'
export default function ch_05() {
    return (
        <div className="flex flex-col items-center space-y-5">
            <div id={styles.a}>
                <div id={styles.b}></div>
                <div id={styles.c}>
                    <div id={styles.c1}></div>
                    <div id={styles.c2}></div>
                    <div id={styles.c3}></div>
                    <div id={styles.c4}></div>
                </div>
                <div id={styles.d}>
                    <div id={styles.d1}></div>
                    <div id={styles.d2}></div>
                    <div id={styles.d3}></div>
                </div>
            </div>
        </div>
    )
}