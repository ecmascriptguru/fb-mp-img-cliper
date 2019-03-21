const Background = (($) => {
    const init = () => {
        chrome.tabs.onActivated.addListener((activeInfo) => {
            let url = new URL(activeInfo.url),
                hostname = url.hostname

            if (hostname.startsWith('www.')) {
                hostname = hostname.substr('www.'.length)
            }
            setState('cur_domain', hostname)
        });
    }

    return {
        init,
    }
})(jQuery)