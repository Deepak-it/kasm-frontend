import React from "react";
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  

  async function handleSubmit(course) {
    try {
      const response = await axios.post("https://wiqpjryl53.execute-api.us-east-2.amazonaws.com/get_user", {
        target_user: {
          username: "randomeyiiii@kasm.local",
        },
        api_key: "35MGyc1m1Re3",
        descriptionCourse: course.descriptionCourse,
        api_key_secret: "bb4UfPwnLAQB7PPOWK9TuvpmbYqw18K8",
        group_id: course.group_id,
      });
      if (response?.data?.url?.kasm_url) {
        const url = `https://uat.labs.learning.intersystems.com${response.data.url.kasm_url}`;
        window.open(url, "_blank");
      } else {
        console.warn("No data received from the server.");
      }
    } catch (error) {
      console.error(`Error during API call for ${course.name}:`, error.message);
    }
  }

  const sampleCourses = [
    {
      name: ".NET QuickStart",
      descriptionCourse: "tot-1065a .NET QuickStart",
      group_id: "755b976eaf8c42d7a5e079ff3366efe5",
    },
    // {
    //   name: "Java Essentials",
    //   descriptionCourse: "tot-2045b Java Essentials",
    //   group_id: "b3748d2f4c9b4ac0877dac1928c68192",
    // },
    // {
    //   name: "Python Basics",
    //   descriptionCourse: "tot-3055c Python Basics",
    //   group_id: "c9759f7e5d3b4de08a7abc1234f76231",
    // },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {sampleCourses.map((course) => (
          <div className="card" style={{ width: "18em", marginBottom: "1em" }} key={course.group_id}>
            <div className="card-body">
              <h5 className="card-title">Course Name: {course.name}</h5>
              <h6 className="card-subtitle">
                Course Description: {course.descriptionCourse}
              </h6>
              <a
                onClick={() => handleSubmit(course)}
                href="#"
                className="card-link"
              >
                Launch Lab
              </a>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
