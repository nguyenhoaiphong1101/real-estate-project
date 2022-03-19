import React, { useEffect } from 'react';

function Chat() {

    useEffect(() => {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"2e3c57e246e8700b41b0fd9c5080864ce","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, [])

    return (
       <div></div>
    );
}

export default Chat;