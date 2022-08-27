const errorHandler = (error) => {
    console.log('error', error)
    return Promise.reject(error);
}

export default errorHandler;