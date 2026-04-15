(function (_0x1ddd69, _0x1ebba3) {
  const _0x17e98a = _0x2ff5,
    _0x3ced22 = _0x1ddd69();
  while (!![]) {
    try {
      const _0x34ab9f =
        (parseInt(_0x17e98a(0x11d)) / 0x1) *
          (-parseInt(_0x17e98a(0x11c)) / 0x2) +
        -parseInt(_0x17e98a(0x108)) / 0x3 +
        (parseInt(_0x17e98a(0x113)) / 0x4) *
          (-parseInt(_0x17e98a(0x112)) / 0x5) +
        (parseInt(_0x17e98a(0x119)) / 0x6) *
          (-parseInt(_0x17e98a(0x105)) / 0x7) +
        (parseInt(_0x17e98a(0x10e)) / 0x8) *
          (-parseInt(_0x17e98a(0x126)) / 0x9) +
        parseInt(_0x17e98a(0x120)) / 0xa +
        (parseInt(_0x17e98a(0x111)) / 0xb) * (parseInt(_0x17e98a(0x116)) / 0xc);
      if (_0x34ab9f === _0x1ebba3) break;
      else _0x3ced22["push"](_0x3ced22["shift"]());
    } catch (_0x1bc311) {
      _0x3ced22["push"](_0x3ced22["shift"]());
    }
  }
})(_0x2850, 0xa2424);
import { downloadMediaMessage } from "@whiskeysockets/baileys";
import _0x552da4 from "fs";
function _0x2ff5(_0x5d4907, _0x3a4eb9) {
  const _0x2850a4 = _0x2850();
  return (
    (_0x2ff5 = function (_0x2ff5fd, _0x1f9a84) {
      _0x2ff5fd = _0x2ff5fd - 0x104;
      let _0x23136a = _0x2850a4[_0x2ff5fd];
      return _0x23136a;
    }),
    _0x2ff5(_0x5d4907, _0x3a4eb9)
  );
}
import _0x19cf4e from "path";
import { Sticker, StickerTypes } from "wa-sticker-formatter";
import { fileURLToPath } from "url";
async function stickerPlugin(_0x5a0250) {
  const _0x3a5b53 = _0x2ff5,
    { msg: _0x4cee73, command: _0x158473, plugin: _0xf6b4a } = _0x5a0250,
    _0x3b698d =
      typeof _0xf6b4a[_0x3a5b53(0x10c)] === "string"
        ? JSON[_0x3a5b53(0x104)](_0xf6b4a[_0x3a5b53(0x10c)])
        : _0xf6b4a[_0x3a5b53(0x10c)];
  if (_0x158473 != _0x3b698d[_0x3a5b53(0x127)]) return { handled: ![] };
  const _0x12a4f8 =
    _0x4cee73[_0x3a5b53(0x10f)]?.[_0x3a5b53(0x10a)] ||
    _0x4cee73[_0x3a5b53(0x10f)]?.[_0x3a5b53(0x106)];
  if (!_0x12a4f8)
    return {
      handled: !![],
      reply: {
        text: _0x3a5b53(0x117) + _0x3b698d[_0x3a5b53(0x127)] + _0x3a5b53(0x128),
      },
    };
  try {
    const _0x58b756 = await downloadMediaFromMessage(_0x4cee73),
      _0x4ea095 = _0x58b756[_0x3a5b53(0x123)]("base64"),
      _0x4610b3 = fileURLToPath(import.meta["url"]),
      _0x3d45e = _0x19cf4e["dirname"](_0x4610b3),
      _0x9402e = _0x19cf4e[_0x3a5b53(0x11b)](
        _0x3d45e,
        "..",
        _0x3a5b53(0x125),
        _0x3a5b53(0x11a)
      ),
      _0x123e05 = _0x19cf4e[_0x3a5b53(0x11b)](_0x9402e, _0x3a5b53(0x124)),
      _0x4a16c7 = _0x19cf4e[_0x3a5b53(0x11b)](_0x9402e, "sticker.webp");
    !_0x552da4[_0x3a5b53(0x10b)](_0x9402e) &&
      _0x552da4[_0x3a5b53(0x10d)](_0x9402e, { recursive: !![] });
    _0x552da4[_0x3a5b53(0x122)](
      _0x123e05,
      Buffer[_0x3a5b53(0x114)](_0x4ea095, _0x3a5b53(0x118))
    );
    if (_0x552da4[_0x3a5b53(0x10b)](_0x4a16c7))
      _0x552da4[_0x3a5b53(0x115)](_0x4a16c7);
    const _0x3ca827 = new Sticker(_0x123e05, {
      pack: _0x3a5b53(0x121),
      author: "M\x20Pedia",
      type: StickerTypes["CROPPED"],
      categories: ["🤩", "🎉"],
      id: _0x3a5b53(0x110),
      quality: 0x64,
      background: _0x3a5b53(0x11f),
    });
    return (
      await _0x3ca827[_0x3a5b53(0x11e)](_0x4a16c7),
      {
        handled: !![],
        reply: { sticker: _0x552da4["readFileSync"](_0x4a16c7) },
      }
    );
  } catch (_0x1082f9) {
    return (
      console["error"]("[Sticker\x20Plugin\x20Error]", _0x1082f9),
      { handled: !![], reply: { text: _0x3a5b53(0x109) } }
    );
  }
}
function _0x2850() {
  const _0x571f15 = [
    "extendedImageMessage",
    "concat",
    "128331RVWrMq",
    "❌\x20Gagal\x20membuat\x20stiker.",
    "imageMessage",
    "existsSync",
    "extra_data",
    "mkdirSync",
    "7368qiDvsd",
    "message",
    "mpedia-sticker",
    "1375jyodcw",
    "324705GmxfkP",
    "12tVNIAJ",
    "from",
    "unlinkSync",
    "56868aRLwUv",
    "❌\x20Kirim\x20gambar\x20dan\x20berikan\x20caption\x20",
    "base64",
    "406326CRjmXN",
    "temp",
    "join",
    "2kinzdV",
    "35083ryRyRu",
    "toFile",
    "#000000",
    "12310870IUuhZg",
    "MPedia\x20Pack",
    "writeFileSync",
    "toString",
    "sticker.png",
    "data",
    "4689CBRiNz",
    "command",
    "\x20untuk\x20membuat\x20sticker.",
    "parse",
    "42dqipGN",
  ];
  _0x2850 = function () {
    return _0x571f15;
  };
  return _0x2850();
}
async function downloadMediaFromMessage(_0x4cbadb) {
  const _0x48728f = _0x2ff5,
    _0x24a623 = await downloadMediaMessage(_0x4cbadb),
    _0x3e778c = [];
  for await (const _0x1a2018 of _0x24a623) {
    _0x3e778c["push"](_0x1a2018);
  }
  return Buffer[_0x48728f(0x107)](_0x3e778c);
}
export default stickerPlugin;
