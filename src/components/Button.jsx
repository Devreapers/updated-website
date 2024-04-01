import React from 'react'

const Button = ({ styles , link }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} onClick={()=>{window.open(link,'_blank')}}>
    Get Started
  </button>
  )
}

export default Button
