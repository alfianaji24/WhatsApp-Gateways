const _0x350a63 = _0x4f06;
(function (_0x5f1b16, _0x151639) {
  const _0x2a2155 = _0x4f06,
    _0x4e6bcf = _0x5f1b16();
  while (!![]) {
    try {
      const _0x276a75 =
        (-parseInt(_0x2a2155(0x1c7)) / 0x1) *
          (parseInt(_0x2a2155(0x1f4)) / 0x2) +
        -parseInt(_0x2a2155(0x1a7)) / 0x3 +
        -parseInt(_0x2a2155(0x1c3)) / 0x4 +
        (-parseInt(_0x2a2155(0x1c5)) / 0x5) *
          (-parseInt(_0x2a2155(0x1ac)) / 0x6) +
        (-parseInt(_0x2a2155(0x1b4)) / 0x7) *
          (-parseInt(_0x2a2155(0x1d1)) / 0x8) +
        (-parseInt(_0x2a2155(0x1ad)) / 0x9) *
          (-parseInt(_0x2a2155(0x1bb)) / 0xa) +
        parseInt(_0x2a2155(0x1a5)) / 0xb;
      if (_0x276a75 === _0x151639) break;
      else _0x4e6bcf["push"](_0x4e6bcf["shift"]());
    } catch (_0x1022ab) {
      _0x4e6bcf["push"](_0x4e6bcf["shift"]());
    }
  }
})(_0x17be, 0xee5c5);
import { Boom } from "@hapi/boom";
import _0x5114ee, {
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  DisconnectReason,
} from "@whiskeysockets/baileys";
import { getDevice } from "./database/model.js";
import _0x2f013d from "qrcode";
import _0x23ba94 from "fs";
import { sock, qrcode, pairingCode, intervalStore } from "./wa/store.js";
import { setStatus } from "./database/index.js";
import { IncomingMessage } from "./controllers/incomingMessage.js";
function _0x4f06(_0xd0df02, _0x545e49) {
  const _0x17beb8 = _0x17be();
  return (
    (_0x4f06 = function (_0x4f065e, _0x578643) {
      _0x4f065e = _0x4f065e - 0x1a5;
      let _0x2fe432 = _0x17beb8[_0x4f065e];
      return _0x2fe432;
    }),
    _0x4f06(_0xd0df02, _0x545e49)
  );
}
import { getSavedPhoneNumber } from "./lib/helper.js";
import _0x384aba from "./lib/pino.js";
import _0x83f6e8 from "node-cache";
import { release } from "os";
const logger = _0x384aba[_0x350a63(0x1ef)]({}),
  msgRetryCounterCache = new _0x83f6e8(),
  connectToWhatsApp = async (_0x358978, _0x28e5fe = null, _0x458cd8 = ![]) => {
    const _0x58f092 = _0x350a63;
    if (typeof qrcode[_0x358978] !== _0x58f092(0x1f7) && !_0x458cd8)
      return (
        _0x28e5fe?.[_0x58f092(0x1be)](_0x58f092(0x1fa), {
          token: _0x358978,
          data: qrcode[_0x358978],
          message: "please\x20scan\x20with\x20your\x20Whatsapp\x20Accountt",
        }),
        {
          status: ![],
          sock: sock[_0x358978],
          qrcode: qrcode[_0x358978],
          message: "please\x20scan",
        }
      );
    if (typeof pairingCode[_0x358978] !== "undefined" && _0x458cd8)
      return (
        _0x28e5fe?.[_0x58f092(0x1be)](_0x58f092(0x1cf), {
          token: _0x358978,
          data: pairingCode[_0x358978],
          message: _0x58f092(0x1b8),
        }),
        { status: ![], code: pairingCode[_0x358978], message: _0x58f092(0x1b2) }
      );
    try {
      let _0x299d5c = sock[_0x358978]["user"]["id"][_0x58f092(0x1d7)](":");
      _0x299d5c = _0x299d5c[0x0] + _0x58f092(0x1f0);
      const _0x1f32b2 = await getPpUrl(_0x358978, _0x299d5c);
      return (
        _0x28e5fe?.[_0x58f092(0x1be)](_0x58f092(0x1e3), {
          token: _0x358978,
          user: sock[_0x358978][_0x58f092(0x1bd)],
          ppUrl: _0x1f32b2,
        }),
        delete qrcode[_0x358978],
        delete pairingCode[_0x358978],
        { status: !![], message: _0x58f092(0x1e2) }
      );
    } catch (_0x1b5a3d) {
      _0x28e5fe?.[_0x58f092(0x1be)](_0x58f092(0x1e7), {
        token: _0x358978,
        message: _0x58f092(0x1ec),
      });
    }
    const { version: _0x37249a, isLatest: _0x585fb5 } =
      await fetchLatestBaileysVersion();
    console["log"](_0x58f092(0x1ce)),
      console[_0x58f092(0x1bf)](
        "using\x20WA\x20v" +
          _0x37249a["join"](".") +
          _0x58f092(0x1e6) +
          _0x585fb5
      );
    const { state: _0x169fc9, saveCreds: _0x5d42b5 } =
      await useMultiFileAuthState(_0x58f092(0x1b5) + _0x358978);
    sock[_0x358978] = _0x5114ee({
      version: _0x37249a,
      browser: [_0x58f092(0x1e1), _0x58f092(0x1a9), release()],
      logger: logger,
      printQRInTerminal: !_0x458cd8,
      auth: {
        creds: _0x169fc9[_0x58f092(0x1f9)],
        keys: makeCacheableSignalKeyStore(_0x169fc9[_0x58f092(0x1f5)], logger),
      },
      msgRetryCounterCache: msgRetryCounterCache,
      generateHighQualityLinkPreview: !![],
    });
    if (
      _0x458cd8 &&
      "me" in _0x169fc9[_0x58f092(0x1f9)] === ![] &&
      !_0x169fc9["creds"][_0x58f092(0x1c9)]
    ) {
      const _0x36371e = await getSavedPhoneNumber(_0x358978);
      try {
        const _0x32cc36 = await sock[_0x358978]["requestPairingCode"](
          _0x36371e
        );
        (pairingCode[_0x358978] =
          _0x32cc36?.[_0x58f092(0x1b6)](/.{1,4}/g)?.[_0x58f092(0x1f3)]("-") ||
          _0x32cc36),
          console[_0x58f092(0x1bf)](_0x58f092(0x1c4), _0x32cc36);
      } catch (_0x9992a9) {
        _0x28e5fe?.[_0x58f092(0x1be)]("message", {
          token: _0x358978,
          message: "Time\x20out,\x20please\x20refresh\x20page",
        });
      }
      _0x28e5fe?.[_0x58f092(0x1be)](_0x58f092(0x1cf), {
        token: _0x358978,
        data: pairingCode[_0x358978],
        message:
          "Go\x20to\x20whatsapp\x20->\x20link\x20device\x20->\x20link\x20with\x20phone\x20number,\x20and\x20pairing\x20with\x20this\x20code.",
      });
    }
    return (
      sock[_0x358978]["ev"]["process"](async (_0x5d6c2e) => {
        const _0x2e1065 = _0x58f092;
        if (_0x5d6c2e[_0x2e1065(0x1e4)]) {
          const _0x2bdfd6 = _0x5d6c2e["connection.update"],
            {
              connection: _0x4c77c6,
              lastDisconnect: _0x9782,
              qr: _0x8cc34d,
            } = _0x2bdfd6;
          console[_0x2e1065(0x1bf)](_0x2e1065(0x1eb), _0x2bdfd6);
          if (_0x4c77c6 === _0x2e1065(0x1a8)) {
            const _0x2293e9 =
                _0x9782[_0x2e1065(0x1ca)]?.[_0x2e1065(0x1d2)]?.[
                  _0x2e1065(0x1c8)
                ]?.[_0x2e1065(0x1e7)],
              _0x17356a =
                _0x9782["error"]?.[_0x2e1065(0x1d2)]?.[_0x2e1065(0x1c8)]?.[
                  _0x2e1065(0x1ca)
                ];
            if (
              (_0x9782?.[_0x2e1065(0x1ca)] instanceof Boom)?.["output"]?.[
                _0x2e1065(0x1fb)
              ] !== DisconnectReason["loggedOut"]
            ) {
              delete qrcode[_0x358978],
                _0x28e5fe?.[_0x2e1065(0x1be)](_0x2e1065(0x1e7), {
                  token: _0x358978,
                  message: _0x2e1065(0x1b1),
                });
              if (_0x2293e9 == _0x2e1065(0x1cc)) {
                sock[_0x358978]["ws"][_0x2e1065(0x1a8)](),
                  delete qrcode[_0x358978],
                  delete pairingCode[_0x358978],
                  delete sock[_0x358978],
                  _0x28e5fe?.[_0x2e1065(0x1be)](_0x2e1065(0x1e7), {
                    token: _0x358978,
                    message: _0x2e1065(0x1c1),
                  });
                return;
              }
              (_0x17356a === _0x2e1065(0x1d4) ||
                _0x17356a === _0x2e1065(0x1d5)) &&
                (setStatus(_0x358978, _0x2e1065(0x1da)),
                clearConnection(_0x358978),
                connectToWhatsApp(_0x358978, _0x28e5fe)),
                _0x2293e9 === _0x2e1065(0x1e8) &&
                  connectToWhatsApp(_0x358978, _0x28e5fe),
                _0x2293e9 === _0x2e1065(0x1d6) && delete sock[_0x358978];
            } else
              setStatus(_0x358978, _0x2e1065(0x1da)),
                console[_0x2e1065(0x1bf)](
                  "Connection\x20closed.\x20You\x20are\x20logged\x20out."
                ),
                _0x28e5fe?.[_0x2e1065(0x1be)](_0x2e1065(0x1e7), {
                  token: _0x358978,
                  message: _0x2e1065(0x1c6),
                }),
                clearConnection(_0x358978),
                connectToWhatsApp(_0x358978, _0x28e5fe);
          }
          _0x8cc34d &&
            (console[_0x2e1065(0x1bf)](_0x2e1065(0x1d8), _0x358978),
            _0x2f013d[_0x2e1065(0x1ab)](
              _0x8cc34d,
              function (_0x56874a, _0x39d269) {
                if (_0x56874a) console["log"](_0x56874a);
                (qrcode[_0x358978] = _0x39d269),
                  connectToWhatsApp(_0x358978, _0x28e5fe, _0x458cd8);
              }
            ));
          if (_0x4c77c6 === _0x2e1065(0x1d9)) {
            setStatus(_0x358978, _0x2e1065(0x1f6)),
              delete qrcode[_0x358978],
              delete pairingCode[_0x358978];
            let _0x203f1a =
              sock[_0x358978][_0x2e1065(0x1bd)]["id"]["split"](":");
            _0x203f1a = _0x203f1a[0x0] + "@s.whatsapp.net";
            const _0x32dfb9 = await getPpUrl(_0x358978, _0x203f1a);
            _0x28e5fe?.[_0x2e1065(0x1be)](_0x2e1065(0x1e3), {
              token: _0x358978,
              user: sock[_0x358978][_0x2e1065(0x1bd)],
              ppUrl: _0x32dfb9,
            }),
              delete qrcode[_0x358978],
              delete pairingCode[_0x358978];
          }
        }
        if (_0x5d6c2e["creds.update"]) {
          const _0x207bf0 = _0x5d6c2e[_0x2e1065(0x1dd)];
          _0x5d42b5(_0x207bf0);
        }
        if (_0x5d6c2e[_0x2e1065(0x1cd)]) {
          const _0x27caf1 = _0x5d6c2e["messages.upsert"],
            _0x1d6d0e = await IncomingMessage(_0x27caf1, sock[_0x358978]);
        }
      }),
      sock[_0x358978]["ev"]?.["on"]("call", async (_0x4118d4) => {
        const _0x2b0db4 = _0x58f092,
          _0x33d49e = await getDevice(
            sock[_0x358978][_0x2b0db4(0x1bd)]["id"][_0x2b0db4(0x1d7)](":")[0x0]
          ),
          _0x48bd28 = _0x33d49e[0x0][_0x2b0db4(0x1fd)];
        if (_0x48bd28 === 0x1) {
          const {
            from: _0x46f61c,
            id: _0x54234f,
            status: _0x756f56,
          } = _0x4118d4[0x0];
          if (_0x756f56 == _0x2b0db4(0x1e9)) {
            const _0x246530 = {
              tag: _0x2b0db4(0x1ba),
              attrs: {
                from: sock[_0x358978][_0x2b0db4(0x1bd)]["id"],
                to: _0x46f61c,
                id: sock[_0x358978]["generateMessageTag"](),
              },
              content: [
                {
                  tag: "reject",
                  attrs: {
                    "call-id": _0x54234f,
                    "call-creator": _0x46f61c,
                    count: "0",
                  },
                  content: undefined,
                },
              ],
            };
            await sock[_0x358978][_0x2b0db4(0x1f8)](_0x246530);
          }
        }
      }),
      { sock: sock[_0x358978], qrcode: qrcode[_0x358978] }
    );
  };
