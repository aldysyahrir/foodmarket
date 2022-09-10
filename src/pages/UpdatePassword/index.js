import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Gap, Header, Input } from '../../components'
import { user } from '../../configs/constans'
import { globalAllertAction, userDataAction, userDataSelector } from '../../redux'

const UpdatePassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")

    const onSubmit = () => {
        if (password === newPassword) {
            const message = "old password & new password can't be the same"
            dispatch(globalAllertAction({ show: true, message }))
        } else if (newPassword !== retypePassword) {
            const message = "new password doesn't match"
            dispatch(globalAllertAction({ show: true, message }))
        } else if (!password || !newPassword || !retypePassword) {
            const message = "field can't be empty"
            dispatch(globalAllertAction({ show: true, message }))
        } else {
            user.updatePassword({ prev_password: password, new_password: newPassword })
                .then(res => {
                    dispatch(userDataAction(res.data))
                    navigate("/profile");
                })
                .catch(err => {
                    const { message } = err.response?.data;
                    dispatch(globalAllertAction({ show: true, message }));
                });
        }
    }

    return (
        <div className='flex flex-col w-full px-6'>
            <Header
                withArrowLeft
                tittle="Update Password"
                onClick={() => navigate("/profile")}
            />
            <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Old Password"
                placeholder="Type your old password" type="password"
            />
            <Gap height={10} />
            <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                label="New Password"
                placeholder="Type your new password" type="password"
            />
            <Gap height={10} />
            <Input
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                label="Retype your new password"
                placeholder="Type your new password" type="password"
            />
            <Gap height={16} />
            <Button label="Update" onClick={onSubmit} />
        </div>
    )
}

export default UpdatePassword