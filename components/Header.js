import styles from '../styles/Header.module.css'

const Header = ()=>{
    const x = 2
    return (
        <div>
            <h1 className={styles.title}>
                <span>Web Dev</span>News
            </h1>
            <p className={styles.description}>this is a paragraph 
            </p>
        </div>
    )
}
export default Header