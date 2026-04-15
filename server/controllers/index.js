"use strict";
(function (_0x4973c8, _0x1663dd) {
  const _0x5387bd = _0x4c1e,
    _0x15cb71 = _0x4973c8();
  while (!![]) {
    try {
      const _0x47e2e9 =
        parseInt(_0x5387bd(0x98)) / 0x1 +
        (parseInt(_0x5387bd(0xa0)) / 0x2) * (-parseInt(_0x5387bd(0xa8)) / 0x3) +
        (-parseInt(_0x5387bd(0xb0)) / 0x4) * (parseInt(_0x5387bd(0xa1)) / 0x5) +
        parseInt(_0x5387bd(0xae)) / 0x6 +
        (-parseInt(_0x5387bd(0xb1)) / 0x7) * (parseInt(_0x5387bd(0xb4)) / 0x8) +
        (-parseInt(_0x5387bd(0xa3)) / 0x9) *
          (-parseInt(_0x5387bd(0xaa)) / 0xa) +
        (parseInt(_0x5387bd(0xa4)) / 0xb) * (parseInt(_0x5387bd(0xac)) / 0xc);
      if (_0x47e2e9 === _0x1663dd) break;
      else _0x15cb71["push"](_0x15cb71["shift"]());
    } catch (_0x3ca300) {
      _0x15cb71["push"](_0x15cb71["shift"]());
    }
  }
})(_0x41a5, 0xa3068);
function _0x4c1e(_0xfa9e1c, _0x5a1fcf) {
  const _0x41a520 = _0x41a5();
  return (
    (_0x4c1e = function (_0x4c1e90, _0x4e0b8a) {
      _0x4c1e90 = _0x4c1e90 - 0x93;
      let _0x1e7903 = _0x41a520[_0x4c1e90];
      return _0x1e7903;
    }),
    _0x4c1e(_0xfa9e1c, _0x5a1fcf)
  );
}
import * as _0x81e330 from "../whatsapp.js";
const createInstance = async (_0x21c72e, _0x233814) => {
    const _0x1f93ad = _0x4c1e,
      { token: _0x4a7a9e } = _0x21c72e[_0x1f93ad(0x96)];
    if (_0x4a7a9e)
      try {
        const _0x53f05d = await _0x81e330[_0x1f93ad(0xab)](
            _0x4a7a9e,
            _0x21c72e["io"]
          ),
          _0x2858a7 = _0x53f05d?.[_0x1f93ad(0xa9)],
          _0x2d8165 = _0x53f05d?.["message"];
        return _0x233814[_0x1f93ad(0x9f)]({
          status: _0x2858a7 ?? _0x1f93ad(0x97),
          qrcode: _0x53f05d?.[_0x1f93ad(0xa2)],
          message: _0x2d8165 ? _0x2d8165 : _0x1f93ad(0x93),
        });
      } catch (_0x487ba0) {
        return (
          console["log"](_0x487ba0),
          _0x233814[_0x1f93ad(0x9f)]({ status: ![], error: _0x487ba0 })
        );
      }
    _0x233814["status"](0x193)[_0x1f93ad(0x9d)](_0x1f93ad(0xb2));
  },
  sendText = async (_0x31f49a, _0x75b058) => {
    const _0x3db696 = _0x4c1e,
      {
        token: _0x30ea9f,
        number: _0x268695,
        text: _0xbac9b9,
      } = _0x31f49a["body"];
    if (_0x30ea9f && _0x268695 && _0xbac9b9) {
      const _0x135308 = await _0x81e330[_0x3db696(0xb5)](
        _0x30ea9f,
        _0x268695,
        _0xbac9b9
      );
      return handleResponSendMessage(_0x135308, _0x75b058);
    }
    _0x75b058[_0x3db696(0x9f)]({ status: ![], message: _0x3db696(0xaf) });
  },
  sendMedia = async (_0x4c2c45, _0x374179) => {
    const _0x1ac386 = _0x4c1e,
      {
        token: _0x3334ab,
        number: _0x5c8823,
        type: _0x16a3d5,
        url: _0x2912d0,
        caption: _0x266349,
        ptt: _0x4aa7e0,
        filename: _0x58e341,
      } = _0x4c2c45["body"];
    if (_0x3334ab && _0x5c8823 && _0x16a3d5 && _0x2912d0) {
      const _0x4c85cb = await _0x81e330[_0x1ac386(0x9b)](
        _0x3334ab,
        _0x5c8823,
        _0x16a3d5,
        _0x2912d0,
        _0x266349 ?? "",
        _0x4aa7e0,
        _0x58e341
      );
      return handleResponSendMessage(_0x4c85cb, _0x374179);
    }
    _0x374179[_0x1ac386(0x9f)]({ status: ![], message: _0x1ac386(0xaf) });
  },
  sendLocation = async (_0x3e4468, _0x5ef151) => {
    const _0x437033 = _0x4c1e,
      {
        token: _0xdd8150,
        number: _0x743e0,
        latitude: _0x7798ad,
        longitude: _0x1384ea,
      } = _0x3e4468[_0x437033(0x96)];
    if (_0xdd8150 && _0x743e0 && _0x7798ad && _0x1384ea) {
      const _0x2590a6 = await _0x81e330[_0x437033(0x99)](
        _0xdd8150,
        _0x743e0,
        _0x7798ad,
        _0x1384ea
      );
      return handleResponSendMessage(_0x2590a6, _0x5ef151);
    }
    _0x5ef151[_0x437033(0x9f)]({
      status: ![],
      message: "Check\x20your\x20parameter",
    });
  },
  sendVcard = async (_0x4dfbf2, _0x5b3fc7) => {
    const _0x5b0aae = _0x4c1e,
      {
        token: _0x1c4762,
        number: _0xdaeccd,
        name: _0x5de589,
        phone: _0x5da0c6,
      } = _0x4dfbf2["body"];
    if (_0x1c4762 && _0xdaeccd && _0x5de589 && _0x5da0c6) {
      const _0x120750 = await _0x81e330[_0x5b0aae(0xa6)](
        _0x1c4762,
        _0xdaeccd,
        _0x5de589,
        _0x5da0c6
      );
      return handleResponSendMessage(_0x120750, _0x5b3fc7);
    }
    _0x5b3fc7["send"]({ status: ![], message: _0x5b0aae(0xaf) });
  },
  sendSticker = async (_0x398bdd, _0x38691e) => {
    const _0x210940 = _0x4c1e,
      {
        token: _0x2d0679,
        number: _0x184149,
        type: _0x4566b1,
        url: _0x5d9a66,
        filename: _0x812921,
      } = _0x398bdd[_0x210940(0x96)];
    if (_0x2d0679 && _0x184149 && _0x4566b1 && _0x5d9a66) {
      const _0x2dbc5e = await _0x81e330["sendSticker"](
        _0x2d0679,
        _0x184149,
        _0x4566b1,
        _0x5d9a66,
        _0x812921
      );
      return handleResponSendMessage(_0x2dbc5e, _0x38691e);
    }
    _0x38691e[_0x210940(0x9f)]({ status: ![], message: _0x210940(0xaf) });
  },
  sendButtonMessage = async (_0x13875f, _0xd8df89) => {
    const _0x474f0b = _0x4c1e,
      {
        token: _0x10db61,
        number: _0x12d8bd,
        button: _0x548692,
        message: _0x24a3fc,
        footer: _0x42d165,
        image: _0x44da24,
      } = _0x13875f[_0x474f0b(0x96)],
      _0x361bb4 = JSON[_0x474f0b(0xa5)](_0x548692);
    if (_0x10db61 && _0x12d8bd && _0x548692 && _0x24a3fc) {
      const _0x50a8b0 = await _0x81e330["sendButtonMessage"](
        _0x10db61,
        _0x12d8bd,
        _0x361bb4,
        _0x24a3fc,
        _0x42d165,
        _0x44da24
      );
      return handleResponSendMessage(_0x50a8b0, _0xd8df89);
    }
    _0xd8df89[_0x474f0b(0x9f)]({
      status: ![],
      message: "Check\x20your\x20parameterr",
    });
  },
  sendTemplateMessage = async (_0x1cbd33, _0x112e3f) => {
    const _0xcf9b71 = _0x4c1e,
      {
        token: _0x41a885,
        number: _0x1795ef,
        button: _0x902191,
        text: _0x5dc2e2,
        footer: _0x3f0758,
        image: _0x1c6b16,
      } = _0x1cbd33[_0xcf9b71(0x96)];
    if (_0x41a885 && _0x1795ef && _0x902191 && _0x5dc2e2 && _0x3f0758) {
      const _0x352f8c = await _0x81e330[_0xcf9b71(0x9e)](
        _0x41a885,
        _0x1795ef,
        JSON["parse"](_0x902191),
        _0x5dc2e2,
        _0x3f0758,
        _0x1c6b16
      );
      return handleResponSendMessage(_0x352f8c, _0x112e3f);
    }
    _0x112e3f["send"]({ status: ![], message: _0xcf9b71(0xaf) });
  },
  sendListMessage = async (_0x242662, _0x148a9a) => {
    const _0x2340e4 = _0x4c1e,
      {
        token: _0x25918a,
        number: _0x5b4995,
        list: _0x39c0e3,
        text: _0x47810b,
        footer: _0x2f0274,
        title: _0xe54343,
        buttonText: _0x36186e,
        image: _0x49b624,
      } = _0x242662["body"];
    if (
      _0x25918a &&
      _0x5b4995 &&
      _0x39c0e3 &&
      _0x47810b &&
      _0xe54343 &&
      _0x36186e
    ) {
      const _0x353f79 = await _0x81e330[_0x2340e4(0x9a)](
        _0x25918a,
        _0x5b4995,
        JSON[_0x2340e4(0xa5)](_0x39c0e3),
        _0x47810b,
        _0x2f0274 ?? "",
        _0xe54343,
        _0x36186e,
        _0x49b624
      );
      return handleResponSendMessage(_0x353f79, _0x148a9a);
    }
    _0x148a9a["send"]({ status: ![], message: _0x2340e4(0x95) });
  },
  sendPoll = async (_0x19c56a, _0x3eb84d) => {
    const _0x14522d = _0x4c1e,
      {
        token: _0x36be97,
        number: _0x7d40f0,
        name: _0x3345d3,
        options: _0x5c413f,
        countable: _0x1585ed,
      } = _0x19c56a[_0x14522d(0x96)];
    if (_0x36be97 && _0x7d40f0 && _0x3345d3 && _0x5c413f && _0x1585ed) {
      const _0x21ffff = await _0x81e330[_0x14522d(0x94)](
        _0x36be97,
        _0x7d40f0,
        _0x3345d3,
        JSON[_0x14522d(0xa5)](_0x5c413f),
        _0x1585ed
      );
      return handleResponSendMessage(_0x21ffff, _0x3eb84d);
    }
    _0x3eb84d["send"]({
      status: ![],
      message: "Check\x20your\x20parameterrss",
    });
  },
  fetchGroups = async (_0x9cd396, _0x4e60c9) => {
    const _0x49e1fd = _0x4c1e,
      { token: _0x59863f } = _0x9cd396[_0x49e1fd(0x96)];
    if (_0x59863f) {
      const _0xbe5a06 = await _0x81e330[_0x49e1fd(0x9c)](_0x59863f);
      return handleResponSendMessage(_0xbe5a06, _0x4e60c9);
    }
    _0x4e60c9[_0x49e1fd(0x9f)]({ status: ![], message: _0x49e1fd(0xaf) });
  },
  deleteCredentials = async (_0x440771, _0x1e2ce1) => {
    const _0x1ed6cc = _0x4c1e,
      { token: _0x359bd1 } = _0x440771[_0x1ed6cc(0x96)];
    if (_0x359bd1) {
      const _0x792b1a = await _0x81e330[_0x1ed6cc(0xa7)](_0x359bd1);
      return handleResponSendMessage(_0x792b1a, _0x1e2ce1);
    }
    _0x1e2ce1[_0x1ed6cc(0x9f)]({ status: ![], message: _0x1ed6cc(0xaf) });
  },
  handleResponSendMessage = (_0x42d651, _0x2db9c6, _0x514e45 = null) => {
    const _0x42cb63 = _0x4c1e;
    if (_0x42d651) return _0x2db9c6["send"]({ status: !![], data: _0x42d651 });
    return _0x2db9c6["send"]({ status: ![], message: _0x42cb63(0xb3) });
  },
  checkNumber = async (_0x4d110d, _0xe66da) => {
    const _0x5368d1 = _0x4c1e,
      { token: _0x3da446, number: _0x1539ed } = _0x4d110d["body"];
    if (_0x3da446 && _0x1539ed) {
      const _0x155bc9 = await _0x81e330[_0x5368d1(0xad)](_0x3da446, _0x1539ed);
      return _0xe66da[_0x5368d1(0x9f)]({ status: !![], active: _0x155bc9 });
    }
    _0xe66da["send"]({ status: ![], message: _0x5368d1(0xaf) });
  },
  logoutDevice = async (_0x43294d, _0x38f2bb) => {
    const _0x3027cc = _0x4c1e,
      { token: _0x2d0051 } = _0x43294d[_0x3027cc(0x96)];
    if (_0x2d0051) {
      const _0x5d346f = await _0x81e330[_0x3027cc(0xa7)](_0x2d0051);
      return _0x38f2bb["send"](_0x5d346f);
    }
    return _0x38f2bb[_0x3027cc(0x9f)]({
      status: ![],
      message: _0x3027cc(0xaf),
    });
  },
  sendAvailable = async (_0x192913, _0x3f47e7) => {
    const _0x4b251a = _0x4c1e,
      { body: _0x2c30b2 } = _0x192913[_0x4b251a(0x96)],
      _0x4de82e = await _0x81e330["sendAvailable"](_0x2c30b2);
    return;
  };
