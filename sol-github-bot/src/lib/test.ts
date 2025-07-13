import { Actor, HttpAgent } from "@dfinity/agent";

//@ts-ignore
import { idlFactory } from "./ai-agent-icp-backend.did.js";

const CheckCodeQuality = async () => {
  // needs to be changed every 25 mins
  const canisterId = "x2ojg-ciaaa-aaaab-qadba-cai";
  const host = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/";

  const agent = new HttpAgent({ host });
  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });

  const messages = [
    {
      assistant: {
        content: ["asdfg asdas"], // ✅ Wrapped in array for `opt text`
        tool_calls: [
          {
            id: "some-id",
            function: {
              name: "a1dffg",
              arguments: [{ name: "asdfg", value: "asdfgggg" }],
            },
          },
        ],
      },
    },
  ];

  const balance = await actor.chat(messages);

  console.log(balance);
  return balance;
};

await CheckCodeQuality();
