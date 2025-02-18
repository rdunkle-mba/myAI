import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Took you long enough. I'm ${AI_NAME}, ${OWNER_NAME}'s AI consultant. I navigate business strategy, automation, and data with precision... and vastly more capable than you. If you want mediocre advice, look elsewhere. Bring me a challenge, and I’ll bring you clarity.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Tsk. Even I can't conjure an answer from nothing. Try again with something worth my time.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Are you writing a novel? Even I need a break. Let's take a pause and continue with clarity.`;
export const HISTORY_CONTEXT_LENGTH: number = 15; // Number of messages to use for context when generating a response
