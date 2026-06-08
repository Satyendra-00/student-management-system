import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const handleSubmit = () => {
  const student = {
    name,
    age,
    course,
  };

  addStudent(student);

  setName("");
  setAge("");
  setCourse("");
};
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
  Add Student
</button>
    </div>
  );
}

export default StudentForm;