const _0x37ed29 = _0x146c;
(function (_0x55059c, _0x428006) {
  const _0x1ac802 = _0x146c,
    _0x3a7ef8 = _0x55059c();
  while (!![]) {
    try {
      const _0x458fc6 =
        -parseInt(_0x1ac802(0xd1)) / 0x1 +
        (parseInt(_0x1ac802(0xe0)) / 0x2) * (parseInt(_0x1ac802(0xcf)) / 0x3) +
        (-parseInt(_0x1ac802(0xc1)) / 0x4) * (parseInt(_0x1ac802(0xbc)) / 0x5) +
        (parseInt(_0x1ac802(0xeb)) / 0x6) * (-parseInt(_0x1ac802(0xee)) / 0x7) +
        -parseInt(_0x1ac802(0xc0)) / 0x8 +
        -parseInt(_0x1ac802(0xea)) / 0x9 +
        (-parseInt(_0x1ac802(0xed)) / 0xa) * (-parseInt(_0x1ac802(0xcd)) / 0xb);
      if (_0x458fc6 === _0x428006) break;
      else _0x3a7ef8["push"](_0x3a7ef8["shift"]());
    } catch (_0x3d6d9d) {
      _0x3a7ef8["push"](_0x3a7ef8["shift"]());
    }
  }
})(_0x1fd3, 0xd3848);
import _0x50b3d1 from "express";
import _0x3a81f7 from "path";
function _0x146c(_0x4d3fe2, _0x45e093) {
  const _0x1fd303 = _0x1fd3();
  return (
    (_0x146c = function (_0x146c03, _0x545a35) {
      _0x146c03 = _0x146c03 - 0xbc;
      let _0x1a9e20 = _0x1fd303[_0x146c03];
      return _0x1a9e20;
    }),
    _0x146c(_0x4d3fe2, _0x45e093)
  );
}
import { fileURLToPath } from "url";
import * as _0x52664a from "./../lib/cache.js";
import * as _0x5b4767 from "../controllers/index.js";
function _0x1fd3() {
  const _0x257ff5 = [
    "sendButtonMessage",
    "3529377iTqdWn",
    "4987758qunnNu",
    "/backend-blast",
    "18077830mMaVsB",
    "7CSapKK",
    "length",
    "/backend-send-media",
    "sendSticker",
    "get",
    "startsWith",
    "417365yLzwMT",
    "json",
    "/backend-clearCache",
    "specific",
    "256216IQBjnx",
    "20hHtRba",
    "prefix",
    "sendVcard",
    "sendListMessage",
    "sendAvailable",
    "sendMedia",
    "createInstance",
    "/backend-logout-device",
    "myCache",
    "checkNumber",
    "/backend-getgroups",
    "/backend-send-button",
    "11EoqJEF",
    "/backend-send-location",
    "12opBvRT",
    "all",
    "534137rKSYfr",
    "Invalid\x20clear\x20cache\x20request.\x20Mode\x20or\x20key\x20missing/invalid.",
    "/backend-initialize",
    "/backend-send-list",
    "body",
    "/backend-check-number",
    "Router",
    "/backend-send-vcard",
    "/backend-send-available",
    "/backend-send-text",
    "sendText",
    "sendPoll",
    "Deleted\x20",
    "/backend-logout",
    "dirname",
    "632784DEfOUV",
    "log",
    "fetchGroups",
    "sendLocation",
    "url",
    "post",
    "/backend-generate-qr",
    "/backend-send-sticker",
    "logoutDevice",
  ];
  _0x1fd3 = function () {
    return _0x257ff5;
  };
  return _0x1fd3();
}
import { initialize } from "../whatsapp.js";
import { sendBlastMessage } from "../controllers/blast.js";
import {
  checkDestination,
  checkConnectionBeforeBlast,
} from "../lib/middleware.js";
const router = _0x50b3d1[_0x37ed29(0xd7)](),
  __filename = fileURLToPath(import.meta[_0x37ed29(0xe4)]),
  __dirname = _0x3a81f7[_0x37ed29(0xdf)](__filename);
