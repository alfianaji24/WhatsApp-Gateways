function _0x55b6(_0x14fe9a, _0x613352) {
  const _0x57b278 = _0x57b2();
  return (
    (_0x55b6 = function (_0x55b6f8, _0x422868) {
      _0x55b6f8 = _0x55b6f8 - 0xa1;
      let _0x109d08 = _0x57b278[_0x55b6f8];
      return _0x109d08;
    }),
    _0x55b6(_0x14fe9a, _0x613352)
  );
}
(function (_0xc62d88, _0xe8ae31) {
  const _0x243d6a = _0x55b6,
    _0x2da373 = _0xc62d88();
  while (!![]) {
    try {
      const _0x5b5227 =
        -parseInt(_0x243d6a(0xb7)) / 0x1 +
        (-parseInt(_0x243d6a(0xa2)) / 0x2) *
          (-parseInt(_0x243d6a(0xb8)) / 0x3) +
        -parseInt(_0x243d6a(0xb0)) / 0x4 +
        (parseInt(_0x243d6a(0xae)) / 0x5) * (parseInt(_0x243d6a(0xb1)) / 0x6) +
        (parseInt(_0x243d6a(0xb6)) / 0x7) * (parseInt(_0x243d6a(0xbb)) / 0x8) +
        parseInt(_0x243d6a(0xa8)) / 0x9 +
        parseInt(_0x243d6a(0xab)) / 0xa;
      if (_0x5b5227 === _0xe8ae31) break;
      else _0x2da373["push"](_0x2da373["shift"]());
    } catch (_0x4ec814) {
      _0x2da373["push"](_0x2da373["shift"]());
    }
  }
})(_0x57b2, 0xce752);
import _0x2d346c from "axios";
async function googleSheetSearchPlugin(_0x424581) {
  const _0x57b9e8 = _0x55b6,
    { command: _0x28b786, plugin: _0xf2cbf8 } = _0x424581,
    _0x24f648 = _0x28b786["slice"](0x6)["trim"](),
    _0x577bf6 = _0xf2cbf8[_0x57b9e8(0xa6)],
    _0x3c47c6 =
      typeof _0xf2cbf8["extra_data"] === "string"
        ? JSON[_0x57b9e8(0xa3)](_0xf2cbf8[_0x57b9e8(0xa4)])
        : _0xf2cbf8[_0x57b9e8(0xa4)],
    _0xbfb299 = _0x3c47c6[_0x57b9e8(0xac)];
  if (!_0x577bf6) return { handled: ![] };
  try {
    const _0x38520a = _0x577bf6[_0x57b9e8(0xb2)](/\/d\/(.*?)\//);
    if (!_0x38520a) return { handled: ![] };
    const _0x58df8e = _0x38520a[0x1],
      _0x1cfebf = _0x57b9e8(0xb4),
      _0x1bf6ed = _0xbfb299,
      _0x2cf290 =
        _0x57b9e8(0xb5) +
        _0x58df8e +
        _0x57b9e8(0xaa) +
        _0x1cfebf +
        _0x57b9e8(0xa5) +
        _0x1bf6ed,
      _0x6d4ae6 = await _0x2d346c[_0x57b9e8(0xad)](_0x2cf290),
      _0x51ea2e = _0x6d4ae6[_0x57b9e8(0xb3)]["values"];
    if (!_0x51ea2e || _0x51ea2e[_0x57b9e8(0xb9)] === 0x0)
      return { handled: ![] };
    for (const _0x441eac of _0x51ea2e) {
      if (_0x441eac[0x0] === _0x28b786) {
        let _0x8fb584 = _0x441eac[0x1] || "";
        for (let _0x159b08 = 0x0; _0x159b08 < 0x5; _0x159b08++) {
          const _0x5e7c64 = _0x57b9e8(0xaf) + (_0x159b08 + 0x1) + "}}";
          _0x441eac[_0x159b08 + 0x2] &&
            (_0x8fb584 = _0x8fb584[_0x57b9e8(0xa7)](
              new RegExp(_0x5e7c64, "g"),
              _0x441eac[_0x159b08 + 0x2]
            ));
        }
        return { handled: !![], reply: { text: _0x8fb584 } };
      }
    }
    return { handled: ![] };
  } catch (_0x49f28d) {
    return (
      console[_0x57b9e8(0xa9)](
        _0x57b9e8(0xa1),
        _0x49f28d["response"]?.[_0x57b9e8(0xb3)] || _0x49f28d[_0x57b9e8(0xba)]
      ),
      { handled: ![] }
    );
  }
}
export default googleSheetSearchPlugin;
function _0x57b2() {
  const _0x392941 = [
    "1696590gsStof",
    "error",
    "/values/",
    "2248860qXtYEF",
    "googlekey",
    "get",
    "30ZbLeiG",
    "{{var",
    "5256376rDDYxv",
    "1238064cOvdHi",
    "match",
    "data",
    "Sheet1!A:E",
    "https://sheets.googleapis.com/v4/spreadsheets/",
    "49EPaIYL",
    "1273660stQTGd",
    "4751805KmqlJN",
    "length",
    "message",
    "226296LtLmHM",
    "Error\x20fetching\x20data\x20from\x20sheet:",
    "2IixcIs",
    "parse",
    "extra_data",
    "?key=",
    "main_data",
    "replace",
  ];
  _0x57b2 = function () {
    return _0x392941;
  };
  return _0x57b2();
}
