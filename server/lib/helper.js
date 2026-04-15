(function (_0x2ee943, _0x234b91) {
  const _0x4eb713 = _0x486a,
    _0x1e226e = _0x2ee943();
  while (!![]) {
    try {
      const _0x282f03 =
        (-parseInt(_0x4eb713(0x123)) / 0x1) *
          (parseInt(_0x4eb713(0xde)) / 0x2) +
        -parseInt(_0x4eb713(0xdf)) / 0x3 +
        (parseInt(_0x4eb713(0xf1)) / 0x4) *
          (-parseInt(_0x4eb713(0x129)) / 0x5) +
        parseInt(_0x4eb713(0xdd)) / 0x6 +
        (parseInt(_0x4eb713(0x104)) / 0x7) *
          (-parseInt(_0x4eb713(0xfb)) / 0x8) +
        parseInt(_0x4eb713(0x12d)) / 0x9 +
        (parseInt(_0x4eb713(0x10f)) / 0xa) * (parseInt(_0x4eb713(0x107)) / 0xb);
      if (_0x282f03 === _0x234b91) break;
      else _0x1e226e["push"](_0x1e226e["shift"]());
    } catch (_0x5eecc6) {
      _0x1e226e["push"](_0x1e226e["shift"]());
    }
  }
})(_0x5589, 0xd2232);
import _0x130970, {
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  delay as _0x3a72c8,
  downloadMediaMessage,
} from "@whiskeysockets/baileys";
import _0x35b580 from "mime-types";
import _0x496823 from "fs";
function _0x486a(_0x3f5971, _0x16ef6b) {
  const _0x5589ca = _0x5589();
  return (
    (_0x486a = function (_0x486aad, _0x5d76e0) {
      _0x486aad = _0x486aad - 0xda;
      let _0xeb63cc = _0x5589ca[_0x486aad];
      return _0xeb63cc;
    }),
    _0x486a(_0x3f5971, _0x16ef6b)
  );
}
import { join } from "path";
import _0x4f1173 from "axios";
import _0x3dbf57 from "pino";
function _0x5589() {
  const _0x4f77b9 = [
    "628",
    "625023APWpyK",
    "includes",
    "updateMediaMessage",
    "9967925MQYTWk",
    "bin",
    "length",
    "video-cover.png",
    "exec",
    "buttonsResponseMessage",
    "title",
    "templateMessage",
    "50nQhzQy",
    "extension",
    "templateButtonReplyMessage",
    "split",
    "images",
    "composing",
    "6208",
    "public",
    "extendedTextMessage",
    "jpegThumbnail",
    "ephemeralMessage",
    "media",
    "imageMessage",
    "@g.us",
    "message",
    "hydratedContentText",
    "549",
    "viewOnceMessageV2",
    "text",
    "object",
    "1GsvUzM",
    "presenceSubscribe",
    ".cdr",
    "cwd",
    "mediatype",
    "keys",
    "250DkXEcE",
    "filter",
    "number",
    "endsWith",
    "1758897XiUXMn",
    "conversation",
    "substr",
    "every",
    "error\x20prepare",
    "mediaKey",
    "document",
    "test",
    "9536706RxYdpR",
    "3069084zVgZYB",
    "2350863TWLFxD",
    "replace",
    "waUploadToServer",
    "caption",
    "content-type",
    "@s.whatsapp.net",
    "videoMessage",
    "log",
    "fileName",
    "Nomor\x20telepon\x20tidak\x20ditemukan.",
    "2340",
    "documentWithCaptionMessage",
    "from",
    "parseInt",
    "silent",
    "selectedDisplayText",
    "sendPresenceUpdate",
    "viewOnceMessage",
    "136660HAkYkK",
    "sort",
    "hydratedTemplate",
    "video",
    "Error\x20converting\x20mediaKey\x20to\x20Buffer:",
    "application/cdr",
    "mimetype",
    "startsWith",
    "substring",
    "listResponseMessage",
    "128GpGUcr",
    "stickerMessage",
    "isArray",
    "Message",
    "messageContextInfo",
    "234",
    "key",
    "gifPlayback",
  ];
  _0x5589 = function () {
    return _0x4f77b9;
  };
  return _0x5589();
}
import { ulid } from "ulid";
function formatReceipt(_0x401282) {
  const _0x505821 = _0x486a;
  try {
    if (_0x401282[_0x505821(0x12c)]("@g.us")) return _0x401282;
    let _0x2c24a3 = _0x401282[_0x505821(0xe0)](/\D/g, "");
    if (_0x2c24a3 === "") return _0x2c24a3;
    else {
      if (_0x2c24a3[_0x505821(0x12f)](0x0, 0x2) == "08")
        _0x2c24a3 = _0x2c24a3[_0x505821(0xe0)](/08/, _0x505821(0x103));
      else {
        if (_0x2c24a3[_0x505821(0x12f)](0x0, 0x4) == _0x505821(0x115))
          _0x2c24a3 = _0x2c24a3[_0x505821(0xe0)](/6208/, _0x505821(0x103));
        else {
          if (
            _0x2c24a3[_0x505821(0x12f)](0x0, 0x1) == "3" &&
            (_0x2c24a3[_0x505821(0x109)] === 0x9 ||
              _0x2c24a3[_0x505821(0x109)] === 0xa)
          )
            _0x2c24a3 = "39" + _0x2c24a3;
          else {
            if (_0x2c24a3[_0x505821(0x12f)](0x0, 0x4) == _0x505821(0xe9))
              _0x2c24a3 = _0x2c24a3[_0x505821(0xe0)](/2340/, _0x505821(0x100));
            else {
              if (
                _0x2c24a3[_0x505821(0x12f)](0x0, 0x2) == "52" &&
                _0x2c24a3[_0x505821(0x12f)](0x2, 0x1) != "1"
              )
                _0x2c24a3 = _0x2c24a3["replace"](/52/, "521");
              else {
                if (
                  _0x2c24a3[_0x505821(0x12f)](0x0, 0x2) == "54" &&
                  _0x2c24a3[_0x505821(0x12f)](0x2, 0x1) != "9"
                )
                  _0x2c24a3 = _0x2c24a3["replace"](/54/, _0x505821(0x11f));
                else {
                  if (
                    _0x2c24a3[_0x505821(0x12f)](0x0, 0x2) == "55" &&
                    _0x2c24a3["length"] == 0xd
                  ) {
                    let _0x34deee = parseInt(
                      _0x2c24a3[_0x505821(0x12f)](0x2, 0x2)
                    );
                    _0x34deee > 0x1e &&
                      (_0x2c24a3 =
                        "55" + _0x34deee + _0x2c24a3[_0x505821(0x12f)](-0x8));
                  }
                }
              }
            }
          }
        }
      }
    }
    return (
      !_0x2c24a3["endsWith"](_0x505821(0xe4)) && (_0x2c24a3 += _0x505821(0xe4)),
      _0x2c24a3
    );
  } catch (_0xec84ce) {
    return _0x401282;
  }
}
async function asyncForEach(_0x3b10d2, _0x52199e) {
  for (let _0x2b63d3 = 0x0; _0x2b63d3 < _0x3b10d2["length"]; _0x2b63d3++) {
    await _0x52199e(_0x3b10d2[_0x2b63d3], _0x2b63d3, _0x3b10d2);
  }
}
async function removeForbiddenCharacters(_0x1e949a) {
  const _0x5912b6 = _0x486a;
  return _0x1e949a?.[_0x5912b6(0xe0)](/[\x00-\x1F\x7F-\x9F'\\"]/g, "");
}
async function parseIncomingMessage(_0x1aa288, _0x31fdd4) {
  const _0x466ccc = _0x486a,
    _0x2e92ba = Object[_0x466ccc(0x128)](
      _0x1aa288[_0x466ccc(0x11d)] || {}
    )[0x0],
    _0x2c694e =
      _0x2e92ba === _0x466ccc(0x12e) &&
      _0x1aa288[_0x466ccc(0x11d)][_0x466ccc(0x12e)]
        ? _0x1aa288["message"][_0x466ccc(0x12e)]
        : _0x2e92ba == "imageMessage" &&
          _0x1aa288["message"][_0x466ccc(0x11b)]["caption"]
        ? _0x1aa288[_0x466ccc(0x11d)][_0x466ccc(0x11b)][_0x466ccc(0xe2)]
        : _0x2e92ba == "videoMessage" &&
          _0x1aa288[_0x466ccc(0x11d)][_0x466ccc(0xe5)][_0x466ccc(0xe2)]
        ? _0x1aa288["message"][_0x466ccc(0xe5)][_0x466ccc(0xe2)]
        : _0x2e92ba == _0x466ccc(0x117) &&
          _0x1aa288["message"][_0x466ccc(0x117)][_0x466ccc(0x121)]
        ? _0x1aa288[_0x466ccc(0x11d)][_0x466ccc(0x117)][_0x466ccc(0x121)]
        : _0x2e92ba == "messageContextInfo" &&
          _0x1aa288[_0x466ccc(0x11d)][_0x466ccc(0xfa)]?.["title"]
        ? _0x1aa288["message"][_0x466ccc(0xfa)][_0x466ccc(0x10d)]
        : _0x2e92ba == _0x466ccc(0xff)
        ? _0x1aa288?.["message"]?.[_0x466ccc(0x10c)]?.[_0x466ccc(0xee)]
        : _0x2e92ba == _0x466ccc(0x10e) &&
          _0x1aa288[_0x466ccc(0x11d)][_0x466ccc(0x10e)]["hydratedTemplate"][
            _0x466ccc(0x11e)
          ]
        ? _0x1aa288[_0x466ccc(0x11d)]["templateMessage"][_0x466ccc(0xf3)][
            _0x466ccc(0x11e)
          ]
        : _0x1aa288[_0x466ccc(0x11d)]?.[_0x466ccc(0x111)]?.[
            "selectedDisplayText"
          ]
        ? _0x1aa288[_0x466ccc(0x11d)]?.[_0x466ccc(0x111)]?.[_0x466ccc(0xee)]
        : "",
    _0x2b17de = _0x1aa288["key"]["remoteJid"][_0x466ccc(0x112)]("@")[0x0],
    _0x159455 = await getMediaMessage(_0x1aa288, ![], _0x31fdd4),
    _0x2fd832 = _0x159455?.[_0x466ccc(0xe2)]
      ? _0x159455[_0x466ccc(0xe2)]
      : _0x2c694e,
    _0x5bd66e = await removeForbiddenCharacters(_0x2fd832);
  return { command: _0x5bd66e, from: _0x2b17de, media: _0x159455 };
}
function convertToBuffer(_0x1d97b4) {
  const _0xf7c965 = _0x486a;
  if (!_0x1d97b4) return null;
  try {
    if (Buffer["isBuffer"](_0x1d97b4)) return _0x1d97b4;
    if (_0x1d97b4 instanceof ArrayBuffer)
      return Buffer[_0xf7c965(0xeb)](_0x1d97b4);
    if (
      Array[_0xf7c965(0xfd)](_0x1d97b4) ||
      (typeof _0x1d97b4 === "object" &&
        _0x1d97b4[_0xf7c965(0x109)] !== undefined)
    )
      return Buffer["from"](_0x1d97b4);
    if (typeof _0x1d97b4 === _0xf7c965(0x122)) {
      const _0x57c5b2 = Object[_0xf7c965(0x128)](_0x1d97b4),
        _0xf2cedd = _0x57c5b2[_0xf7c965(0x130)](
          (_0xdf8f9d) => !isNaN(Number(_0xdf8f9d))
        );
      if (_0xf2cedd && _0x57c5b2[_0xf7c965(0x109)] > 0x0) {
        const _0xb33e34 = _0x57c5b2[_0xf7c965(0xf2)](
            (_0x133b06, _0x34f330) => Number(_0x133b06) - Number(_0x34f330)
          )["map"]((_0xa1fc5b) => _0x1d97b4[_0xa1fc5b]),
          _0x407fd3 = _0xb33e34[_0xf7c965(0x12a)](
            (_0x3f151b) =>
              typeof _0x3f151b === _0xf7c965(0x12b) &&
              _0x3f151b >= 0x0 &&
              _0x3f151b <= 0xff
          );
        if (_0x407fd3[_0xf7c965(0x109)] > 0x0) return Buffer["from"](_0x407fd3);
      }
    }
    return null;
  } catch (_0x176ee2) {
    return console["error"](_0xf7c965(0xf5), _0x176ee2), null;
  }
}
export async function getMediaMessage(_0x2fd6a7, _0x3f8146 = ![], _0x1ea41e) {
  const _0xb85cfd = _0x486a,
    _0x59b472 = [
      _0xb85cfd(0x119),
      _0xb85cfd(0xea),
      _0xb85cfd(0xf0),
      _0xb85cfd(0x120),
    ],
    _0x3725b2 = [
      _0xb85cfd(0x11b),
      "documentMessage",
      "audioMessage",
      _0xb85cfd(0xe5),
      _0xb85cfd(0xfc),
    ];
  try {
    for (const _0x41e70a of _0x59b472) {
      _0x2fd6a7?.["message"]?.[_0x41e70a] &&
        (_0x2fd6a7[_0xb85cfd(0x11d)] =
          _0x2fd6a7["message"][_0x41e70a]["message"]);
    }
    let _0x628756, _0x326a9e;
    for (const _0x123efa of _0x3725b2) {
      _0x628756 = _0x2fd6a7[_0xb85cfd(0x11d)]?.[_0x123efa];
      if (_0x628756) {
        _0x326a9e = _0x123efa;
        break;
      }
    }
    if (!_0x628756) return _0x3f8146 ? undefined : null;
    _0x628756["mediaKey"] &&
      (_0x628756[_0xb85cfd(0xda)] = convertToBuffer(
        _0x628756[_0xb85cfd(0xda)]
      ));
    const _0x32109a = await downloadMediaMessage(
        { key: _0x2fd6a7["key"], message: _0x2fd6a7[_0xb85cfd(0x11d)] },
        "buffer",
        {},
        {
          logger: { level: _0xb85cfd(0xed) },
          reuploadRequest: _0x1ea41e?.[_0xb85cfd(0x106)],
        }
      ),
      _0x18785b =
        _0x35b580[_0xb85cfd(0x110)](_0x628756?.[_0xb85cfd(0xf7)]) ||
        _0xb85cfd(0x108),
      _0x3446e7 =
        _0x628756?.[_0xb85cfd(0xe7)] ||
        _0x2fd6a7[_0xb85cfd(0x101)]["id"] + "." + _0x18785b ||
        ulid() + "." + _0x18785b;
    return {
      fileName: _0x3446e7,
      caption: _0x628756?.[_0xb85cfd(0xe2)],
      mimetype: _0x628756?.[_0xb85cfd(0xf7)],
      stream: _0x32109a,
      mediaType: _0x326a9e,
    };
  } catch (_0x50f884) {
    return (
      console[_0xb85cfd(0xe6)]("getMediaMessage\x20error:", _0x50f884), null
    );
  }
}
function getSavedPhoneNumber(_0x56fb56) {
  return new Promise((_0xcf3a59, _0x82f12c) => {
    const _0xa7e812 = _0x486a,
      _0x4cc1b0 = _0x56fb56;
    _0x4cc1b0
      ? setTimeout(() => {
          _0xcf3a59(_0x4cc1b0);
        }, 0xbb8)
      : _0x82f12c(new Error(_0xa7e812(0xe8)));
  });
}
const prepareMediaMessage = async (_0x4269a2, _0x414449) => {
    const _0xe92d0a = _0x486a;
    try {
      const _0x574f21 = await prepareWAMessageMedia(
          { [_0x414449["mediatype"]]: { url: _0x414449["media"] } },
          { upload: _0x4269a2[_0xe92d0a(0xe1)] }
        ),
        _0x1a8213 = _0x414449[_0xe92d0a(0x127)] + _0xe92d0a(0xfe);
      if (
        _0x414449[_0xe92d0a(0x127)] === _0xe92d0a(0xdb) &&
        !_0x414449["fileName"]
      ) {
        const _0xf8d35a = new RegExp(/.*\/(.+?)\./),
          _0x22c97a = _0xf8d35a[_0xe92d0a(0x10b)](_0x414449[_0xe92d0a(0x11a)]);
        _0x414449["fileName"] = _0x22c97a[0x1];
      }
      let _0x5c2ce9 = _0x35b580["lookup"](_0x414449[_0xe92d0a(0x11a)]);
      if (!_0x5c2ce9) {
        const _0x45d3aa = await _0x4f1173["head"](_0x414449[_0xe92d0a(0x11a)]);
        _0x5c2ce9 = _0x45d3aa["headers"][_0xe92d0a(0xe3)];
      }
      _0x414449[_0xe92d0a(0x11a)][_0xe92d0a(0x105)](_0xe92d0a(0x125)) &&
        (_0x5c2ce9 = _0xe92d0a(0xf6));
      (_0x574f21[_0x1a8213][_0xe92d0a(0xe2)] = _0x414449?.[_0xe92d0a(0xe2)]),
        (_0x574f21[_0x1a8213]["mimetype"] = _0x5c2ce9),
        (_0x574f21[_0x1a8213][_0xe92d0a(0xe7)] = _0x414449["fileName"]);
      _0x414449[_0xe92d0a(0x127)] === _0xe92d0a(0xf4) &&
        ((_0x574f21[_0x1a8213][_0xe92d0a(0x118)] = Uint8Array[_0xe92d0a(0xeb)](
          _0x496823["readFileSync"](
            join(
              process[_0xe92d0a(0x126)](),
              _0xe92d0a(0x116),
              _0xe92d0a(0x113),
              _0xe92d0a(0x10a)
            )
          )
        )),
        (_0x574f21[_0x1a8213][_0xe92d0a(0x102)] = ![]));
      let _0x2bc7a3 = _0x4269a2["user"]["id"][_0xe92d0a(0xe0)](/:\d+/, "");
      return await generateWAMessageFromContent(
        "",
        { [_0x1a8213]: { ..._0x574f21[_0x1a8213] } },
        { userJid: _0x2bc7a3 }
      );
    } catch (_0x277563) {
      return console["log"](_0xe92d0a(0x131), _0x277563), ![];
    }
  },
  formatMXOrARNumber = (_0x3f1dc1) => {
    const _0x3e93b8 = _0x486a,
      _0x578cf6 = new RegExp(/^(\d{2})(\d{2})\d{1}(\d{8})$/);
    if (_0x578cf6[_0x3e93b8(0xdc)](_0x3f1dc1)) {
      const _0x20e051 = _0x578cf6[_0x3e93b8(0x10b)](_0x3f1dc1);
      if (_0x20e051 && (_0x20e051[0x1] === "52" || _0x20e051[0x1] === "54")) {
        const _0x3edf91 = Number["parseInt"](_0x20e051[0x3][0x0]),
          _0x331b16 = Number[_0x3e93b8(0xec)](_0x20e051[0x2]);
        if (_0x3edf91 < 0x7 || _0x331b16 < 0xb) return _0x20e051[0x0];
        return _0x20e051[0x1] === "52"
          ? "52" + _0x20e051[0x3]
          : "54" + _0x20e051[0x3];
      }
    }
    return _0x3f1dc1;
  },
  formatIDNumber = (_0x87e9b0) => {
    const _0x406c57 = _0x486a;
    return _0x87e9b0[_0x406c57(0xf8)]("0")
      ? "62" + _0x87e9b0[_0x406c57(0xf9)](0x1)
      : _0x87e9b0;
  },
  createJid = (_0x5c393d) => {
    const _0x3dc831 = _0x486a;
    if (
      _0x5c393d["includes"](_0x3dc831(0x11c)) ||
      _0x5c393d["includes"](_0x3dc831(0xe4))
    )
      return _0x5c393d;
    const _0x5617b4 = formatIDNumber(_0x5c393d);
    if (_0x5617b4 !== _0x5c393d) return _0x5617b4 + "@s.whatsapp.net";
    const _0x6f807b = formatMXOrARNumber(_0x5c393d);
    if (_0x6f807b !== _0x5c393d) return _0x6f807b + _0x3dc831(0xe4);
    if (_0x5c393d[_0x3dc831(0x105)]("-")) return _0x5c393d + _0x3dc831(0x11c);
    return _0x5c393d + _0x3dc831(0xe4);
  };
async function delayMsg(_0x16af3b, _0x4c5076, _0x6a0ca, _0x24d95e = ![]) {
  const _0x28fcd0 = _0x486a,
    _0x27339c = createJid(_0x6a0ca);
  await _0x4c5076[_0x28fcd0(0x124)](_0x6a0ca);
  _0x24d95e && (await _0x4c5076[_0x28fcd0(0xef)](_0x28fcd0(0x114), _0x27339c));
  await _0x3a72c8(_0x16af3b);
  if (_0x24d95e) {
  }
}
export {
  formatReceipt,
  asyncForEach,
  removeForbiddenCharacters,
  parseIncomingMessage,
  getSavedPhoneNumber,
  prepareMediaMessage,
  createJid,
  delayMsg,
};
