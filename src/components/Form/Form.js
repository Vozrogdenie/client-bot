import { useCallback, useEffect, useState } from 'react';
import './Form.css'
import useTelegram from '../hooks/useTelegram';

function Form() {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const { tg } = useTelegram();

    const onSendData = useCallback( () => {
        const data = {
            country,
            street,
        }
        tg.sendData(JSON.stringify(data));
    }, [tg, country, street])

    useEffect( () => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [tg, onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Oтправить данные'
        }, [])
    })

    useEffect( () => {
        if(!country || !street){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [tg, country, street])
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="email"
                placeholder={'Email.ru'}
                value={street}
                onChange={onChangeStreet}
            />
        </div>
    );
};

export default Form;