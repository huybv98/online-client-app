"use client"

import url from '@/assets/icons/svg/logo.svg'
import urlEmptyWhite from '@/assets/icons/svg/logo-empty-white.svg'

const AppLogo = ({...props}) => {
    const { showLogo} = props

    const handleClick = (url = '') => {
    }

    return (
        <>
            <div className="logo flex items-center cursor-pointer" onClick={() => handleClick()}>
                {showLogo ? (
                    <>
                        <img src={urlEmptyWhite.src} alt="logo" className=""/>
                    </>
                ) : (
                    <>
                        <img src={url.src} alt="logo" className=""/>
                    </>
                )
                }
            </div>
        </>
    )
}

export default AppLogo
