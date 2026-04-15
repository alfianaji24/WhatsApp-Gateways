function _0x513a(_0xd97a8c, _0x2e38e0) {
  const _0x34fa7d = _0x34fa();
  return (
    (_0x513a = function (_0x513a02, _0x7a34e9) {
      _0x513a02 = _0x513a02 - 0x16e;
      let _0x4ed5a = _0x34fa7d[_0x513a02];
      return _0x4ed5a;
    }),
    _0x513a(_0xd97a8c, _0x2e38e0)
  );
}
(function (_0x15856b, _0x5004b6) {
  const _0x3fcb00 = _0x513a,
    _0xa78a3f = _0x15856b();
  while (!![]) {
    try {
      const _0x282434 =
        (-parseInt(_0x3fcb00(0x186)) / 0x1) *
          (-parseInt(_0x3fcb00(0x171)) / 0x2) +
        (parseInt(_0x3fcb00(0x18d)) / 0x3) *
          (parseInt(_0x3fcb00(0x172)) / 0x4) +
        (-parseInt(_0x3fcb00(0x180)) / 0x5) *
          (-parseInt(_0x3fcb00(0x18f)) / 0x6) +
        parseInt(_0x3fcb00(0x17f)) / 0x7 +
        -parseInt(_0x3fcb00(0x18c)) / 0x8 +
        parseInt(_0x3fcb00(0x175)) / 0x9 +
        (-parseInt(_0x3fcb00(0x181)) / 0xa) *
          (parseInt(_0x3fcb00(0x178)) / 0xb);
      if (_0x282434 === _0x5004b6) break;
      else _0xa78a3f["push"](_0xa78a3f["shift"]());
    } catch (_0x282de3) {
      _0xa78a3f["push"](_0xa78a3f["shift"]());
    }
  }
})(_0x34fa, 0x82de4);
import { ulid } from "ulid";
import { formatButtonMsg, Button } from "../dto/button.js";
import { formatListMsg, Section } from "../dto/list.js";
import { prepareMediaMessage } from "../lib/helper.js";
export const handleMediaReply = async (
  _0x4ab2ef,
  _0x5c93d8,
  _0x22b659,
  _0x34e60a
) => {
  const _0x8ddcec = _0x513a,
    _0x6a0800 = _0x5c93d8[_0x8ddcec(0x187)]["id"][_0x8ddcec(0x16f)](/:\d+/, "");
  if (_0x4ab2ef[_0x8ddcec(0x16e)] === _0x8ddcec(0x17a))
    return _0x5c93d8["sendMessage"](_0x22b659[_0x8ddcec(0x174)]["remoteJid"], {
      audio: { url: _0x4ab2ef[_0x8ddcec(0x188)] },
      ptt: !![],
      mimetype: _0x8ddcec(0x190),
    });
  const _0x35ed00 = await prepareMediaMessage(_0x5c93d8, {
      caption: _0x4ab2ef["caption"] || "",
      fileName: _0x4ab2ef["filename"],
      media: _0x4ab2ef[_0x8ddcec(0x188)],
      mediatype: [_0x8ddcec(0x176), _0x8ddcec(0x17e)][_0x8ddcec(0x170)](
        _0x4ab2ef[_0x8ddcec(0x16e)]
      )
        ? _0x4ab2ef[_0x8ddcec(0x16e)]
        : "document",
    }),
    _0x5c53a7 = { ..._0x35ed00[_0x8ddcec(0x182)] };
  return _0x5c93d8["sendMessage"](
    _0x22b659[_0x8ddcec(0x174)]["remoteJid"],
    {
      forward: {
        key: { remoteJid: _0x6a0800, fromMe: !![] },
        message: _0x5c53a7,
      },
    },
    { quoted: _0x34e60a ? _0x22b659 : null }
  );
};
function _0x34fa() {
  const _0x126595 = [
    "message",
    "sendMessage",
    "now",
    "map",
    "279109VFCzcn",
    "user",
    "url",
    "caption",
    "buttons",
    "otw\x20send",
    "744424xuKfgR",
    "54BvJAta",
    "remoteJid",
    "12AEGiFS",
    "audio/mpeg",
    "type",
    "replace",
    "includes",
    "2TLETiP",
    "180312aoGDaU",
    "participant",
    "key",
    "5967882MYNoVp",
    "video",
    "text",
    "22035299fYLTCw",
    "relayMessage",
    "audio",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
    "footer",
    "profilePictureUrl",
    "image",
    "1264263UdGftq",
    "1745195dhbDUj",
    "10muGJva",
  ];
  _0x34fa = function () {
    return _0x126595;
  };
  return _0x34fa();
}
export const handleButtonReply = async (_0x5f4d0a, _0x55b702, _0x692c3d) => {
  const _0x357018 = _0x513a,
    _0x5d4b55 = _0x5f4d0a[_0x357018(0x18a)][_0x357018(0x185)](
      (_0x2a3ff9) => new Button(_0x2a3ff9)
    ),
    _0x47ecc0 = formatButtonMsg(
      _0x5d4b55,
      _0x5f4d0a[_0x357018(0x17c)],
      _0x5f4d0a[_0x357018(0x177)] || _0x5f4d0a[_0x357018(0x189)],
      _0x55b702,
      _0x5f4d0a[_0x357018(0x17e)]?.[_0x357018(0x188)]
    ),
    _0x551360 = ulid(Date[_0x357018(0x184)]());
  return _0x55b702[_0x357018(0x179)](
    _0x692c3d[_0x357018(0x174)][_0x357018(0x18e)],
    _0x47ecc0,
    { messageId: _0x551360 }
  );
};
export const handleListReply = async (_0x222919, _0x55a889, _0x5642f9) => {
  const _0x3bc572 = _0x513a,
    _0x292b39 = _0x222919["sections"][_0x3bc572(0x185)](
      (_0x25d878) => new Section(_0x25d878)
    ),
    _0x5ef55e = formatListMsg(
      _0x292b39,
      _0x222919[_0x3bc572(0x17c)] || "..",
      _0x222919["text"] || _0x222919[_0x3bc572(0x189)],
      _0x55a889,
      _0x222919["image"]?.[_0x3bc572(0x188)]
    ),
    _0x1b030d = ulid(Date[_0x3bc572(0x184)]());
  return _0x55a889[_0x3bc572(0x179)](
    _0x5642f9["key"][_0x3bc572(0x18e)],
    _0x5ef55e,
    { messageId: _0x1b030d }
  );
};
export const handleTextReply = async (
  _0x324be3,
  _0x38fbf5,
  _0x3bc816,
  _0x3e0393
) => {
  const _0x26044a = _0x513a;
  return (
    console["log"](_0x26044a(0x18b)),
    _0x38fbf5[_0x26044a(0x183)](
      _0x3bc816[_0x26044a(0x174)][_0x26044a(0x18e)],
      _0x324be3,
      { quoted: _0x3e0393 ? _0x3bc816 : null }
    )
  );
};
export const getPpUrlFromSock = async (_0x51e308, _0x444576) => {
  const _0x26cd17 = _0x513a;
  try {
    const _0x457e47 =
      _0x444576[_0x26cd17(0x174)][_0x26cd17(0x173)] &&
      _0x444576[_0x26cd17(0x174)][_0x26cd17(0x173)]["trim"]() !== ""
        ? _0x444576["key"][_0x26cd17(0x173)]
        : _0x444576[_0x26cd17(0x174)][_0x26cd17(0x18e)];
    return await _0x51e308[_0x26cd17(0x17d)](_0x457e47);
  } catch (_0x38c472) {
    return _0x26cd17(0x17b);
  }
};
