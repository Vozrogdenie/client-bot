import Button from "../button/button";
import { useEffect } from 'react';
import useTelegram from "../hooks/useTelegram";


function Header(props) {
    const {user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;