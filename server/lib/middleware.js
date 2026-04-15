(function (_0x4e61de, _0x5480e7) {
  const _0x397d21 = _0xdd64,
    _0x281a4c = _0x4e61de();
  while (!![]) {
    try {
      const _0x51e945 =
        parseInt(_0x397d21(0x168)) / 0x1 +
        -parseInt(_0x397d21(0x164)) / 0x2 +
        (-parseInt(_0x397d21(0x16d)) / 0x3) *
          (-parseInt(_0x397d21(0x162)) / 0x4) +
        (-parseInt(_0x397d21(0x16c)) / 0x5) *
          (parseInt(_0x397d21(0x15f)) / 0x6) +
        (-parseInt(_0x397d21(0x16f)) / 0x7) *
          (parseInt(_0x397d21(0x16b)) / 0x8) +
        (-parseInt(_0x397d21(0x165)) / 0x9) *
          (parseInt(_0x397d21(0x15e)) / 0xa) +
        (-parseInt(_0x397d21(0x170)) / 0xb) *
          (-parseInt(_0x397d21(0x16e)) / 0xc);
      if (_0x51e945 === _0x5480e7) break;
      else _0x281a4c["push"](_0x281a4c["shift"]());
    } catch (_0x2edaf6) {
      _0x281a4c["push"](_0x281a4c["shift"]());
    }
  }
})(_0x5738, 0x2f8fe);
function _0x5738() {
  const _0x15cd47 = [
    "data",
    "body",
    "88clnpjo",
    "122010SlhIEA",
    "134013uRDbgQ",
    "84JQWbtw",
    "2674DEvGGB",
    "199012tbBwdw",
    "The\x20destination\x20Number\x20not\x20registered\x20in\x20WhatsApp\x20or\x20your\x20sender\x20not\x20connected",
    "360NwTEhU",
    "6qcOVHo",
    "connectToWhatsApp",
    "parse",
    "20rZRbXg",
    "isExist",
    "554132RUmZWf",
    "20970PzMNbw",
    "Unauthorized",
    "send",
    "234365qyvXVQ",
  ];
  _0x5738 = function () {
    return _0x15cd47;
  };
  return _0x5738();
}
import * as _0x2cdbef from "../whatsapp.js";
function _0xdd64(_0x56c6df, _0x3f04f7) {
  const _0x57380c = _0x5738();
  return (
    (_0xdd64 = function (_0xdd6417, _0x5084ea) {
      _0xdd6417 = _0xdd6417 - 0x15d;
      let _0x221a72 = _0x57380c[_0xdd6417];
      return _0x221a72;
    }),
    _0xdd64(_0x56c6df, _0x3f04f7)
  );
}
import { formatReceipt } from "./helper.js";
const checkDestination = async (_0x386dba, _0xcbde5, _0x25e158) => {
    const _0x2f52dd = _0xdd64,
      { token: _0x113336, number: _0x464478 } = _0x386dba[_0x2f52dd(0x16a)];
    if (_0x113336 && _0x464478) {
      const _0x1b43d = await _0x2cdbef[_0x2f52dd(0x163)](
        _0x113336,
        formatReceipt(_0x464478)
      );
      if (!_0x1b43d)
        return _0xcbde5["send"]({ status: ![], message: _0x2f52dd(0x15d) });
      _0x25e158();
    } else
      _0xcbde5[_0x2f52dd(0x167)]({
        status: ![],
        message: "Check\x20your\x20parameter",
      });
  },
  checkConnectionBeforeBlast = async (_0x1b1e62, _0x4e57a1, _0x143d94) => {
    const _0x207e8a = _0xdd64,
      _0x1e7dd6 = JSON[_0x207e8a(0x161)](
        _0x1b1e62[_0x207e8a(0x16a)][_0x207e8a(0x169)]
      ),
      _0x462937 = await _0x2cdbef[_0x207e8a(0x160)](_0x1e7dd6["sender"]);
    if (!_0x462937)
      return _0x4e57a1[_0x207e8a(0x167)]({
        status: ![],
        message: _0x207e8a(0x166),
      });
    _0x143d94();
  };
export { checkDestination, checkConnectionBeforeBlast };
