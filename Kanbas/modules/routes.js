// import db from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    // const modules = db.modules
    //   .filter((m) => m.course === cid);
    const modules = await dao.findAllModules(cid);
    res.send(modules);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    await dao.createModule(newModule)
    // db.modules.push(newModule);
    res.send(newModule);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    // db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    // const moduleIndex = db.modules.findIndex(
    //   (m) => m._id === mid);
    // db.modules[moduleIndex] = {
    //   ...db.modules[moduleIndex],
    //   ...req.body
    // };
    const status = await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  });

  app.put("/api/users/:userId", async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    req.session.currentUser = await dao.findUserById(userId);
    res.json(status);
  });

}

export default ModuleRoutes;