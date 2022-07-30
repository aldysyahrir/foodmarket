import React, { useState } from 'react'
import { useNavigate } from "react-router-dom" 
import { ILFood1 } from '../../assets';
import { Button, Gap, Header, PaymentTab } from '../../components'

const PaymentAddress = () => {
    const navigate = useNavigate();
    const [transactionItems, setTransactionItems] = useState([
        { tittle: "sanggara", value: "2.000.000" },
        { tittle: "Driver", value: "100.000" },
        { tittle: "Tax 10%", value: "200.000" },
        { tittle: "Total Price", value: "2.300.000", isGreen: true },
    ]);

    const [deliverToItems, setDeliverToItems] = useState([
        { tittle: "Name", value: "Aldy" },
        { tittle: "Phone No", value: "085398921385" },
        { tittle: "Address", value: "Tomoni" },
        { tittle: "House No", value: "24 B" },
        { tittle: "City", value: "Lutim, Sul-sel" },
    ]);

    return (
        <div className='flex flex-col w-full bg-gray-100'>
            <Header withArrowLeft tittle="Payment" desc="You deserve best meal" />
            <Gap height={24} className="bg-gray-100" />
            <p className='text-xs font-normal pl-6 pb-2 pt-4 bg-white'>Item Ordered</p>
            <div className='flex flex-row py-2 px-6 items-center bg-white'>
                <img src={ILFood1} width={60} height={60} />
                <div className='flex-1 pl-3'>
                    <p className='text-xs font-normal text-black'>Sanggara</p>
                    <p className='text-xs font-normal text-gray-400'>IDR 2.000.000</p>
                </div>
                <p className='text-xs font-normal text-gray-400'>14 items</p>
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