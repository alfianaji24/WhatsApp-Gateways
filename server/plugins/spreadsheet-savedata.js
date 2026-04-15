(function (_0x13bf45, _0xe884f5) {
  const _0x5a006e = _0x48cd,
    _0xdf58 = _0x13bf45();
  while (!![]) {
    try {
      const _0x3b2718 =
        -parseInt(_0x5a006e(0x10d)) / 0x1 +
        -parseInt(_0x5a006e(0x10f)) / 0x2 +
        -parseInt(_0x5a006e(0x119)) / 0x3 +
        (-parseInt(_0x5a006e(0x11d)) / 0x4) *
          (-parseInt(_0x5a006e(0x110)) / 0x5) +
        (parseInt(_0x5a006e(0x127)) / 0x6) *
          (-parseInt(_0x5a006e(0x130)) / 0x7) +
        parseInt(_0x5a006e(0x120)) / 0x8 +
        parseInt(_0x5a006e(0x117)) / 0x9;
      if (_0x3b2718 === _0xe884f5) break;
      else _0xdf58["push"](_0xdf58["shift"]());
    } catch (_0x3d4633) {
      _0xdf58["push"](_0xdf58["shift"]());
    }
  }
})(_0x5b87, 0x22f3b);
import { google } from "googleapis";
import _0x6c16f1 from "node-cache";
const sessionCache = new _0x6c16f1({ stdTTL: 0xe10 });
function askNextQuestion(_0x276da0, _0x49383e) {
  for (const _0x20b3e8 in _0x276da0) {
    if (!_0x49383e[_0x20b3e8])
      return { key: _0x20b3e8, question: _0x276da0[_0x20b3e8] };
  }
  return null;
}
async function appendToSheet(_0x30f973, _0x4ccfa3, _0x2acfe9, _0xa365a5) {
  const _0x138c72 = _0x48cd,
    _0x1dc0ed = JSON[_0x138c72(0x10b)](_0x30f973),
    _0x3570b8 = new google[_0x138c72(0x122)][_0x138c72(0x12c)]({
      credentials: _0x1dc0ed,
      scopes: [_0x138c72(0x125)],
    }),
    _0x35f3f6 = await _0x3570b8[_0x138c72(0x12e)](),
    _0x2ca7cb = google[_0x138c72(0x123)]({ version: "v4", auth: _0x35f3f6 }),
    _0x4cc2f3 = await _0x2ca7cb[_0x138c72(0x133)][_0x138c72(0x112)][
      _0x138c72(0x121)
    ]({ spreadsheetId: _0x4ccfa3, range: "Sheet1!1:1" });
  let _0x50217b = _0x4cc2f3[_0x138c72(0x129)][_0x138c72(0x112)]?.[0x0] || [];
  _0x50217b[_0x138c72(0x113)] === 0x0 &&
    ((_0x50217b = _0x2acfe9),
    await _0x2ca7cb[_0x138c72(0x133)][_0x138c72(0x112)][_0x138c72(0x134)]({
      spreadsheetId: _0x4ccfa3,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [_0x50217b] },
    }));
  const _0x170d37 = _0x50217b[_0x138c72(0x111)](
    (_0x5d1312) => _0xa365a5[_0x5d1312] ?? ""
  );
  await _0x2ca7cb["spreadsheets"][_0x138c72(0x112)][_0x138c72(0x11b)]({
    spreadsheetId: _0x4ccfa3,
    range: _0x138c72(0x135),
    valueInputOption: _0x138c72(0x12b),
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [_0x170d37] },
  });
}
function _0x48cd(_0x3142b0, _0x24b732) {
  const _0x5b8793 = _0x5b87();
  return (
    (_0x48cd = function (_0x48cd08, _0x3aefcd) {
      _0x48cd08 = _0x48cd08 - 0x10b;
      let _0x1b22a9 = _0x5b8793[_0x48cd08];
      return _0x1b22a9;
    }),
    _0x48cd(_0x3142b0, _0x24b732)
  );
}
function _0x5b87() {
  const _0xfbc59b = [
    "67290UyQonW",
    "extra_data",
    "data",
    "name",
    "USER_ENTERED",
    "GoogleAuth",
    "error",
    "getClient",
    "lastKey",
    "7RdelrC",
    "answers",
    "keys",
    "spreadsheets",
    "update",
    "Sheet1!A1",
    "toISOString",
    "parse",
    "from",
    "160682aVqLly",
    "main_data",
    "116222tpYVCD",
    "5aetATB",
    "map",
    "values",
    "length",
    "message",
    "asking",
    "set",
    "1343277DZwzvB",
    "split",
    "57972tGrrfZ",
    "Data\x20berhasil\x20disimpan,\x20terima\x20kasih!",
    "append",
    "media",
    "204564SkdPtE",
    "question",
    "time|from|name|media",
    "1536808HxHOXe",
    "get",
    "auth",
    "sheets",
    "body",
    "https://www.googleapis.com/auth/spreadsheets",
    "key",
  ];
  _0x5b87 = function () {
    return _0xfbc59b;
  };
  return _0x5b87();
}
async function spreadSheetSaveData(_0x110b77) {
  const _0x475164 = _0x48cd,
    {
      command: _0x194087,
      plugin: _0x3e5291,
      device: _0xf9ba3c,
      media: _0x16fa94,
      from: _0x4cf65f,
      senderName: _0x58ac47,
    } = _0x110b77,
    _0x34f00a = _0xf9ba3c[0x0][_0x475164(0x124)],
    _0x37f240 = _0x34f00a + ":" + _0x4cf65f,
    _0x2d1f9f = JSON[_0x475164(0x10b)](_0x3e5291[_0x475164(0x128)] || "{}"),
    {
      googlekey: _0x33d844,
      basickey: basickey = _0x475164(0x11f),
      data_map: _0x15e986,
      commandstart: _0x53f63b = _0x3e5291[_0x475164(0x10e)],
      finishmessage: finishmessage = _0x475164(0x11a),
    } = _0x2d1f9f,
    _0x1f158f = _0x3e5291[_0x475164(0x10e)];
  if (_0x194087 === _0x53f63b) {
    const _0x926e0f = Object[_0x475164(0x132)](_0x15e986)[0x0];
    return (
      sessionCache[_0x475164(0x116)](_0x37f240, {
        step: _0x475164(0x115),
        answers: {},
        lastKey: _0x926e0f,
      }),
      { handled: !![], reply: { text: _0x15e986[_0x926e0f] } }
    );
  }
  const _0x3e7d11 = sessionCache[_0x475164(0x121)](_0x37f240);
  if (!_0x3e7d11) return { handled: ![] };
  _0x3e7d11[_0x475164(0x12f)] &&
    (_0x3e7d11["answers"][_0x3e7d11[_0x475164(0x12f)]] = _0x194087);
  const _0x732f01 = askNextQuestion(_0x15e986, _0x3e7d11["answers"]);
  if (!_0x732f01) {
    const _0x438461 = basickey[_0x475164(0x118)]("|"),
      _0x2a772f = {
        ..._0x3e7d11[_0x475164(0x131)],
        [_0x438461[0x0] || "time"]: new Date()[_0x475164(0x136)](),
        [_0x438461[0x1] || _0x475164(0x10c)]: _0x4cf65f,
        [_0x438461[0x2] || _0x475164(0x12a)]: _0x58ac47 || "",
        [_0x438461[0x3] || _0x475164(0x11c)]: "--" || "",
      },
      _0x311148 = [
        ...new Set([
          ...basickey["split"]("|"),
          ...Object[_0x475164(0x132)](_0x15e986),
        ]),
      ];
    try {
      await appendToSheet(_0x33d844, _0x1f158f, _0x311148, _0x2a772f);
    } catch (_0x1f2435) {
      console[_0x475164(0x12d)](
        "❌\x20Gagal\x20simpan\x20ke\x20Google\x20Sheet:",
        _0x1f2435[_0x475164(0x114)]
      );
    }
    return (
      sessionCache["del"](_0x37f240),
      { handled: !![], reply: { text: finishmessage } }
    );
  }
  return (
    (_0x3e7d11[_0x475164(0x12f)] = _0x732f01[_0x475164(0x126)]),
    sessionCache[_0x475164(0x116)](_0x37f240, _0x3e7d11),
    { handled: !![], reply: { text: _0x732f01[_0x475164(0x11e)] } }
  );
}
export default spreadSheetSaveData;
