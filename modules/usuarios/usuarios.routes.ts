import express, { Express } from "express";
import { listadoUsuarios } from "./usuarios.service";

const usuariosRoutes = express.Router();

usuariosRoutes.get('/', listadoUsuarios);
export default usuariosRoutes;