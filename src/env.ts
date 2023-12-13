import { z } from "zod";

const envSchema = z.object({
	//put your env variables that you want to have validated here
	//NODE_ENV: z.union([z.literal('PROD'), z.literal('DEV')]),
	token: z.string().min(5),
});

const res = envSchema.safeParse(process.env);
if (!res.success) {
	const err = JSON.stringify(res.error.flatten().fieldErrors);
	throw new Error(err);
}
//you can access the typed env variables on this object
export const env = res.data;
