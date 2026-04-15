(function (_0x493ddf, _0x38f17e) {
  const _0x4fd08b = _0x2070,
    _0x3537b4 = _0x493ddf();
  while (!![]) {
    try {
      const _0x406f9f =
        (parseInt(_0x4fd08b(0x139)) / 0x1) *
          (-parseInt(_0x4fd08b(0x150)) / 0x2) +
        parseInt(_0x4fd08b(0x13d)) / 0x3 +
        parseInt(_0x4fd08b(0x146)) / 0x4 +
        -parseInt(_0x4fd08b(0x13a)) / 0x5 +
        (-parseInt(_0x4fd08b(0x141)) / 0x6) *
          (-parseInt(_0x4fd08b(0x153)) / 0x7) +
        (-parseInt(_0x4fd08b(0x14e)) / 0x8) *
          (parseInt(_0x4fd08b(0x14b)) / 0x9) +
        (-parseInt(_0x4fd08b(0x138)) / 0xa) *
          (-parseInt(_0x4fd08b(0x148)) / 0xb);
      if (_0x406f9f === _0x38f17e) break;
      else _0x3537b4["push"](_0x3537b4["shift"]());
    } catch (_0x5b2454) {
      _0x3537b4["push"](_0x3537b4["shift"]());
    }
  }
})(_0x5ea5, 0xe8454);
function _0x2070(_0x5b5763, _0x377e6b) {
  const _0x5ea54a = _0x5ea5();
  return (
    (_0x2070 = function (_0x20706d, _0x575e32) {
      _0x20706d = _0x20706d - 0x138;
      let _0x43b434 = _0x5ea54a[_0x20706d];
      return _0x43b434;
    }),
    _0x2070(_0x5b5763, _0x377e6b)
  );
}
import { GoogleGenerativeAI } from "@google/generative-ai";
import { manageMessagesCache } from "./pluginHelper.js";
async function geminiAiPlugin(_0x4907f1) {
  const _0x44669b = _0x2070,
    {
      command: _0x42ff25,
      from: _0x91ce17,
      plugin: _0x145615,
      device: _0x2ad003,
    } = _0x4907f1,
    _0x522f6b = _0x2ad003?.[0x0]?.[_0x44669b(0x152)],
    _0x1a8dc3 = _0x42ff25;
  if (!_0x1a8dc3) return { handled: ![] };
  try {
    const _0xccc8c5 = new GoogleGenerativeAI(_0x145615["main_data"]),
      _0xa6a9b2 = _0xccc8c5["getGenerativeModel"]({ model: _0x44669b(0x142) });
    let _0x21f19c = "";
    try {
      const _0x404b34 =
        typeof _0x145615[_0x44669b(0x14d)] === _0x44669b(0x14f)
          ? JSON[_0x44669b(0x14a)](_0x145615[_0x44669b(0x14d)])
          : _0x145615[_0x44669b(0x14d)];
      _0x21f19c = _0x404b34[_0x44669b(0x154)] || "";
    } catch (_0x4ef49a) {
      console[_0x44669b(0x143)](_0x44669b(0x13b));
    }
    const _0x17ae59 = _0x44669b(0x13c) + _0x21f19c,
      _0x193153 = await manageMessagesCache(
        _0x522f6b,
        _0x91ce17,
        _0x44669b(0x147),
        _0x1a8dc3
      ),
      _0x3aa746 = [
        { role: _0x44669b(0x147), parts: [{ text: _0x17ae59 }] },
        ..._0x193153[_0x44669b(0x155)]((_0xe8a187) => {
          const _0x50203a = _0x44669b,
            _0x46583c =
              _0xe8a187[_0x50203a(0x149)] === _0x50203a(0x13e)
                ? _0x50203a(0x156)
                : _0xe8a187[_0x50203a(0x149)];
          return {
            role: _0x46583c,
            parts: [{ text: _0xe8a187[_0x50203a(0x14c)] }],
          };
        }),
      ],
      _0x5aa1f6 = _0xa6a9b2[_0x44669b(0x144)]({
        history: _0x3aa746,
        generationConfig: { maxOutputTokens: 0x64 },
      }),
      _0x2efed2 = await _0x5aa1f6["sendMessage"](_0x1a8dc3),
      _0x12a842 = _0x2efed2["response"][_0x44669b(0x145)]();
    return (
      await manageMessagesCache(
        _0x522f6b,
        _0x91ce17,
        _0x44669b(0x156),
        _0x12a842,
        !![]
      ),
      { handled: !![], reply: { text: _0x12a842 } }
    );
  } catch (_0x5ebfc9) {
    return (
      console[_0x44669b(0x140)](_0x44669b(0x13f), _0x5ebfc9[_0x44669b(0x151)]),
      { handled: ![] }
    );
  }
}
export default geminiAiPlugin;
function _0x5ea5() {
  const _0x5f32e5 = [
    "12wGTlxq",
    "message",
    "body",
    "7OUiFvZ",
    "dataset",
    "map",
    "model",
    "10xuOEWJ",
    "310769aISOkD",
    "5197350RGtApL",
    "Invalid\x20extra_data\x20format",
    "\x0a\x0a\x20here\x20is\x20the\x20data\x20,you\x20can\x20learn\x20from\x20this\x20dataset\x20:",
    "4898169fShwHC",
    "assistant",
    "[Gemini\x20Plugin\x20Error]",
    "error",
    "3696306geIRnS",
    "gemini-1.5-flash",
    "warn",
    "startChat",
    "text",
    "475448DbDJHD",
    "user",
    "23796245QvpvFy",
    "role",
    "parse",
    "2007fDDApr",
    "content",
    "extra_data",
    "24232rAlIjL",
    "string",
  ];
  _0x5ea5 = function () {
    return _0x5f32e5;
  };
  return _0x5ea5();
}
