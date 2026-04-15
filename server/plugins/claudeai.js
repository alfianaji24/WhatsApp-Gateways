function _0x1862() {
  const _0x57ef3d = [
    "6uPlole",
    "string",
    "messages",
    "content",
    "111790llHPbb",
    "create",
    "2610AsauuH",
    "message",
    "main_data",
    "3777991GACjFu",
    "role",
    "Berikut\x20adalah\x20data\x20yang\x20bisa\x20kamu\x20pelajari:\x0a\x0a",
    "391080ZcPpmL",
    "2177468YNhBaY",
    "warn",
    "294jymsUk",
    "3885597DdKsDJ",
    "526847UvTqgJ",
    "map",
    "user",
    "Invalid\x20extra_data\x20format",
    "assistant",
  ];
  _0x1862 = function () {
    return _0x57ef3d;
  };
  return _0x1862();
}
(function (_0x5e2ac3, _0x3d31d3) {
  const _0x50bac4 = _0x5742,
    _0x180d81 = _0x5e2ac3();
  while (!![]) {
    try {
      const _0x364c26 =
        -parseInt(_0x50bac4(0x7e)) / 0x1 +
        parseInt(_0x50bac4(0x71)) / 0x2 +
        (-parseInt(_0x50bac4(0x6d)) / 0x3) *
          (-parseInt(_0x50bac4(0x7a)) / 0x4) +
        (parseInt(_0x50bac4(0x73)) / 0x5) * (parseInt(_0x50bac4(0x7c)) / 0x6) +
        -parseInt(_0x50bac4(0x76)) / 0x7 +
        parseInt(_0x50bac4(0x79)) / 0x8 +
        parseInt(_0x50bac4(0x7d)) / 0x9;
      if (_0x364c26 === _0x3d31d3) break;
      else _0x180d81["push"](_0x180d81["shift"]());
    } catch (_0x4fde08) {
      _0x180d81["push"](_0x180d81["shift"]());
    }
  }
})(_0x1862, 0x8ea49);
import _0x48f1e3 from "@anthropic-ai/sdk";
function _0x5742(_0x44797c, _0x651933) {
  const _0x186215 = _0x1862();
  return (
    (_0x5742 = function (_0x57420d, _0x28e43a) {
      _0x57420d = _0x57420d - 0x6b;
      let _0x29ffec = _0x186215[_0x57420d];
      return _0x29ffec;
    }),
    _0x5742(_0x44797c, _0x651933)
  );
}
import { manageMessagesCache } from "./pluginHelper.js";
async function claudeAiPlugin(_0x369881) {
  const _0x45d5a5 = _0x5742,
    {
      command: _0x597d32,
      from: _0x377a65,
      plugin: _0x2122ef,
      device: _0x3d40db,
    } = _0x369881,
    _0x17a9a3 = _0x3d40db?.[0x0]?.["body"],
    _0x2ab28f = _0x597d32;
  if (!_0x2ab28f) return { handled: ![] };
  try {
    const _0x12040f = new _0x48f1e3({ apiKey: _0x2122ef[_0x45d5a5(0x75)] });
    let _0x1fc4d3 = "";
    try {
      const _0x9363a8 =
        typeof _0x2122ef["extra_data"] === _0x45d5a5(0x6e)
          ? JSON["parse"](_0x2122ef["extra_data"])
          : _0x2122ef["extra_data"];
      _0x1fc4d3 = _0x9363a8["dataset"] || "";
    } catch (_0x4118e1) {
      console[_0x45d5a5(0x7b)](_0x45d5a5(0x6b));
    }
    const _0x1c4940 = await manageMessagesCache(
        _0x17a9a3,
        _0x377a65,
        "user",
        _0x2ab28f,
        ![]
      ),
      _0xca2bb2 = _0x1c4940[_0x45d5a5(0x7f)]((_0x5cce4a) => ({
        role:
          _0x5cce4a[_0x45d5a5(0x77)] === "assistant"
            ? _0x45d5a5(0x6c)
            : _0x45d5a5(0x80),
        content: _0x5cce4a[_0x45d5a5(0x70)],
      })),
      _0x17b0cd = _0x1fc4d3 ? _0x45d5a5(0x78) + _0x1fc4d3 : undefined,
      _0x25b47e = await _0x12040f[_0x45d5a5(0x6f)][_0x45d5a5(0x72)]({
        model: "claude-3-haiku-20240307",
        max_tokens: 0x96,
        system: _0x17b0cd,
        messages: _0xca2bb2,
      }),
      _0x92a3e3 = _0x25b47e[_0x45d5a5(0x70)][0x0]["text"];
    return (
      await manageMessagesCache(
        _0x17a9a3,
        _0x377a65,
        _0x45d5a5(0x6c),
        _0x92a3e3,
        ![]
      ),
      { handled: !![], reply: { text: _0x92a3e3 } }
    );
  } catch (_0x5c8639) {
    return (
      console["error"](
        "[Claude\x20Plugin\x20Error]",
        _0x5c8639[_0x45d5a5(0x74)]
      ),
      { handled: ![] }
    );
  }
}
export default claudeAiPlugin;
