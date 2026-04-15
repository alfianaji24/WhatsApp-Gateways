"use strict";
(function (_0x4d7d5a, _0x1ec19d) {
  const _0x53441a = _0x1dda,
    _0x2de9b4 = _0x4d7d5a();
  while (!![]) {
    try {
      const _0x2eaa58 =
        (-parseInt(_0x53441a(0xb8)) / 0x1) *
          (-parseInt(_0x53441a(0xb3)) / 0x2) +
        -parseInt(_0x53441a(0xab)) / 0x3 +
        -parseInt(_0x53441a(0xc2)) / 0x4 +
        -parseInt(_0x53441a(0xb7)) / 0x5 +
        (parseInt(_0x53441a(0xaf)) / 0x6) * (parseInt(_0x53441a(0xbf)) / 0x7) +
        (parseInt(_0x53441a(0xb5)) / 0x8) * (parseInt(_0x53441a(0xc4)) / 0x9) +
        parseInt(_0x53441a(0xae)) / 0xa;
      if (_0x2eaa58 === _0x1ec19d) break;
      else _0x2de9b4["push"](_0x2de9b4["shift"]());
    } catch (_0x417e05) {
      _0x2de9b4["push"](_0x2de9b4["shift"]());
    }
  }
})(_0x4f2b, 0x1c713);
import _0x4544ee from "fs";
const chats = (_0x41fa5c, _0x278b80) => {
  const _0x8d9c90 = _0x1dda,
    {
      token: _0x370e03,
      type: _0x4269a8,
      jid: _0x5647b6,
    } = _0x41fa5c[_0x8d9c90(0xb2)];
  if (_0x370e03 && _0x4269a8)
    try {
      const _0x5ecb78 = _0x4544ee[_0x8d9c90(0xbd)](
        _0x8d9c90(0xad) + _0x370e03 + _0x8d9c90(0xb0),
        { encoding: _0x8d9c90(0xbc) }
      );
      let _0x37c71b = JSON[_0x8d9c90(0xb9)](_0x5ecb78);
      if (_0x4269a8 === _0x8d9c90(0xba)) _0x37c71b = _0x37c71b[_0x8d9c90(0xba)];
      else {
        if (_0x4269a8 === "contacts") _0x37c71b = _0x37c71b[_0x8d9c90(0xbb)];
        else {
          if (_0x4269a8 === _0x8d9c90(0xb1))
            _0x5647b6
              ? (_0x37c71b = _0x37c71b["messages"][_0x5647b6])
              : (_0x37c71b = _0x37c71b[_0x8d9c90(0xb1)]);
          else
            return _0x278b80[_0x8d9c90(0xac)]({
              status: ![],
              message: _0x8d9c90(0xc0),
            });
        }
      }
      if (typeof _0x37c71b === _0x8d9c90(0xaa))
        return _0x278b80[_0x8d9c90(0xac)]({
          status: ![],
          message: _0x8d9c90(0xc3),
        });
      return _0x278b80["send"](
        _0x37c71b[_0x8d9c90(0xb4)] > 0x0 ? _0x37c71b["reverse"]() : _0x37c71b
      );
    } catch (_0x3bd19d) {
      return (
        process[_0x8d9c90(0xc1)][_0x8d9c90(0xb6)] !== _0x8d9c90(0xbe)
          ? console["log"](_0x3bd19d)
          : null,
        _0x278b80["send"]({ status: ![], error: _0x3bd19d })
      );
    }
  _0x278b80["send"]({ status: ![], error: "wrong\x20parameters" });
};
export { chats };
function _0x1dda(_0x100b43, _0x1c8454) {
  const _0x4f2b38 = _0x4f2b();
  return (
    (_0x1dda = function (_0x1dda63, _0x4b3315) {
      _0x1dda63 = _0x1dda63 - 0xaa;
      let _0x109987 = _0x4f2b38[_0x1dda63];
      return _0x109987;
    }),
    _0x1dda(_0x100b43, _0x1c8454)
  );
}
function _0x4f2b() {
  const _0x4ea68b = [
    "parse",
    "chats",
    "contacts",
    "utf8",
    "readFileSync",
    "production",
    "608937yZoyFw",
    "Unknown\x20type",
    "env",
    "516180qUnbjt",
    "Data\x20Not\x20Found",
    "9684edJpEm",
    "undefined",
    "541230bpiCfJ",
    "send",
    "credentials/",
    "2080510BWCEub",
    "12jhKTkY",
    "/multistore.js",
    "messages",
    "body",
    "2486YmLpEO",
    "length",
    "16DvQCUQ",
    "NODE_ENV",
    "170270xjOeqE",
    "61AMXmwo",
  ];
  _0x4f2b = function () {
    return _0x4ea68b;
  };
  return _0x4f2b();
}
