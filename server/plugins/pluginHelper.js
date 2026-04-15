const _0x16d6dc = _0x32d0;
(function (_0x2ff2c6, _0x5b433e) {
  const _0x14a36b = _0x32d0,
    _0x169b5e = _0x2ff2c6();
  while (!![]) {
    try {
      const _0x5eee18 =
        -parseInt(_0x14a36b(0x11c)) / 0x1 +
        (parseInt(_0x14a36b(0x11a)) / 0x2) *
          (parseInt(_0x14a36b(0x126)) / 0x3) +
        (-parseInt(_0x14a36b(0x12a)) / 0x4) *
          (parseInt(_0x14a36b(0x114)) / 0x5) +
        (-parseInt(_0x14a36b(0x127)) / 0x6) *
          (-parseInt(_0x14a36b(0x115)) / 0x7) +
        (parseInt(_0x14a36b(0x124)) / 0x8) *
          (parseInt(_0x14a36b(0x122)) / 0x9) +
        parseInt(_0x14a36b(0x113)) / 0xa +
        -parseInt(_0x14a36b(0x123)) / 0xb;
      if (_0x5eee18 === _0x5b433e) break;
      else _0x169b5e["push"](_0x169b5e["shift"]());
    } catch (_0x4c220e) {
      _0x169b5e["push"](_0x169b5e["shift"]());
    }
  }
})(_0x35f4, 0xbe7bd);
import _0x448f7d from "node-cache";
function _0x32d0(_0x1f831c, _0x328df4) {
  const _0x35f417 = _0x35f4();
  return (
    (_0x32d0 = function (_0x32d0a2, _0x5a7540) {
      _0x32d0a2 = _0x32d0a2 - 0x113;
      let _0x180b0d = _0x35f417[_0x32d0a2];
      return _0x180b0d;
    }),
    _0x32d0(_0x1f831c, _0x328df4)
  );
}
const cache = new _0x448f7d(),
  TTL = { CONTACTS: 0x3c * 0x3c, MESSAGES: 0x14 * 0x3c },
  loadContact = async (_0x5062be) => {
    const _0xb7daf8 = _0x32d0,
      _0x17a7e6 = cache[_0xb7daf8(0x129)](_0xb7daf8(0x120) + _0x5062be);
    return _0x17a7e6 || [];
  },
  saveContact = async (_0x42853b, _0x27363f) => {
    const _0x2eceea = _0x32d0,
      _0x5bb623 = { from: _0x42853b };
    let _0x130c95 = await loadContact(_0x27363f);
    _0x130c95[_0x2eceea(0x118)](_0x5bb623),
      cache["set"](
        _0x2eceea(0x120) + _0x27363f,
        _0x130c95,
        TTL[_0x2eceea(0x117)]
      );
  },
  checkContact = async (_0x33a036, _0x11e944) => {
    const _0x4d595b = _0x32d0,
      _0x333429 = await loadContact(_0x11e944);
    return _0x333429[_0x4d595b(0x11d)](
      (_0x9bbea6) => _0x9bbea6[_0x4d595b(0x12c)] === _0x33a036
    );
  },
  removeContact = async (_0x5558ef, _0x2eb663) => {
    const _0x22cf69 = _0x32d0;
    let _0x1cf501 = await loadContact(_0x2eb663);
    const _0x4de288 = _0x1cf501[_0x22cf69(0x11f)](
      (_0x25a1c9) => _0x25a1c9["from"] !== _0x5558ef
    );
    cache[_0x22cf69(0x11e)](
      _0x22cf69(0x120) + _0x2eb663,
      _0x4de288,
      TTL["CONTACTS"]
    );
  },
  VALID_ROLES = [_0x16d6dc(0x12b), "assistant", _0x16d6dc(0x119)],
  manageMessagesCache = async (_0x30d273, _0x2730fd, _0x25facf, _0x10f40b) => {
    const _0x3199d9 = _0x16d6dc,
      _0x1e845 = _0x3199d9(0x128) + _0x30d273 + ":" + _0x2730fd,
      _0x34fb1e = VALID_ROLES[_0x3199d9(0x11b)](_0x25facf)
        ? _0x25facf
        : _0x3199d9(0x116),
      _0x467e52 = cache[_0x3199d9(0x129)](_0x1e845) || [],
      _0x597a93 = [..._0x467e52, { role: _0x34fb1e, content: _0x10f40b }];
    return (
      cache[_0x3199d9(0x11e)](_0x1e845, _0x597a93, TTL[_0x3199d9(0x121)]),
      _0x597a93
    );
  },
  deleteMessageCache = async (_0x1b7e92, _0x4071e6) => {
    const _0x447a31 = _0x16d6dc,
      _0x33c64 = _0x447a31(0x128) + _0x1b7e92 + ":" + _0x4071e6,
      _0x34665c = _0x447a31(0x128) + _0x1b7e92 + ":" + _0x4071e6;
    cache[_0x447a31(0x125)]([_0x33c64, _0x34665c]);
  };
export {
  loadContact,
  saveContact,
  checkContact,
  removeContact,
  manageMessagesCache,
  deleteMessageCache,
};
function _0x35f4() {
  const _0x5170ad = [
    "22251515nETAou",
    "1671944zboufx",
    "del",
    "243KHFpCN",
    "4042278ZcOMyu",
    "messages:",
    "get",
    "920zFEwkC",
    "user",
    "from",
    "12930990wbBGyr",
    "19070nkfSUG",
    "7mXqdZL",
    "assistant",
    "CONTACTS",
    "push",
    "system",
    "34746RiTcUk",
    "includes",
    "111705PIJtMm",
    "some",
    "set",
    "filter",
    "contacts:",
    "MESSAGES",
    "18PxkCQD",
  ];
  _0x35f4 = function () {
    return _0x5170ad;
  };
  return _0x35f4();
}
