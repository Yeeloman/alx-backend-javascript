import { uploadPhoto, createUser,   } from './utils';

export default function handleProfileSignup() {
    const promise_1 = uploadPhoto();
    const promise_2 = createUser();

    return Promise.all([promise_1, promise_2])
    .then(value => {
        console.log(`${value[0]} and ${value[1]}`)
    }).catch((err) => errconsole.log('Signup system offline'))
}

