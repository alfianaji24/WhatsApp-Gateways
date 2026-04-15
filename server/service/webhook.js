(function (_0x3d2301, _0x27e0a0) {
  const _0x3287a4 = _0x1760,
    _0x4b261c = _0x3d2301();
  while (!![]) {
    try {
      const _0xad2efe =
        (-parseInt(_0x3287a4(0x97)) / 0x1) * (parseInt(_0x3287a4(0x9d)) / 0x2) +
        (-parseInt(_0x3287a4(0x9b)) / 0x3) *
          (-parseInt(_0x3287a4(0x93)) / 0x4) +
        parseInt(_0x3287a4(0x96)) / 0x5 +
        -parseInt(_0x3287a4(0x94)) / 0x6 +
        (parseInt(_0x3287a4(0x98)) / 0x7) * (parseInt(_0x3287a4(0x95)) / 0x8) +
        parseInt(_0x3287a4(0x99)) / 0x9 +
        -parseInt(_0x3287a4(0x9e)) / 0xa;
      if (_0xad2efe === _0x27e0a0) break;
      else _0x4b261c["push"](_0x4b261c["shift"]());
    } catch (_0x1a19fb) {
      _0x4b261c["push"](_0x4b261c["shift"]());
    }
  }
})(_0x1bce, 0xb1311);
function _0x1bce() {
  const _0x4f16d4 = [
    "2DeyoQJ",
    "13062970UPCRyI",
    "Webhook\x20error:",
    "post",
    "application/json",
    "11636iOHMjy",
    "2965710uuXYgi",
    "36184tzNuhW",
    "4489055oMJUXF",
    "476073ObdTFt",
    "938rphGmW",
    "8119746VXvmjJ",
    "data",
    "615YMYNAN",
    "log",
  ];
  _0x1bce = function () {
    return _0x4f16d4;
  };
  return _0x1bce();
}
import _0x4dcbba from "axios";
function _0x1760(_0x5a9272, _0x40295e) {
  const _0x1bce59 = _0x1bce();
  return (
    (_0x1760 = function (_0x1760e7, _0x29a900) {
      _0x1760e7 = _0x1760e7 - 0x92;
      let _0x148257 = _0x1bce59[_0x1760e7];
      return _0x148257;
    }),
    _0x1760(_0x5a9272, _0x40295e)
  );
}
export const sendWebhook = async ({
  device: _0x162491,
  command: _0x4aeaf9,
  media: _0x53c8f1,
  from: _0x5d31d9,
  name: _0x2d5707,
  url: _0x23a5f1,
  participant: _0x2010d5,
  ppUrl: _0x4f7bde,
}) => {
  const _0x4a73bd = _0x1760;
  try {
    const _0x3c6a20 = {
      device: _0x162491,
      message: _0x4aeaf9,
      media: _0x53c8f1,
      from: _0x5d31d9,
      name: _0x2d5707,
      participant: _0x2010d5,
      ppUrl: _0x4f7bde,
    };
    console[_0x4a73bd(0x9c)]("forward\x20to", _0x23a5f1);
    const _0x58b0fd = await _0x4dcbba[_0x4a73bd(0xa0)](_0x23a5f1, _0x3c6a20, {
      headers: { "Content-Type": _0x4a73bd(0x92) },
      maxContentLength: 0x64 * 0x13a0 * 0x400,
      maxBodyLength: 0x64 * 0x400 * 0x400,
    });
    return _0x58b0fd[_0x4a73bd(0x9a)];
  } catch (_0x2822ff) {
    return console[_0x4a73bd(0x9c)](_0x4a73bd(0x9f), _0x2822ff), ![];
  }
};
