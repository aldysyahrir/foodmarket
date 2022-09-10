
export const image2base64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
    });
};

export const createParams = (params) => {
    return `?${params.join("&")}`;
};

export const formatThousand = (number = 0) => {
    const thousand = new Intl.NumberFormat()
    return thousand.format(number)
}