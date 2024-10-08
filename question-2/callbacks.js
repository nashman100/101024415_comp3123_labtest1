const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch(e){
            console.error(e);
        }
    }, 500)
}

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject(new Error('delayed exception!'));
        }, 500);    
    });
}

//delayedSuccess()
//delayedException()

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
    