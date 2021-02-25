import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/HenriqueMVSS.png" alt="Henrique Silva"/>
            <div>
                <strong>Henrique Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}