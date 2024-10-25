import SlackREST from '@sagi.io/workers-slack';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

const web = new SlackREST({ botAccessToken: import.meta.env.SLACK_TOKEN });
const channel = import.meta.env.SLACK_CHANNEL_ID;

export const contactUs = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    message: z.string(),
  }),
  handler: async (input) => {
    await web.chat.postMessage({
      channel,
      text: `<!channel>\n${input.name ? `Navn: ${input.name}\n` : ''}Email: ${input.email}\nMessage: ${input.message}`,
    });
  },
});
