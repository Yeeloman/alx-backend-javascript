import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const promises = [

    signUpUser(firstName, lastName)
      .then((value) => ({ status: 'fulfilled', value }))
      .catch((error) => ({ status: 'rejected', value: error })),

    uploadPhoto(filename)
      .then((value) => ({ status: 'fulfilled', value }))
      .catch((error) => ({ status: 'rejected', value: error })),

  ];

  return Promise.allSettled(promises)
    .then((results) => results
      .map(({ status, value }) => ({ status, value })));
}
