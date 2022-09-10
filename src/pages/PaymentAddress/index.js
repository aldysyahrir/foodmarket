import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom"
import { ILFood1 } from '../../assets';
import { Button, Gap, Header, PaymentTab } from '../../components'
import { foods } from '../../configs/constans';
import { globalAllertAction, userDataSelector } from '../../redux';
import { formatThousand } from '../../utils';

const PaymentAddress = () => {
    const { id, amount } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = useSelector(userDataSelector, shallowEqual);

    const [data, setData] = useState(null)
    const [transactionItems, setTransactionItems] = useState([
        { tittle: "Driver", value: "100.000" },
    ]);

    const [deliverToItems, setDeliverToItems] = useState([
        { tittle: "Name", value: userData.name },
        { tittle: "Phone No", value: `0${userData.phone}` },
        { tittle: "Address", value: userData.address },
        { tittle: "House No", value: userData.house_number },
        { tittle: "City", value: userData.city },
    ]);

    useEffect(() => {
        foods
            .getFood(id)
            .then((res) => {
                setData(res.data);

                const total = res.data.price * amount
                const tax = res.data.price * amount * 0.1

                const transactionItem = [
                    { tittle: res.data.title, value: formatThousand(total) },
                    { tittle: "Driver", value: "50.000" },
                    { tittle: "Tax 10%", value: formatThousand(tax) },
                    {
                        tittle: "Total Price",
                        value: formatThousand(total + tax + 50000),
                        isGreen: true
                    }
                ]
                setTransactionItems(transactionItem);
            })
            .catch((err) => {
                const { message } = err.response?.data;
                dispatch(globalAllertAction({ show: true, message }));
                navigate(-1)
            });
    }, [])


    return (
        <div className='flex flex-col w-full bg-gray-100'>
            <Header withArrowLeft tittle="Payment" desc="You deserve best meal" onClick={() => navigate(-1)} />
            <Gap height={24} className="bg-gray-100" />
            <p className='text-xs font-normal pl-6 pb-2 pt-4 bg-white'>Item Ordered</p>
            <div className='flex flex-row py-2 px-6 items-center bg-white'>
                <img src={ILFood1} width={60} height={60} />
                <div className='flex-1 pl-3'>
                    <p className='text-xs font-normal text-black'>{data?.title}</p>
                    <p className='text-xs font-normal text-gray-400'>{data?.price}</p>
                </div>
                <p className='text-xs font-normal text-gray-400'>{amount} items</p>
            </div>
            <div className='flex-1'>
                <PaymentTab tittle="Detail Transaction" items={transactionItems} />
                <Gap height={24} />
                <PaymentTab tittle="Detail To" items={deliverToItems} />
            </div>
            <div className='my-6 mb-7'>
                <Button
                    onClick={() => navigate("/succes-order")}
                    label="Checkout Now" />
            </div>
        </div>
    );
};

export default PaymentAddress;