import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import images from '../models/images.png'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src={images} height={30} width={200} />
            <span>Student Intros</span>
            <WalletMultiButton />
        </div>
    )
}