async function connectWaBeforeSend(_0x97dc85) {
  const _0xd52eeb = _0x350a63;
  let _0x53bf4d = undefined,
    _0x3de872;
  (_0x3de872 = await connectToWhatsApp(_0x97dc85)),
    await _0x3de872[_0xd52eeb(0x1b9)]["ev"]["on"](
      _0xd52eeb(0x1e4),
      (_0xeb2fdc) => {
        const _0x27da8b = _0xd52eeb,
          { connection: _0xea1d9e, qr: _0x4a53fc } = _0xeb2fdc;
        _0xea1d9e === _0x27da8b(0x1d9) && (_0x53bf4d = !![]),
          _0x4a53fc && (_0x53bf4d = ![]);
      }
    );
  let _0x403518 = 0x0;
  while (typeof _0x53bf4d === "undefined") {
    _0x403518++;
    if (_0x403518 > 0x4) break;
    await new Promise((_0x5be37c) => setTimeout(_0x5be37c, 0x3e8));
  }
  return _0x53bf4d;
}
const sendAvailable = async (_0x5ab14b) => {
  const _0x563dd7 = _0x350a63,
    _0x5bd642 = await getDevice(_0x5ab14b);
  let _0x1525a3;
  try {
    return (
      _0x5bd642[0x0]["set_available"] == 0x1
        ? (_0x1525a3 = await sock[_0x5ab14b][_0x563dd7(0x1fc)](
            _0x563dd7(0x1df)
          ))
        : (_0x1525a3 = await sock[_0x5ab14b]["sendPresenceUpdate"](
            _0x563dd7(0x1f1)
          )),
      _0x1525a3
    );
  } catch (_0x4e029f) {
    return ![];
  }
};
async function fetchGroups(_0x58e913) {
  const _0x92e2d4 = _0x350a63;
  try {
    let _0x8400bb = await sock[_0x58e913]["groupFetchAllParticipating"](),
      _0x3dde4f = Object[_0x92e2d4(0x1bc)](_0x8400bb)
        [_0x92e2d4(0x1ee)](0x0)
        [_0x92e2d4(0x1dc)]((_0x340ad1) => {
          return _0x340ad1[0x1];
        });
    return _0x3dde4f;
  } catch (_0x14f88d) {
    return ![];
  }
}
async function isExist(_0x3ae443, _0x54a080) {
  const _0x445fd6 = _0x350a63;
  try {
    if (typeof sock[_0x3ae443] === "undefined") {
      const _0x42743d = await connectWaBeforeSend(_0x3ae443);
      if (!_0x42743d) return ![];
    }
    if (_0x54a080[_0x445fd6(0x1af)]("@g.us")) return !![];
    else {
      const [_0x25a994] = await sock[_0x3ae443][_0x445fd6(0x1ea)](
        "+" + _0x54a080
      );
      return _0x54a080[_0x445fd6(0x1c0)] > 0xb ? _0x25a994 : !![];
    }
  } catch (_0x4179d7) {
    return ![];
  }
}
async function getPpUrl(_0x3fc865, _0x411c07, _0x2e05c6) {
  const _0xca9b31 = _0x350a63;
  let _0x527140;
  try {
    return (
      (_0x527140 = await sock[_0x3fc865][_0xca9b31(0x1f2)](_0x411c07)),
      _0x527140
    );
  } catch (_0x2f06cf) {
    return _0xca9b31(0x1d0);
  }
}
async function deleteCredentials(_0xc444b2, _0x908d5c = null) {
  const _0x542c2d = _0x350a63;
  _0x908d5c !== null &&
    _0x908d5c[_0x542c2d(0x1be)](_0x542c2d(0x1e7), {
      token: _0xc444b2,
      message: "Logout\x20Progres..",
    });
  try {
    if (typeof sock[_0xc444b2] === "undefined") {
      const _0x3f6578 = await connectWaBeforeSend(_0xc444b2);
      _0x3f6578 &&
        (sock[_0xc444b2][_0x542c2d(0x1a6)](), delete sock[_0xc444b2]);
    } else sock[_0xc444b2]["logout"](), delete sock[_0xc444b2];
    return (
      delete qrcode[_0xc444b2],
      clearInterval(intervalStore[_0xc444b2]),
      setStatus(_0xc444b2, "Disconnect"),
      _0x908d5c != null &&
        (_0x908d5c[_0x542c2d(0x1be)]("Unauthorized", _0xc444b2),
        _0x908d5c["emit"](_0x542c2d(0x1e7), {
          token: _0xc444b2,
          message: _0x542c2d(0x1c6),
        })),
      _0x23ba94[_0x542c2d(0x1c2)](_0x542c2d(0x1b5) + _0xc444b2) &&
        _0x23ba94[_0x542c2d(0x1db)](
          _0x542c2d(0x1b5) + _0xc444b2,
          { recursive: !![], force: !![] },
          (_0x19a819) => {
            const _0x560271 = _0x542c2d;
            if (_0x19a819) console[_0x560271(0x1bf)](_0x19a819);
          }
        ),
      { status: !![], message: "Deleting\x20session\x20and\x20credential" }
    );
  } catch (_0x45c452) {
    return (
      console[_0x542c2d(0x1bf)](_0x45c452),
      { status: !![], message: _0x542c2d(0x1aa) }
    );
  }
}
function clearConnection(_0x164622) {
  const _0x122cfd = _0x350a63;
  clearInterval(intervalStore[_0x164622]),
    delete sock[_0x164622],
    delete qrcode[_0x164622],
    setStatus(_0x164622, "Disconnect"),
    _0x23ba94[_0x122cfd(0x1c2)](_0x122cfd(0x1b5) + _0x164622) &&
      (_0x23ba94["rmSync"](
        _0x122cfd(0x1b5) + _0x164622,
        { recursive: !![], force: !![] },
        (_0x320977) => {
          const _0x5ee244 = _0x122cfd;
          if (_0x320977) console[_0x5ee244(0x1bf)](_0x320977);
        }
      ),
      console[_0x122cfd(0x1bf)](
        _0x122cfd(0x1b7) + _0x164622 + _0x122cfd(0x1b3)
      ));
}
function _0x17be() {
  const _0x101275 = [
    "statusCode",
    "sendPresenceUpdate",
    "reject_call",
    "3678686pKSuYN",
    "logout",
    "2837445fAcLDe",
    "close",
    "Chrome",
    "Nothing\x20deleted",
    "toDataURL",
    "157782zKKOjo",
    "27uPFEuL",
    "\x20connection\x20restored",
    "includes",
    "status",
    "Connecting..",
    "pairing\x20with\x20that\x20code",
    "\x20is\x20deleted",
    "7gBRTit",
    "./credentials/",
    "match",
    "credentials/",
    "Go\x20to\x20whatsapp\x20->\x20link\x20device\x20->\x20link\x20with\x20phone\x20number,\x20and\x20pairing\x20with\x20this\x20code.",
    "sock",
    "call",
    "6030050qVknju",
    "entries",
    "user",
    "emit",
    "log",
    "length",
    "Request\x20QR\x20ended.\x20reload\x20web\x20to\x20scan\x20again",
    "existsSync",
    "6787496rAZiqA",
    "pairing\x20code",
    "295TWzSKr",
    "Connection\x20closed.\x20You\x20are\x20logged\x20out.",
    "3121MDaDVc",
    "payload",
    "registered",
    "error",
    "\x20connection\x20failed",
    "QR\x20refs\x20attempts\x20ended",
    "messages.upsert",
    "You\x20re\x20using\x20whatsapp\x20gateway\x20M\x20Pedia\x20v8.x.x\x20-\x20Contact\x20admin\x20if\x20any\x20trouble\x20:\x206292298859671",
    "code",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
    "8106232RCJrZl",
    "output",
    "Wrong\x20Parameterss",
    "Unauthorized",
    "Method\x20Not\x20Allowed",
    "Connection\x20was\x20lost",
    "split",
    "new\x20qr",
    "open",
    "Disconnect",
    "rmSync",
    "map",
    "creds.update",
    "json",
    "available",
    "body",
    "Windows",
    "Already\x20connected",
    "connection-open",
    "connection.update",
    "\x20Connection\x20failed,please\x20scan\x20first",
    ",\x20isLatest:\x20",
    "message",
    "Stream\x20Errored\x20(restart\x20required)",
    "offer",
    "onWhatsApp",
    "connection",
    "Connecting..\x20(1)..",
    "send",
    "slice",
    "child",
    "@s.whatsapp.net",
    "unavailable",
    "profilePictureUrl",
    "join",
    "698jMLroX",
    "keys",
    "Connected",
    "undefined",
    "query",
    "creds",
    "qrcode",
  ];
  _0x17be = function () {
    return _0x101275;
  };
  return _0x17be();
}
async function initialize(_0x32acaa, _0x4ea140) {
  const _0x474668 = _0x350a63,
    { token: _0x3fd10e } = _0x32acaa[_0x474668(0x1e0)];
  if (_0x3fd10e) {
    const _0x257d43 = _0x474668(0x1b5) + _0x3fd10e;
    if (_0x23ba94[_0x474668(0x1c2)](_0x257d43)) {
      sock[_0x3fd10e] = undefined;
      const _0x3a6a99 = await connectWaBeforeSend(_0x3fd10e);
      return _0x3a6a99
        ? _0x4ea140[_0x474668(0x1b0)](0xc8)["json"]({
            status: !![],
            message: _0x3fd10e + _0x474668(0x1ae),
          })
        : _0x4ea140[_0x474668(0x1b0)](0xc8)[_0x474668(0x1de)]({
            status: ![],
            message: _0x3fd10e + _0x474668(0x1cb),
          });
    }
    return _0x4ea140["send"]({
      status: ![],
      message: _0x3fd10e + _0x474668(0x1e5),
    });
  }
  return _0x4ea140[_0x474668(0x1ed)]({
    status: ![],
    message: _0x474668(0x1d3),
  });
}
export * from "./wa/sender.js";
export {
  connectToWhatsApp,
  isExist,
  getPpUrl,
  fetchGroups,
  deleteCredentials,
  initialize,
  connectWaBeforeSend,
  sendAvailable,
};
