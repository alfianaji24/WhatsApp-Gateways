(function (_0x557312, _0x25eb31) {
  const _0x15c854 = _0x1622,
    _0x169c3a = _0x557312();
  while (!![]) {
    try {
      const _0xd68ccc =
        -parseInt(_0x15c854(0x182)) / 0x1 +
        parseInt(_0x15c854(0x18e)) / 0x2 +
        -parseInt(_0x15c854(0x1a1)) / 0x3 +
        (-parseInt(_0x15c854(0x173)) / 0x4) *
          (parseInt(_0x15c854(0x174)) / 0x5) +
        -parseInt(_0x15c854(0x18f)) / 0x6 +
        (parseInt(_0x15c854(0x1a0)) / 0x7) *
          (parseInt(_0x15c854(0x172)) / 0x8) +
        parseInt(_0x15c854(0x199)) / 0x9;
      if (_0xd68ccc === _0x25eb31) break;
      else _0x169c3a["push"](_0x169c3a["shift"]());
    } catch (_0x565caa) {
      _0x169c3a["push"](_0x169c3a["shift"]());
    }
  }
})(_0x2394, 0x93cfe);
function _0x1622(_0xdaeddf, _0x1b57a4) {
  const _0x239449 = _0x2394();
  return (
    (_0x1622 = function (_0x1622ec, _0x5a97cd) {
      _0x1622ec = _0x1622ec - 0x172;
      let _0x40398c = _0x239449[_0x1622ec];
      return _0x40398c;
    }),
    _0x1622(_0xdaeddf, _0x1b57a4)
  );
}
import { dbQuery } from "../database/index.js";
import { formatReceipt } from "../lib/helper.js";
function _0x2394() {
  const _0x1b1cdb = [
    "sendButtonMessage",
    "sending\x20to\x20",
    "text",
    "parse",
    "log",
    "2344058XiiBPq",
    "2009874qnEAkQ",
    "progress\x20campaign\x20ID\x20:\x20",
    "message",
    "UPDATE\x20blasts\x20SET\x20status\x20=\x20\x27",
    "status",
    "\x20started",
    "data",
    "Server\x20is\x20busy,\x20waiting\x20for\x205\x20seconds\x20before\x20retrying...",
    "caption",
    "campaign_id",
    "11543724WmbnmR",
    "anyerror",
    "sender",
    "pending",
    "filename",
    "body",
    "send",
    "7KEXRyV",
    "3096420lAZeTy",
    "failed",
    "SELECT\x20status\x20FROM\x20blasts\x20WHERE\x20id\x20=\x20\x27",
    "length",
    "in_progress",
    "7409984ZSpYpr",
    "4xjHuwP",
    "2324110jMqcAd",
    "still\x20any\x20progress\x20in\x20campaign\x20id\x20",
    "\x27,\x20updated_at\x20=\x20NULL\x20WHERE\x20id\x20=\x20\x27",
    "Error\x20in\x20wa.isExist:\x20",
    "sendMessage",
    "url",
    "footer",
    "sendMedia",
    "\x27\x20AND\x20campaign_id\x20=\x20\x27",
    "receiver",
    "delay",
    "Error\x20in\x20send\x20operation:\x20",
    "catch",
    "wrong\x20data,\x20progress\x20canceled!",
    "943534HNTGrk",
    "success",
    "buttons",
    "503",
    "type",
    "error",
    ",\x20request\x20canceled.\x20",
  ];
  _0x2394 = function () {
    return _0x1b1cdb;
  };
  return _0x2394();
}
import * as _0xbd6aab from "../whatsapp.js";
let inProgress = [];
const updateStatus = async (_0x571030, _0x35bfe9, _0x277901) => {
    const _0x459df9 = _0x1622;
    await dbQuery(
      _0x459df9(0x192) +
        _0x277901 +
        "\x27\x20WHERE\x20receiver\x20=\x20\x27" +
        _0x35bfe9 +
        _0x459df9(0x17c) +
        _0x571030 +
        "\x27"
    );
  },
  updateStatusById = async (_0x43ca6a, _0x3c0dff, _0x2e58a3) => {
    const _0x2e9ecd = _0x1622;
    await dbQuery(
      _0x2e9ecd(0x192) +
        _0x2e58a3 +
        _0x2e9ecd(0x176) +
        _0x3c0dff +
        _0x2e9ecd(0x17c) +
        _0x43ca6a +
        "\x27"
    );
  },
  checkBlastById = async (_0x25311d, _0x4e8d69) => {
    const _0x173ea7 = _0x1622,
      _0x29241f = await dbQuery(
        _0x173ea7(0x1a3) + _0x4e8d69 + _0x173ea7(0x17c) + _0x25311d + "\x27"
      );
    return (
      _0x29241f[_0x173ea7(0x1a4)] > 0x0 &&
      _0x29241f[0x0][_0x173ea7(0x193)] === _0x173ea7(0x19c)
    );
  },
  sendBlastMessage = async (_0xf906a8, _0x377c70) => {
    const _0x31bcd6 = _0x1622,
      _0x266532 = JSON[_0x31bcd6(0x18c)](
        _0xf906a8[_0x31bcd6(0x19e)][_0x31bcd6(0x195)]
      ),
      _0x4d87f6 = _0x266532[_0x31bcd6(0x195)],
      _0x3474e2 = _0x266532[_0x31bcd6(0x198)],
      _0x371e2e = (_0x237246) =>
        new Promise((_0x39465d) => setTimeout(_0x39465d, _0x237246));
    if (inProgress[_0x3474e2])
      return (
        console[_0x31bcd6(0x18d)](
          _0x31bcd6(0x175) + _0x3474e2 + _0x31bcd6(0x188)
        ),
        _0x377c70[_0x31bcd6(0x19f)]({ status: "in_progress" })
      );
    (inProgress[_0x3474e2] = !![]),
      console["log"](_0x31bcd6(0x190) + _0x3474e2 + _0x31bcd6(0x194)),
      _0x377c70["send"]({ status: _0x31bcd6(0x1a5) });
    const _0x3f9bbf = async () => {
      const _0x5020fd = _0x31bcd6;
      for (let _0x1e3c6c in _0x4d87f6) {
        const _0x30ff6e = _0x266532[_0x5020fd(0x17e)];
        await _0x371e2e(_0x30ff6e * 0x3e8);
        if (
          _0x266532[_0x5020fd(0x19b)] &&
          _0x4d87f6[_0x1e3c6c][_0x5020fd(0x17d)] &&
          _0x4d87f6[_0x1e3c6c][_0x5020fd(0x191)]
        ) {
          const _0x43b8a5 = await checkBlastById(
            _0x3474e2,
            _0x4d87f6[_0x1e3c6c]["id"]
          );
          if (_0x43b8a5) {
            try {
              const _0x4cd522 = await _0xbd6aab["isExist"](
                _0x266532[_0x5020fd(0x19b)],
                formatReceipt(_0x4d87f6[_0x1e3c6c]["receiver"])
              );
              if (!_0x4cd522) {
                await updateStatusById(
                  _0x3474e2,
                  _0x4d87f6[_0x1e3c6c]["id"],
                  _0x5020fd(0x1a2)
                );
                continue;
              }
            } catch (_0x4702c7) {
              console[_0x5020fd(0x187)](_0x5020fd(0x177), _0x4702c7),
                await updateStatusById(
                  _0x3474e2,
                  _0x4d87f6[_0x1e3c6c]["id"],
                  "failed"
                );
              continue;
            }
            console[_0x5020fd(0x18d)](
              _0x5020fd(0x18a) +
                _0x4d87f6[_0x1e3c6c][_0x5020fd(0x17d)] +
                "\x20id\x20" +
                _0x4d87f6[_0x1e3c6c]["id"]
            );
            try {
              let _0xdf5a55;
              if (_0x266532[_0x5020fd(0x186)] === "media") {
                const _0x174a76 = JSON[_0x5020fd(0x18c)](
                  _0x4d87f6[_0x1e3c6c][_0x5020fd(0x191)]
                );
                _0xdf5a55 = await _0xbd6aab[_0x5020fd(0x17b)](
                  _0x266532[_0x5020fd(0x19b)],
                  _0x4d87f6[_0x1e3c6c][_0x5020fd(0x17d)],
                  _0x174a76[_0x5020fd(0x186)],
                  _0x174a76[_0x5020fd(0x179)],
                  _0x174a76[_0x5020fd(0x197)],
                  0x0,
                  _0x174a76[_0x5020fd(0x19d)],
                  0x0
                );
              } else {
                if (_0x266532["type"] === "button") {
                  const _0x4e32b1 = JSON["parse"](
                    _0x4d87f6[_0x1e3c6c][_0x5020fd(0x191)]
                  );
                  _0xdf5a55 = await _0xbd6aab[_0x5020fd(0x189)](
                    _0x266532["sender"],
                    _0x4d87f6[_0x1e3c6c][_0x5020fd(0x17d)],
                    _0x4e32b1[_0x5020fd(0x184)],
                    _0x4e32b1[_0x5020fd(0x18b)] ?? _0x4e32b1["caption"],
                    _0x4e32b1[_0x5020fd(0x17a)],
                    _0x4e32b1?.["image"]?.["url"]
                  );
                } else
                  _0xdf5a55 = await _0xbd6aab[_0x5020fd(0x178)](
                    _0x266532[_0x5020fd(0x19b)],
                    _0x4d87f6[_0x1e3c6c][_0x5020fd(0x17d)],
                    _0x4d87f6[_0x1e3c6c]["message"],
                    0x0
                  );
              }
              const _0xb4cc1b = _0xdf5a55 ? _0x5020fd(0x183) : "failed";
              await updateStatusById(
                _0x3474e2,
                _0x4d87f6[_0x1e3c6c]["id"],
                _0xb4cc1b
              );
            } catch (_0x333d18) {
              console["log"](_0x5020fd(0x19a), _0x333d18),
                _0x333d18[_0x5020fd(0x191)]["includes"](_0x5020fd(0x185))
                  ? (console[_0x5020fd(0x18d)](_0x5020fd(0x196)),
                    await _0x371e2e(0x1388),
                    _0x1e3c6c--)
                  : await updateStatusById(
                      _0x3474e2,
                      _0x4d87f6[_0x1e3c6c]["id"],
                      _0x5020fd(0x1a2)
                    );
            }
          } else console[_0x5020fd(0x18d)]("no\x20pending,\x20not\x20send!");
        } else console["log"](_0x5020fd(0x181));
      }
      delete inProgress[_0x3474e2];
    };
    _0x3f9bbf()[_0x31bcd6(0x180)]((_0x46b57e) => {
      const _0xecffad = _0x31bcd6;
      console[_0xecffad(0x187)](_0xecffad(0x17f) + _0x46b57e),
        delete inProgress[_0x3474e2];
    });
  };
export { sendBlastMessage };
