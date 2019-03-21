const setState = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getState = (key) => {
    return JSON.parse(localStorage.getItem(key) || "null")
}

const getDataUri = (url, callback) => {
    let image = new Image();
    image.crossOrigin = 'Anonymous'

    image.onload = function () {
        let canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        canvas.getContext('2d').drawImage(this, 0, 0);
        (typeof callback === 'function') && callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
    };

    image.src = url;
}

const copyImage = (image) => {
    let r = document.createRange()

    r.setStartBefore(image)
    r.setEndAfter(image)
    r.selectNode(image)

    let sel = window.getSelection()
    // sel.addRange(r);

    return document.execCommand('Copy')
}