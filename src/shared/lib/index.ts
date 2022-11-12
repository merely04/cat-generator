export const loadImage = (url: string) => {
    return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url;
        loadImg.onload = () => resolve(loadImg.src);
        loadImg.onerror = err => reject(err);
    });
};
