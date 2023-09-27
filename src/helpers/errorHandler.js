export const errorHandler = (err) => {
    if(process.env.NODE_ENV !== 'production'){
        console.log(err);
    }
}