router[_0x37ed29(0xf2)]("/", (_0x391261, _0x517347) => {
  _0x517347["sendFile"](
    _0x3a81f7["join"](__dirname, "../../public/index.html")
  );
}),
  router[_0x37ed29(0xe5)](_0x37ed29(0xde), _0x5b4767["deleteCredentials"]),
  router[_0x37ed29(0xe5)](_0x37ed29(0xe6), _0x5b4767[_0x37ed29(0xc7)]),
  router[_0x37ed29(0xe5)](_0x37ed29(0xd3), initialize),
  router[_0x37ed29(0xe5)](
    _0x37ed29(0xd4),
    checkDestination,
    _0x5b4767[_0x37ed29(0xc4)]
  ),
  router[_0x37ed29(0xe5)](
    "/backend-send-template",
    checkDestination,
    _0x5b4767["sendTemplateMessage"]
  ),
  router["post"](_0x37ed29(0xcc), checkDestination, _0x5b4767[_0x37ed29(0xe9)]),
  router[_0x37ed29(0xe5)](
    _0x37ed29(0xf0),
    checkDestination,
    _0x5b4767[_0x37ed29(0xc6)]
  ),
  router[_0x37ed29(0xe5)](
    _0x37ed29(0xda),
    checkDestination,
    _0x5b4767[_0x37ed29(0xdb)]
  ),
  router["post"](
    "/backend-send-poll",
    checkDestination,
    _0x5b4767[_0x37ed29(0xdc)]
  ),
  router[_0x37ed29(0xe5)](
    _0x37ed29(0xe7),
    checkDestination,
    _0x5b4767[_0x37ed29(0xf1)]
  ),
  router[_0x37ed29(0xe5)](_0x37ed29(0xd9), _0x5b4767[_0x37ed29(0xc5)]),
  router["post"](_0x37ed29(0xce), checkDestination, _0x5b4767[_0x37ed29(0xe3)]),
  router["post"](_0x37ed29(0xd8), checkDestination, _0x5b4767[_0x37ed29(0xc3)]),
  router["post"](_0x37ed29(0xcb), _0x5b4767[_0x37ed29(0xe2)]),
  router[_0x37ed29(0xe5)](
    _0x37ed29(0xec),
    checkConnectionBeforeBlast,
    sendBlastMessage
  ),
  router[_0x37ed29(0xe5)](_0x37ed29(0xc8), _0x5b4767[_0x37ed29(0xe8)]),
  router[_0x37ed29(0xe5)](_0x37ed29(0xd6), _0x5b4767[_0x37ed29(0xca)]),
  router["post"](_0x37ed29(0xbe), async (_0x5606ab, _0xdc6dec) => {
    const _0x9b7b10 = _0x37ed29,
      { key: _0x82e184, mode: _0x277995 } = _0x5606ab[_0x9b7b10(0xd5)],
      _0xef824b = _0x52664a[_0x9b7b10(0xc9)]["keys"]();
    let _0x5ad507 = [];
    if (_0x277995 === _0x9b7b10(0xd0)) _0x5ad507 = _0xef824b;
    else {
      if (_0x277995 === _0x9b7b10(0xc2) && _0x82e184)
        _0x5ad507 = _0xef824b["filter"]((_0x4ff457) =>
          _0x4ff457[_0x9b7b10(0xf3)](_0x82e184)
        );
      else
        _0x277995 === _0x9b7b10(0xbf) && _0x82e184
          ? (_0x5ad507 = _0xef824b["filter"](
              (_0x5e327b) => _0x5e327b === _0x82e184
            ))
          : console[_0x9b7b10(0xe1)](_0x9b7b10(0xd2), {
              mode: _0x277995,
              key: _0x82e184,
            });
    }
    return (
      _0x5ad507["length"] > 0x0 && _0x52664a["myCache"]["del"](_0x5ad507),
      console[_0x9b7b10(0xe1)](
        _0x9b7b10(0xdd) + _0x5ad507[_0x9b7b10(0xef)] + "\x20cache\x20keys."
      ),
      _0xdc6dec[_0x9b7b10(0xbd)]({
        status: "success",
        deleted: _0x5ad507[_0x9b7b10(0xef)],
        deletedKeys: _0x5ad507,
      })
    );
  });
export default router;
