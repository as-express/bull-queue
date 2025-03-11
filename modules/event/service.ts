import { mailQueue } from "../../utils/queue/event.js";
import { prisma } from "../../config/prisma.js";
import { IEvent } from "./interfaces/create.js";

export const create = async (data: IEvent) => {
    const users = await prisma.user.findMany();

    for (const user of users) {
        await mailQueue.add("sendNotification", {
            email: user.email,
            phone: user.phone,
            telegram: user.telegram,
            message: data.message
        });
    }

    return "Data send to queue";
};
