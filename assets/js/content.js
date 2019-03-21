let vendor, renderer;
const gl = document.createElement('canvas').getContext('webgl');
if (gl) {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    if (ext) {
        vendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL);
        renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
    } else {
        vendor = 'unknown';
        renderer = 'unknown';
    }
}

chrome.runtime.sendMessage({ type: 'update_webgl_info', vendor, renderer });
