function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student Records</h2>

      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>

          <button
            onClick={() => deleteStudent(index)}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;