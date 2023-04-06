const tg = window.Telegram.WebApp;
 export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            this.MainButton.hide();
        } else {
            this.MainButton.show();
        }
    }
    return {
        onClose,
        onToggleButton,
        tg, 
        user: tg.initDataUnsafe?.user,
    }
}

export default useTelegram;