import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Gap, Header, Input } from '../../components'
import { user } from '../../configs/constans'
import { globalAllertAction, userDataAction } from '../../redux'

const UpdateAddress = () => {
    const navigate = useNavigate()

    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [city, setCity] = useState("")
    const dispatch = useDispatch()

    const onSubmit = () => {
        user.updateAddress({
            address,
            phone,
            houseNo,
            city
        })
        .then(res => {
            dispatch(userDataAction(res.data))
            navigate("/profile");
        })
        .catch(err => {
            const { message } = err.response?.data;
            dispatch(globalAllertAction({ show: true, message }));
        });
    }

    return (
        <div className='flex flex-col w-full px-6'>
            <Header
                withArrowLeft
                tittle="Update Address"
                onClick={() => navigate("/profile")}
            />
            <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                label="Address"
                placeholder="Type your address"
            />
            <Gap height={10} />
            <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label="Phone Number"
                placeholder="Type your phone number" type="number"
            />
            <Gap height={10} />
            <Input
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
                label="House No"
                placeholder="Type your house number"
            />
            <Gap height={10} />
            <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="City"
                placeholder="Type your city"
            />
            <Gap height={24} />
            <Button label="Update" onClick={onSubmit} />
        </div>
    )
}

export default UpdateAddress