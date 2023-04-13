import React, { useState } from 'react';


export default function Bai12_TH1() {
    const [age, setAge] = useState(5);
    const [name, setName] = useState('');
    const onChangeAge = () => {
        setAge(age + 1);
    };

    const onChangeName = () => {
        setName('Cee');
    };

    return (
        <div className='container'>
            <div>Xin chào: {name}</div>
            <div>Tuổi là: {age}</div>
            <div onClick={onChangeAge}>Tăng tuổi thêm 1</div>
            <div onClick={onChangeName}>Hiển thị tên</div>
        </div>
    );
}