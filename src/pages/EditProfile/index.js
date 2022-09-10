import { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ILAvatar } from '../../assets'
import { Avatar, Button, Gap, Header, Input } from "../../components"
import { globalAllertAction, userDataAction, userDataSelector } from '../../redux'
import { image2base64 } from '../../utils'
import { user } from "../../configs/constans"

const EditProfile = () => {
    const navigate = useNavigate()
    const userData = useSelector(userDataSelector, shallowEqual)

    const userAvatar = userData?.avatar !== "default" ? `http://${userData?.avatar}` : ILAvatar;
    const [image, setImage] = useState(userAvatar)
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const onAvatarChange = (e) => {
        e.persist()
        image2base64(e.target.files[0]).then((img) => {
            const src = URL.createObjectURL(e.target.files[0])
            setAvatar(img)
            setImage(src)
        })
    }

    const onSubmit = () => {
        user.updateProfile({ name, avatar })
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
                tittle="Edit Profile"
                onClick={() => navigate("/profile")}
            />
            <Avatar image={image} value={avatar} onChange={onAvatarChange} />
            <Gap height={24} />
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Full Name"
                placeholder="Type your full name"
            />
            <Gap height={16} />
            <Button label="Update" onClick={onSubmit} />
        </div>
    )
}

export default EditProfile