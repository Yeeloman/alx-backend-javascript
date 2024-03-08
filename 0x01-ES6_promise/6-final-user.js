import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [userResult, photoResult] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: 'fulfilled', value: userResult },
      { status: 'fulfilled', value: photoResult },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
      { status: 'rejected', value: error },
    ];
  }
}
