function _0x2054() {
  const _0x2356d4 = [
    "parse",
    "Berikut\x20adalah\x20data\x20yang\x20bisa\x20kamu\x20pelajari:\x0a\x0a",
    "611925xKMVCK",
    "gpt-3.5-turbo",
    "message",
    "dataset",
    "string",
    "5876705uVZwYa",
    "extra_data",
    "11100951QWVJeT",
    "4CsOkFo",
    "6LjaSbb",
    "create",
    "warn",
    "system",
    "[OpenAI\x20Plugin\x20Error]",
    "1371qfiGdj",
    "chat",
    "2426SkUgjJ",
    "26510420SaxqRy",
    "content",
    "1035167iZTfMw",
    "error",
    "5885368GLyUvv",
    "choices",
  ];
  _0x2054 = function () {
    return _0x2356d4;
  };
  return _0x2054();
}
(function (_0x23a026, _0x113b44) {
  const _0x13a05d = _0x4747,
    _0x2fb2ee = _0x23a026();
  while (!![]) {
    try {
      const _0x3b7330 =
        -parseInt(_0x13a05d(0x160)) / 0x1 +
        (-parseInt(_0x13a05d(0x157)) / 0x2) *
          (-parseInt(_0x13a05d(0x155)) / 0x3) +
        (-parseInt(_0x13a05d(0x168)) / 0x4) *
          (parseInt(_0x13a05d(0x165)) / 0x5) +
        (parseInt(_0x13a05d(0x169)) / 0x6) *
          (-parseInt(_0x13a05d(0x15a)) / 0x7) +
        parseInt(_0x13a05d(0x15c)) / 0x8 +
        -parseInt(_0x13a05d(0x167)) / 0x9 +
        parseInt(_0x13a05d(0x158)) / 0xa;
      if (_0x3b7330 === _0x113b44) break;
      else _0x2fb2ee["push"](_0x2fb2ee["shift"]());
    } catch (_0x4fcdc8) {
      _0x2fb2ee["push"](_0x2fb2ee["shift"]());
    }
  }
})(_0x2054, 0xbc974);
import _0x5a1786 from "openai";
import { manageMessagesCache } from "./pluginHelper.js";
function _0x4747(_0x37d59e, _0x30c21e) {
  const _0x2054a4 = _0x2054();
  return (
    (_0x4747 = function (_0x47476c, _0x35fda5) {
      _0x47476c = _0x47476c - 0x151;
      let _0x394e83 = _0x2054a4[_0x47476c];
      return _0x394e83;
    }),
    _0x4747(_0x37d59e, _0x30c21e)
  );
}
async function openaiPlugin(_0x18b116) {
  const _0x5e1d0b = _0x4747,
    {
      command: _0x399a2e,
      from: _0x404ff1,
      plugin: _0x9837ae,
      device: _0x28821f,
    } = _0x18b116,
    _0x4f59fb = _0x28821f?.[0x0]?.["body"],
    _0x1cf49a = _0x399a2e;
  if (!_0x1cf49a) return { handled: ![] };
  try {
    const _0x36ff40 = new OpenAi({ apiKey: _0x9837ae["main_data"] });
    let _0x877697 = "";
    try {
      const _0x4e8061 =
        typeof _0x9837ae[_0x5e1d0b(0x166)] === _0x5e1d0b(0x164)
          ? JSON[_0x5e1d0b(0x15e)](_0x9837ae["extra_data"])
          : _0x9837ae[_0x5e1d0b(0x166)];
      _0x877697 = _0x4e8061[_0x5e1d0b(0x163)] || "";
    } catch (_0x4476cf) {
      console[_0x5e1d0b(0x152)]("Invalid\x20extra_data\x20format");
    }
    const _0x500fe9 = _0x877697
        ? { role: _0x5e1d0b(0x153), content: _0x5e1d0b(0x15f) + _0x877697 }
        : null,
      _0x20d474 = await manageMessagesCache(
        _0x4f59fb,
        _0x404ff1,
        "user",
        _0x1cf49a
      ),
      _0x527159 = _0x500fe9 ? [_0x500fe9, ..._0x20d474] : _0x20d474,
      _0x217bed = await _0x36ff40[_0x5e1d0b(0x156)]["completions"][
        _0x5e1d0b(0x151)
      ]({ messages: _0x527159, model: _0x5e1d0b(0x161), max_tokens: 0x96 }),
      _0x40a92a =
        _0x217bed[_0x5e1d0b(0x15d)][0x0][_0x5e1d0b(0x162)][_0x5e1d0b(0x159)];
    return (
      await manageMessagesCache(
        _0x4f59fb,
        _0x404ff1,
        "assistant",
        _0x40a92a,
        ![]
      ),
      { handled: !![], reply: { text: _0x40a92a } }
    );
  } catch (_0x2d95cb) {
    return (
      console[_0x5e1d0b(0x15b)](_0x5e1d0b(0x154), _0x2d95cb["message"]),
      { handled: ![] }
    );
  }
}
export default openaiPlugin;
