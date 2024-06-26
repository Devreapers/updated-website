import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Explore our solutions now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Seamless project execution, accelerated growth. Elevate your business globally with our expertise, simplifying complexities for unparalleled success.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button link={'https://www.youtube.com'} />
      </div>
    </section>
  )
}

export default CTA
