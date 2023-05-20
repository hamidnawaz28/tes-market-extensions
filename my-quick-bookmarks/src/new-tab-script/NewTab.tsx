import { useEffect } from 'react';


const NewTab = () => {



    useEffect(() => {
        document?.querySelector("iframe")?.addEventListener("load", function () {
            checkEvent();
        })
    }, [])

    return (
        <>
            <iframe src="https://www.search.myquickbookmarks.com/" style={{ width: "100%", overflowY: "scroll", border: "none", height: "100%" }} title='quick-bookmarks'> </iframe >
        </>
    )
}

export default NewTab


function checkEvent() {

    const install = localStorage.install;

    if (!install) {
        const iframe = document?.querySelector("iframe");

        iframe?.contentWindow?.postMessage("firstTime", "*");

        localStorage.install = "done";
    }
}
