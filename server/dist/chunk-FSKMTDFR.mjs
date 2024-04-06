import {
  generateSlug
} from "./chunk-2CFWMJP5.mjs";
import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-YVGXYLIE.mjs";

// src/routes/create-event.ts
import z from "zod";
async function createEvent(app) {
  app.withTypeProvider().post(
    "/events",
    {
      schema: {
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable()
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid()
          })
        }
      }
    },
    async (request, reply) => {
      const { title, details, maximumAttendees } = request.body;
      const slug = generateSlug(title);
      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          slug
        }
      });
      if (eventWithSameSlug) {
        throw new BadRequest("Another event with the same slug already exists.");
      }
      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug
        }
      });
      return reply.status(201).send({ eventId: event.id });
    }
  );
}

export {
  createEvent
};
