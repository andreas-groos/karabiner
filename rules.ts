import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell } from "./utils";

const rules: KarabinerRules[] = [
  {
    description: "⌘ 1 opens Vivaldi",
    manipulators: [
      {
        from: {
          key_code: "1",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'Vivaldi'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 2 opens Cursor",
    manipulators: [
      {
        from: {
          key_code: "2",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'cursor'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 3 opens Warp",
    manipulators: [
      {
        from: {
          key_code: "3",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'warp'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 4 opens Slack",
    manipulators: [
      {
        from: {
          key_code: "4",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'Slack'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 5 opens Figma",
    manipulators: [
      {
        from: {
          key_code: "5",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'Figma'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 6 opens Zoom",
    manipulators: [
      {
        from: {
          key_code: "6",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'zoom.us'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘11 decreases volume",
    manipulators: [
      {
        from: {
          key_code: "f11",
        },
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘12 increases volume",
    manipulators: [
      {
        from: {
          key_code: "f12",
        },
        to: [
          {
            key_code: "volume_increment",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 8 opens Todoist",
    manipulators: [
      {
        from: {
          key_code: "8",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'todoist'",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "⌘ 0 opens Finder",
    manipulators: [
      {
        from: {
          key_code: "0",
          modifiers: {
            mandatory: ["command"],
          },
        },
        to: [
          {
            shell_command: "open -a 'finder'",
          },
        ],
        type: "basic",
      },
    ],
  },
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    spacebar: open(
      "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    ),
    t: {
      // Todoist commands
    },
    // b = "B"rowse
    b: {
      g: open("https://github.com/graphika/voyager/pulls"),
      v: open("https://vercel.com/tfree/voyager/deployments"),
      n: open(
        "https://www.notion.so/graphika/Platform-Updates-e928e31f48b641c5a3e7b8968cfcbda2"
      ),
      s: open(
        "https://app.shortcut.com/graphikatech/epic/24107?cf_workflow=500005177&ct_workflow=all&group_by=workflow_state_id&vc_group_by=day"
      ),
      p: open("https://platform.graphika.com/"),
      l: open("http://localhost:3000/dashboard"),
    },
    // o = "Open" applications
    o: {
      v: app("Vivaldi"),
      c: app("Cursor"),
      s: app("Slack"),
      t: app("Warp"),
      f: app("Figma"),
      z: app("zoom.us"),
      r: app("Finder"),
      m: app("Mail"),
      a: app("ChatGPT"),
      k: app("Calendar"),
    },

    // TODO: This doesn't quite work yet.
    // l = "Layouts" via Raycast's custom window management
    // l: {
    //   // Coding layout
    //   c: shell`
    //     open -a "Visual Studio Code.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topLeft&relativeWidth=0.5"

    //     open -a "Terminal.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topRight&relativeWidth=0.5"
    //   `,
    // },

    // w = "Window" via rectangle.app
    w: {
      semicolon: {
        description: "Window: Hide",
        to: [
          {
            key_code: "h",
            modifiers: ["right_command"],
          },
        ],
      },
      y: rectangle("previous-display"),
      o: rectangle("next-display"),
      k: rectangle("top-half"),
      j: rectangle("bottom-half"),
      h: rectangle("left-half"),
      l: rectangle("right-half"),
      f: rectangle("maximize"),
      u: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control", "right_shift"],
          },
        ],
      },
      i: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control"],
          },
        ],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      b: {
        description: "Window: Back",
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      // Note: No literal connection. Both f and n are already taken.
      m: {
        description: "Window: Forward",
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      comma: {
        description: "Previous Workspace",
        to: [{ key_code: "left_arrow", modifiers: ["right_control"] }],
      },
      period: {
        description: "Next Workspace",
        to: [{ key_code: "right_arrow", modifiers: ["right_control"] }],
      },
      e: {
        description: "Next App",
        to: [
          {
            key_code: "tab",
            modifiers: ["command"],
          },
        ],
      },
      r: {
        description: "Previous App",
        to: [
          {
            key_code: "tab",
            modifiers: ["shift", "command"],
          },
        ],
      },
    },

    // s = "System"
    s: {
      b: open(`raycast://extensions/raycast/system/toggle-bluetooth`),
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      // "D"o not disturb toggle
      d: open(
        `raycast://extensions/yakitrak/do-not-disturb/toggle?launchType=background`
      ),
      // "T"heme
      t: open(`raycast://extensions/raycast/system/toggle-system-appearance`),
      c: open("raycast://extensions/raycast/system/open-camera"),
      // 'v'oice
      v: {
        to: [
          {
            key_code: "spacebar",
            modifiers: ["left_option"],
          },
        ],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },

    // r = "Raycast"
    r: {
      c: open("raycast://extensions/thomas/color-picker/pick-color"),
      n: open("raycast://script-commands/dismiss-notifications"),
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
    },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      profiles: [
        {
          complex_modifications: {
            rules,
          },
          name: "Andreas",
          selected: true,
          virtual_hid_keyboard: { keyboard_type_v2: "ansi" },
        },
      ],
    },
    null,
    2
  )
);
