const getStudentsByLocation = (st, city) => st.filter((student) => student.location === city);

export default getStudentsByLocation;
