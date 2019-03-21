const Popup = (($) => {
    const init = () => {
        console.log($('body'))

        $(document).on('click', '#btn-copy', () => {
            let image = document.getElementById('test-image')

            if (copyImage(image)) {
                alert("Success!")
            } else {
                alert("Failure!")
            }
        })
    }

    init()
    return { init }
})(jQuery)