import {
  registerForEvent
} from "./chunk-4PIBTEDT.mjs";
import {
  errorHandler
} from "./chunk-E4IQTYFO.mjs";
import {
  checkIn
} from "./chunk-APESWRSV.mjs";
import {
  createEvent
} from "./chunk-FSKMTDFR.mjs";
import "./chunk-2CFWMJP5.mjs";
import {
  getAttendeeBadge
} from "./chunk-TIZIFXRC.mjs";
import {
  getEventAttendees
} from "./chunk-6P3WHZBT.mjs";
import {
  getEvent
} from "./chunk-KXP56BVD.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-YVGXYLIE.mjs";

// src/server.ts
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => {
  console.log("Server running on http://localhost:3333");
});
