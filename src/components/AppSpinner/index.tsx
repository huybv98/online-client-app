"use client"

import './index.scss'
import url from '@/assets/icons/svg/loading.svg'

interface Props {
    loading?: boolean
    type?: 'default' | 'fallback'
}

const AppSpinner = ({...props}) => {
    const {loading, type} = props

    const Spinner = () => (
        <div className="ui-spinner">
            <div className="ui-spinner__loader">
                <img src={url} alt="spinner"/>
            </div>
        </div>
    )

    return type === 'fallback' ? <Spinner/> : loading ? <Spinner/> : null
}

AppSpinner.defaultProps = {loading: false, type: 'default'}

export default AppSpinner