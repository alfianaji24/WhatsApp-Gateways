(function (_0x3f8394, _0x32632f) {
  const _0x241b98 = _0x1ce9,
    _0x2121e5 = _0x3f8394();
  while (!![]) {
    try {
      const _0x10624d =
        -parseInt(_0x241b98(0xe9)) / 0x1 +
        parseInt(_0x241b98(0xd0)) / 0x2 +
        (-parseInt(_0x241b98(0xd9)) / 0x3) * (parseInt(_0x241b98(0xe2)) / 0x4) +
        parseInt(_0x241b98(0xf7)) / 0x5 +
        parseInt(_0x241b98(0xd8)) / 0x6 +
        parseInt(_0x241b98(0xdb)) / 0x7 +
        parseInt(_0x241b98(0xea)) / 0x8;
      if (_0x10624d === _0x32632f) break;
      else _0x2121e5["push"](_0x2121e5["shift"]());
    } catch (_0x177505) {
      _0x2121e5["push"](_0x2121e5["shift"]());
    }
  }
})(_0x2a05, 0x9bd6e);
import { parseIncomingMessage, delayMsg } from "../lib/helper.js";
import {
  isExistsEqualCommand,
  isExistsContainCommand,
  getUrlWebhook,
  getDevice,
} from "../database/model.js";
import {
  handleMediaReply,
  handleButtonReply,
  handleListReply,
  handleTextReply,
  getPpUrlFromSock,
} from "../service/replyHandler.js";
import { sendWebhook } from "../service/webhook.js";
function _0x2a05() {
  const _0x4dd259 = [
    "status",
    "[WA]\x20Pesan\x20gagal\x20didekripsi,\x20diabaikan.",
    "68556PCVNDI",
    "group",
    "All",
    "buttons",
    "fulfilled",
    "value",
    "participant",
    "Personal",
    "1943940UJiivd",
    "224031vyaGuj",
    "@g.us",
    "241535WxTATo",
    "error",
    "typeBot",
    "stringify",
    "reply",
    "message",
    "string",
    "8BXbTvH",
    "allSettled",
    "reply_when",
    "readMessages",
    "type",
    "object",
    "log",
    "67127ynTniU",
    "1683840WAXlDL",
    "messages",
    "remoteJid",
    "{name}",
    "replace",
    "Skipping\x20old\x20messages\x20on\x20first\x20connect...",
    "sections",
    "wh_read",
    "quoted",
    "status@broadcast",
    "handled",
    "key",
    "warn",
    "1257730QyNMcB",
    "includes",
    "length",
    "parse",
    "IncomingMessage\x20error:",
    "decrypt",
    "fromMe",
  ];
  _0x2a05 = function () {
    return _0x4dd259;
  };
  return _0x2a05();
}
import { runPlugins } from "../plugins/pluginManager.js";
import { isJidNewsletter } from "@whiskeysockets/baileys";
const lastMessageMap = {};
function _0x1ce9(_0x1d9a93, _0x4ae10b) {
  const _0x2a05dd = _0x2a05();
  return (
    (_0x1ce9 = function (_0x1ce97e, _0x3bb79b) {
      _0x1ce97e = _0x1ce97e - 0xcc;
      let _0x385cdb = _0x2a05dd[_0x1ce97e];
      return _0x385cdb;
    }),
    _0x1ce9(_0x1d9a93, _0x4ae10b)
  );
}
let isFirstConnect = !![];
const IncomingMessage = async (_0x4037ac, _0x1d315d) => {
  const _0x24ac15 = _0x1ce9;
  try {
    if (
      !_0x4037ac ||
      !_0x4037ac[_0x24ac15(0xeb)] ||
      _0x4037ac[_0x24ac15(0xeb)]["length"] === 0x0
    )
      return;
    let _0x11e99d = _0x4037ac[_0x24ac15(0xeb)][0x0];
    if (!_0x11e99d || !_0x11e99d[_0x24ac15(0xe0)]) return;
    const _0x357c3e = _0x11e99d[_0x24ac15(0xf5)]["remoteJid"],
      _0x253b51 = _0x11e99d[_0x24ac15(0xf5)]["id"];
    if (isFirstConnect) {
      console[_0x24ac15(0xe8)](_0x24ac15(0xef)), (isFirstConnect = ![]);
      return;
    }
    const _0x42be4e = JSON[_0x24ac15(0xde)](_0x11e99d[_0x24ac15(0xe0)]),
      _0xc5b6e0 = _0x11e99d[_0x24ac15(0xf5)]["id"] + "_" + _0x42be4e;
    if (lastMessageMap[_0x357c3e] === _0xc5b6e0) return;
    lastMessageMap[_0x357c3e] = _0xc5b6e0;
    if (
      _0x11e99d[_0x24ac15(0xf5)][_0x24ac15(0xcd)] ||
      _0x11e99d[_0x24ac15(0xf5)]["remoteJid"] === _0x24ac15(0xf3) ||
      isJidNewsletter(_0x11e99d[_0x24ac15(0xf5)][_0x24ac15(0xec)])
    )
      return;
    const _0x5e2085 = _0x11e99d?.["pushName"] || "",
      _0x13858c = _0x1d315d["user"]["id"]["split"](":")[0x0],
      {
        command: _0x1dae1c,
        media: _0x52883f,
        from: _0x5779d1,
      } = await parseIncomingMessage(_0x11e99d, _0x1d315d);
    if (!_0x1dae1c) return;
    const _0x4ac438 = _0x11e99d[_0x24ac15(0xf5)][_0x24ac15(0xd6)],
      _0x3e9b8e = await getDevice(_0x13858c);
    let _0x1af0ff = ![];
    _0x3e9b8e[_0x24ac15(0xf9)] > 0x0 &&
      _0x3e9b8e[0x0][_0x24ac15(0xf1)] === 0x1 &&
      _0x1d315d[_0x24ac15(0xe5)]([_0x11e99d[_0x24ac15(0xf5)]]);
    const _0x18b16b = {
        msg: _0x11e99d,
        sock: _0x1d315d,
        command: _0x1dae1c,
        from: _0x5779d1,
        senderName: _0x5e2085,
        numberWa: _0x13858c,
        device: _0x3e9b8e,
        participant: _0x4ac438,
        media: _0x52883f,
      },
      _0x4f84ab = (async () => {
        const _0x356648 = _0x24ac15,
          _0x46c77f = await getUrlWebhook(_0x13858c);
        if (!_0x46c77f) return null;
        const _0x498358 = await getPpUrlFromSock(_0x1d315d, _0x11e99d),
          _0x1f47c2 = await sendWebhook({
            device: _0x13858c,
            command: _0x1dae1c,
            media: _0x52883f,
            from: _0x5779d1,
            name: _0x5e2085,
            url: _0x46c77f,
            participant: _0x4ac438,
            ppUrl: _0x498358,
          });
        return typeof _0x1f47c2 === _0x356648(0xe7) ? _0x1f47c2 : null;
      })(),
      _0x356fd2 = (async () => {
        const _0x344c19 = _0x24ac15;
        let _0x2a993f = await isExistsEqualCommand(_0x1dae1c, _0x13858c);
        if (!_0x2a993f[_0x344c19(0xf9)])
          _0x2a993f = await isExistsContainCommand(_0x1dae1c, _0x13858c);
        if (!_0x2a993f[_0x344c19(0xf9)]) return null;
        const _0x4874c2 = _0x2a993f[0x0],
          _0x533a44 =
            _0x4874c2["reply_when"] === _0x344c19(0xd2) ||
            (_0x4874c2["reply_when"] === "Group" &&
              _0x11e99d["key"][_0x344c19(0xec)][_0x344c19(0xf8)]("@g.us")) ||
            (_0x4874c2[_0x344c19(0xe4)] === _0x344c19(0xd7) &&
              !_0x11e99d[_0x344c19(0xf5)][_0x344c19(0xec)][_0x344c19(0xf8)](
                _0x344c19(0xda)
              ));
        console[_0x344c19(0xe8)]("ar\x20p", _0x533a44);
        if (!_0x533a44) return null;
        return typeof _0x4874c2["reply"] === _0x344c19(0xe7)
          ? _0x4874c2[_0x344c19(0xdf)]
          : _0x4874c2[_0x344c19(0xdf)];
      })(),
      _0x2e3b18 = runPlugins(_0x18b16b),
      [_0x2bc83f, _0x55b5a1, _0xee5257] = await Promise[_0x24ac15(0xe3)]([
        _0x4f84ab,
        _0x356fd2,
        _0x2e3b18,
      ]);
    let _0x453b45 = null;
    if (_0x55b5a1["status"] === "fulfilled" && _0x55b5a1[_0x24ac15(0xd5)])
      _0x453b45 = _0x55b5a1["value"];
    else {
      if (
        _0x2bc83f[_0x24ac15(0xce)] === _0x24ac15(0xd4) &&
        _0x2bc83f[_0x24ac15(0xd5)]
      )
        (_0x453b45 = _0x2bc83f[_0x24ac15(0xd5)]),
          (_0x1af0ff = _0x2bc83f[_0x24ac15(0xd5)]?.[_0x24ac15(0xf2)] || ![]);
      else {
        if (
          _0xee5257[_0x24ac15(0xce)] === _0x24ac15(0xd4) &&
          _0xee5257[_0x24ac15(0xd5)]?.[_0x24ac15(0xf4)]
        ) {
          const _0x4b85f8 =
              _0xee5257[_0x24ac15(0xd5)][_0x24ac15(0xdd)] || "all",
            _0x57feea = _0x11e99d[_0x24ac15(0xf5)]["remoteJid"][
              _0x24ac15(0xf8)
            ](_0x24ac15(0xda)),
            _0x157b7c =
              _0x4b85f8 === "all" ||
              (_0x4b85f8 === _0x24ac15(0xd1) && _0x57feea) ||
              (_0x4b85f8 === "personal" && !_0x57feea);
          _0x157b7c &&
            ((_0x453b45 = _0xee5257[_0x24ac15(0xd5)][_0x24ac15(0xdf)]),
            (_0x1af0ff = _0xee5257[_0x24ac15(0xd5)][_0x24ac15(0xf2)] || ![]));
        }
      }
    }
    if (_0x453b45) {
      _0x3e9b8e[_0x24ac15(0xf9)] > 0x0 &&
        _0x3e9b8e[0x0]["wh_typing"] === 0x1 &&
        (await delayMsg(
          0x2 * 0x3e8,
          _0x1d315d,
          _0x11e99d[_0x24ac15(0xf5)][_0x24ac15(0xec)],
          !![]
        ));
      if (typeof _0x453b45 === _0x24ac15(0xe1))
        _0x453b45 = JSON[_0x24ac15(0xfa)](_0x453b45);
      typeof _0x453b45 === _0x24ac15(0xe7) &&
        _0x453b45?.["text"]?.[_0x24ac15(0xf8)](_0x24ac15(0xed)) &&
        (_0x453b45 = JSON[_0x24ac15(0xfa)](
          JSON[_0x24ac15(0xde)](_0x453b45)[_0x24ac15(0xee)](
            /{name}/g,
            _0x5e2085
          )
        ));
      if (_0x453b45[_0x24ac15(0xe6)])
        return await handleMediaReply(
          _0x453b45,
          _0x1d315d,
          _0x11e99d,
          _0x1af0ff
        );
      else {
        if (_0x453b45[_0x24ac15(0xd3)])
          return await handleButtonReply(_0x453b45, _0x1d315d, _0x11e99d);
        else
          return _0x453b45[_0x24ac15(0xf0)]
            ? await handleListReply(_0x453b45, _0x1d315d, _0x11e99d)
            : await handleTextReply(_0x453b45, _0x1d315d, _0x11e99d, _0x1af0ff);
      }
    }
  } catch (_0x59b323) {
    if (_0x59b323["message"]?.[_0x24ac15(0xf8)](_0x24ac15(0xcc))) {
      console[_0x24ac15(0xf6)](_0x24ac15(0xcf));
      return;
    }
    console[_0x24ac15(0xdc)](_0x24ac15(0xfb), _0x59b323);
  }
};
export { IncomingMessage };
