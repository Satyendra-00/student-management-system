import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";
function App() {
  const [students, setStudents] = useState([]);
  const addStudent = (student) => {
  setStudents([...students, student]);
};
const deleteStudent = (index) => {
  setStudents(
    students.filter((_, i) => i !== index)
  );
};

return (
  <div className="container">
    <h1>Student Management System</h1>

    <StudentForm addStudent={addStudent} />

    <StudentList
      students={students}
      deleteStudent={deleteStudent}
    />
  </div>
);
}

export default App;