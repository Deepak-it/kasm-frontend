import React from "react";
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  

  async function handleSubmit(course) {
    try {
      const response = await axios.post("http://localhost:5500/get_user", {
        target_user: {
          username: "random2@kasm.local",
        },
        api_key: "QgHXLoTMeCpk",
        descriptionCourse: course.descriptionCourse,
        api_key_secret: "oWKnc4zl0NXzeYCnTaJjPUZBgTYmE5Yj",
        group_id: course.group_id,
      });
      debugger;
      if (response?.data?.url?.kasm_url) {
        const url = `https://iris.kasmtestingdevops.in${response.data.url.kasm_url}`;
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
      group_id: "a67965f94b5d4ec0899bac1339e75170",
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