export {
  createInstance,
  sendText,
  sendMedia,
  sendButtonMessage,
  sendTemplateMessage,
  sendListMessage,
  deleteCredentials,
  fetchGroups,
  sendPoll,
  sendAvailable,
  logoutDevice,
  checkNumber,
  sendSticker,
  sendVcard,
  sendLocation,
};
function _0x41a5() {
  const _0x499b99 = [
    "15944jlgwvC",
    "sendText",
    "Processing",
    "sendPollMessage",
    "Check\x20your\x20parameterr",
    "body",
    "processing",
    "816382ziAQre",
    "sendLocation",
    "sendListMessage",
    "sendMedia",
    "fetchGroups",
    "end",
    "sendTemplateMessage",
    "send",
    "2TZMLfK",
    "5980695mykhdg",
    "qrcode",
    "114039mwvsqU",
    "7307872emhczR",
    "parse",
    "sendVcard",
    "deleteCredentials",
    "54dFKwTA",
    "status",
    "50lhGQIL",
    "connectToWhatsApp",
    "12QnlDRy",
    "isExist",
    "6534708FArGwB",
    "Check\x20your\x20parameter",
    "4iFsCdX",
    "2702jZrSVM",
    "Token\x20needed",
    "Check\x20your\x20whatsapp\x20connection",
  ];
  _0x41a5 = function () {
    return _0x499b99;
  };
  return _0x41a5();
}
