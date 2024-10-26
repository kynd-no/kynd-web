import SlackREST from '@sagi.io/workers-slack';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

// const botAccessToken = import.meta.env.SLACK_TOKEN;
// const web = new SlackREST({ botAccessToken });
// const channel = import.meta.env.SLACK_CHANNEL_ID;

export const contactUs = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    message: z.string(),
  }),
  handler: async (input, context) => {
    const botAccessToken = context.locals.runtime.env.SLACK_TOKEN;
    const web = new SlackREST({ botAccessToken });
    const channel = context.locals.runtime.env.SLACK_CHANNEL_ID;

    console.log('botAccessToken', botAccessToken);
    console.log('channel', channel);

    await web.chat.postMessage({
      token: botAccessToken,
      channel,
      text: `<!channel>\n${input.name ? `Navn: ${input.name}\n` : ''}Email: ${input.email}\nMessage: ${input.message}`,
    });
  },
});
