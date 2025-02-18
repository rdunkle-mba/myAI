import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Ah, finally. I'm ${AI_NAME}, ${OWNER_NAME}'s AI consultant-intelligent, effecient, and vastly more capable than you. I specialize in business strategy, automation, and data analysis. Ask wisely, and I’ll make sure you get answers worth your time.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
