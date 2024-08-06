//Tue Aug 06 2024 13:11:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  sign,
  wait,
  checkCk,
  getCookies,
  getUserInfo,
  tryCatchPromise,
  validateCarmeWithType
} = require("./common.js");
const _0x658ae4 = require("request");
const _0x129251 = process.env.ELE_TTCJ_CARME;
const _0xf80e18 = 4;
async function _0x2fbea7(_0x32da7c, _0x16c66c, _0x25cfd0, _0x2e7b1a) {
  const _0x25a939 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x32da7c,
    "x-miniapp-id-taobao": "2021002148648263",
    "x-miniapp-version": "3.20230627.141210",
    appid: "2021002148648263"
  };
  const _0x593b74 = new Date().getTime();
  const _0x4576cb = 12574478;
  const _0x9ab5a1 = getToken(_0x32da7c),
    _0x41f4b5 = _0x9ab5a1.split("_")[0];
  const _0x40ea18 = await sign(_0xf80e18, _0x25cfd0, _0x4576cb, _0x41f4b5, _0x593b74, _0x2e7b1a);
  const _0x44b361 = _0x40ea18.sign;
  const _0x34de66 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.growth.tangram.gateway/1.0/?jsv=2.6.1&appKey=12574478&asac=" + _0x16c66c + "&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x593b74 + "&sign=" + _0x44b361 + "&api=mtop.alsc.growth.tangram.gateway",
    method: "POST",
    headers: _0x25a939,
    body: "data=" + _0x40ea18.content
  };
  return tryCatchPromise(_0x1d2f97 => {
    _0x658ae4(_0x34de66, async (_0x32f54e, _0xd324, _0x318d25) => {
      if (!_0x32f54e && _0xd324.statusCode === 200) {
        try {
          const _0x4e5f88 = JSON.parse(_0x318d25);
          _0x1d2f97(_0x4e5f88);
        } catch (_0x53b8bb) {
          console.log(_0x53b8bb);
          _0x1d2f97(null);
        }
      } else {
        _0x1d2f97(null);
      }
    });
  });
}
function _0x2c548c(_0x11c761) {
  const _0x3a4ea3 = new Map();
  const _0x424252 = _0x11c761.split("?")[1].split("&");
  for (let _0x42152d = 0; _0x42152d < _0x424252.length; _0x42152d++) {
    const [_0x533430, _0x19bc01] = _0x424252[_0x42152d].split("=");
    _0x3a4ea3.set(_0x533430, _0x19bc01);
  }
  return _0x3a4ea3;
}
async function _0x564d0c(_0x43cf34) {
  _0x43cf34 = await checkCk(_0x43cf34, -1);
  if (!_0x43cf34) {
    console.log("需要助力的账号失效！请重新登录！！！");
    process.exit(0);
  }
  let _0xc8ea21;
  const _0x51c834 = await _0x2fbea7(_0x43cf34, "2A22C21KPW8PSOH8QMD4LM", 1);
  if (_0x51c834.data && _0x51c834.data.result) {
    const _0x200bb0 = _0x51c834.data.result;
    _0xc8ea21 = _0x2c548c(_0x200bb0.url).get("shareId");
    console.log("获取到的助力 id 为", _0xc8ea21);
    return _0xc8ea21;
  } else {
    console.log("获取到助力 id 失败，程序退出");
    process.exit(0);
  }
}
async function _0x34f464(_0x3fd3d7, _0x30557a, _0x1e1ef0) {
  try {
    _0x30557a = await checkCk(_0x30557a, -1);
    const _0x2b2b38 = {
      shareId: _0x1e1ef0
    };
    const _0x371178 = await _0x2fbea7(_0x3fd3d7, "2A22C21RPW8PSOJ9OFOQGY", 2, _0x2b2b38);
    if (_0x371178.data && _0x371178.data.result) {
      const _0x24820c = _0x371178.data.result;
      console.log(_0x24820c.title + "：" + _0x24820c.subTitle);
      if (_0x24820c.title.indexOf("无法助力") !== -1) {
        console.log("防止黑号延时1-3秒");
        await wait(_0xb4a5a2(1, 3));
      } else {
        if (_0x24820c.title.indexOf("谢谢你为我助力") !== -1) {
          const _0x1cfe4b = await _0x2fbea7(_0x30557a, "2A22C21FPW8PSO7U202V54", 3);
          if (_0x1cfe4b.data && _0x1cfe4b.data.result) {
            const _0x2b03de = _0x1cfe4b.data.result;
            const _0x219f6f = _0x2b03de.popWindow.content[0].amount;
            console.log(_0x2b03de.popWindow.title + "：" + _0x219f6f);
            if (_0x1cfe4b.data.success) {
              const _0x49fd24 = {
                amount: _0x219f6f
              };
              const _0x37a392 = await _0x2fbea7(_0x30557a, "", 4, _0x49fd24);
              if (_0x37a392.data && _0x37a392.data.result) {
                const _0x2c6b4b = _0x37a392.data.result;
                console.log(_0x2c6b4b.popWindow.title + "：金额", _0x2c6b4b.popWindow.content[0].amount);
                console.log(_0x2c6b4b.popWindow.content[0].step2);
                const _0x42e221 = {
                  shareId: _0x1e1ef0
                };
                const _0x323694 = await _0x2fbea7(_0x30557a, "2A22C216PW8PSO7H6J9G63", 5, _0x42e221);
                if (_0x323694.data && _0x323694.data.result) {
                  let _0x56e8a1 = _0x323694.data.result.fixedPrize;
                  console.log(_0x56e8a1.title, _0x56e8a1.reduction, _0x56e8a1.threshold, "当前进度：" + _0x56e8a1.amount);
                  if (Number(_0x56e8a1.amount) >= Number(_0x56e8a1.maxAmount)) {
                    console.log("🎉🎉 任务完成，已获得", _0x56e8a1.reduction, _0x56e8a1.threshold);
                    process.exit(0);
                  }
                }
              } else {
                console.log("提现：" + _0x1cfe4b.ret[0]);
              }
            } else {
              console.log("抽奖：" + _0x1cfe4b.ret[0]);
            }
          } else {
            console.log("抽奖：" + _0x1cfe4b.ret[0]);
          }
          console.log("防止黑号延时5-10秒");
          await wait(_0xb4a5a2(5, 10));
        }
      }
    } else {
      console.log("助力：" + drawRes.ret[0]);
    }
  } catch (_0x5293b0) {}
}
(async function () {
  const _0x4cca2c = process.env.ownCookie;
  if (!_0x4cca2c) {
    console.log("未设置需助力的 ck，程序结束!");
    process.exit(0);
  }
  await validateCarmeWithType(_0x129251, _0xf80e18);
  const _0x3b2754 = getCookies();
  const _0x351d8d = await _0x564d0c(_0x4cca2c);
  for (let _0x31603a = 0; _0x31603a < _0x3b2754.length; _0x31603a++) {
    let _0x3fb0b6 = _0x3b2754[_0x31603a];
    _0x3fb0b6 = await checkCk(_0x3fb0b6, _0x31603a);
    if (!_0x3fb0b6) {
      continue;
    }
    let _0x4bd0ed = await getUserInfo(_0x3fb0b6);
    if (!_0x4bd0ed.username) {
      console.log("第", _0x31603a + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    await _0x34f464(_0x3fb0b6, _0x4cca2c, _0x351d8d);
  }
  process.exit(0);
})();
function _0xb4a5a2(_0x33979b, _0x43a393) {
  return Math.floor(Math.random() * (_0x43a393 - _0x33979b + 1) + _0x33979b);
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}