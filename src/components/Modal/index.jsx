import styles from './Modal.module.scss'

export const Modal = ({ images, isActive, clickHandler }) => {
    
    return (
        <>
            {
                isActive 
                ?
                <div className={styles.modal}>
                    <div 
                        className={styles.shadow}
                        onClick={clickHandler}>
                    </div>
                    <div className={styles.content}>
                        {
                            images.map((item) => {
                                return (
                                    <img src={item} alt="ia,age"/>
                                )
                            })
                        }
                    </div>
                </div> 
                :
                <></>
            }
        </>
  )
}
