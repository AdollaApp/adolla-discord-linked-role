import jipdb from "jipdb";
export const db = new jipdb.default("data.json");

export async function storeDiscordTokens(userId, tokens) {
	const uid = Math.floor(Math.random() * 5e6);
	await db.set(`discord-${userId}`, {
		uid,
		tokens,
	});
	db.store(false);
	return uid;
}

export async function getDiscordTokens(userId) {
	return db.get(`discord-${userId}`).tokens;
}
