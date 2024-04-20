// import Database from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.post("/api/courses", async (req, res) => {
    const course = { ...req.body, 
      id: new Date().getTime().toString() };
    await dao.createCourse(course)
    const courses = await dao.findAllCourses();
    // Database.courses.push(course);
    res.send(courses);
  });

  app.get("/api/courses", async (req, res) => {
    // const courses = Database.courses;
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
  

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    // Database.courses = Database.courses
    //   .filter((c) => c._id !== id);
    await dao.deleteCourse(id);
    const courses = await dao.findAllCourses();
    res.send(courses)
    // res.sendStatus(204);
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course);
    const courses = await dao.findAllCourses();
    // Database.courses = Database.courses.map((c) =>
    //   c._id === id ? { ...c, ...course } : c
    // );
    res.send(courses)
    // res.sendStatus(204);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id)
    // const course = Database.courses
    //   .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
  
  }