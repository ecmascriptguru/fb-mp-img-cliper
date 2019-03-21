const WalmartScript = (($) => {
    function getDataUri(url, callback) {
        var image = new Image();
        image.crossOrigin = 'Anonymous'
    
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
    
            canvas.getContext('2d').drawImage(this, 0, 0);
    
            // Get raw image data
            callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
    
            // ... or get as Data URI
            callback(canvas.toDataURL('image/png'));
        };
    
        image.src = url;
    }
    
    const grabImages = () => {
        let images = document.getElementsByClassName('prod-hero-image-carousel-image')//.map(img => getImageData(img))
        return images
    }

    let images = grabImages(),
        image = images[0]
    // if (copyImage(image)) {
    //     alert("Sucess")
    // }
    // let images = grabImages(),
    //     image = images[0],
    //     r = document.createRange(),
    //     sel = window.getSelection();

    // r.setStartBefore(image)
    // r.setEndAfter(image)
    // r.selectNode(image)
    // // r.add(image);
    // // r.select();
    // sel.addRange(r);
 
    // document.execCommand('Copy')

    return {
        grabImages,
    }
})(jQuery)

window.Walmart = WalmartScript