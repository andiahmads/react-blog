import React from 'react'
import Loading from './Loading'
import Toast from './Toast'
import { useSelector } from 'react-redux'
import { RootStore } from '../../utils/TypeScript'


const Alert = () => {

    const { alert } = useSelector((state: RootStore) => state)
    return (
        <div>
            {alert.loading ? <Loading /> : ''}

            {alert.errors && <Toast title="errors"
                body={alert.errors}
                bgColor="bg-danger" />}

            {alert.success && <Toast title="success"
                body={alert.success}
                bgColor="bg-success" />}



        </div>
    )
}

export default Alert
