//Sat Jul 13 2024 15:43:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const Notify = 1;
const debug = 0;
let ckStr = process.env.gdgy_Cookie;
let msg = "";
let ck = "";
let host = "sns.amap.com";
let hostname = "https://" + host;
async function tips(_0xbac97c) {
  let _0x37fc07 = await Version_Check("gdgy");
  let _0xd07d55 = await Version_Check1("gdgy");
  let _0x5bf753 = "\n📌 本地脚本: V 1.0.2  远程仓库脚本: V " + _0x37fc07;
  DoubleLog(_0x5bf753 + "\n📌 更新内容: " + _0xd07d55);
  DoubleLog("\n========== 共找到 " + _0xbac97c.length + " 个账号 ==========");
  debugLog("【debug】 这是你的账号数组:\n " + _0xbac97c);
}
!(async () => {
  let _0x3d3a92 = await getCks(ckStr, "gdgy_Cookie");
  await tips(_0x3d3a92);
  for (let _0x283409 = 0; _0x283409 < _0x3d3a92.length; _0x283409++) {
    let _0x133ee7 = _0x283409 + 1;
    DoubleLog("\n-------- 开始【第 " + _0x133ee7 + " 个账号】--------");
    ck = _0x3d3a92[_0x283409].split("&");
    debugLog("【debug】 这是你第 " + _0x133ee7 + " 账号信息:\n " + ck);
    await start();
  }
  await SendMsg(msg);
})().catch(_0x258e90 => $.logErr(_0x258e90)).finally(() => $.done());
async function start() {
  console.log("\n==========  开始签到  ==========\n");
  await qd();
  await wait(10);
  await ls();
  await wait(10);
  await sign();
  await wait(10);
  await sign1();
  await wait(10);
  await box();
  console.log("\n==========  开始每日任务  ==========\n");
  await wait(10);
  await tbjx();
  await wait(10);
  await clxp();
  await wait(10);
  await rw1();
  await wait(10);
  await rw2();
  await wait(10);
  await rw3();
  await wait(10);
  await yj();
  console.log("\n==========  开始打卡  ==========\n");
  n = local_hours();
  if (n >= 10 && n <= 14) {
    await wait(5);
    await dk();
  } else {
    DoubleLog("\n时间不对 跳过");
  }
  console.log("\n==========  开始浇水  ==========\n");
  await wait(10);
  await js();
  await wait(10);
  await ls1();
}
async function dk() {
  let _0x2aa75f = {
    "url": hostname + "/ws/activity/xiaode_garden/game_sign/sign_in?in=9B3FWNMhG%2BJQkUw84fc5ynvoufZdhubQfCqen4oS6VCXV2FnTl8tgAsQ77ong%2Fk2S1jZymQ%2FgIX8u6DbRmmApN6InZufbM9R6ILc1AKr31nRQaX2wSry5XREJ0AbNhUT1mJX8duq%2BjYHyv9PbGrMZ9slPmsDI02hfQPIuQoPeysAaYJEYNXjTVYh0vWlUJ4yAX0UDQG3pzq7gDbhyY3V94IEa6T4UPNY4NZdcov71gOhpV3Wt9h0hw8JOOZGAbFcAuxUt8iUOEz8Nq0TCeKb58On9LXsFene4XoAeShfPwp2nUWzEaizKgTUmUVvIp0SETkNjW3Bcx7Ut3Y4qVhQ7S8MKlX8BwUfLSBYAu0g5bOQCnF0dGle7%2FvvB%2BAXxyMRz0CqL8sG%2Bao4DVaOilu6x5C6k%2Bly9gohaSyDwfSDzq%2FI7c%2BaZ3HMy5BnGrw%2FeC%2FH6blxfoSrTeUgqDEbfsbw2TKASekW8tRQZUuFApcxzneDAJIB%2BIGXjbR4Mz9Axp%2FcFIRv8ySczS03seYXKU2uWQiczzxX%2FYnx3SdTLl57kvg%2B5i%2BYqIoe6iyYQ%2BbdR9gt64IA7eKi%2Bti6S5D7XROahp2x%2BLc0e6GWQJ6Bm52%2BrNa%2F2%2Bq21oYk3x%2BoDV5iEaOilIYsbe4TVYLtza6sYj9j3CRemH8hUtui2hIx9%2BnWoT5pHuVIOeilUsXiP%2FWPdcei7BZGxEP6ZMoo%2BD65oVcMYGI2LbnO4cLXS2ItmjL%2BMRGRlojYRUb7Pp2tIQMsq%2Bc2UabQAQyg8ybpozpYuokTLdGdb6BT9TMS6WN8FvCOIcCziTZBr%2F4LQTu2N6M6yPINibhbbA4rcIb8tLjCNKpJXlZtukfdNWWLehBvFtBNIOkFqWRfTnc14V2jVp7LTb0x0TpEogo01aYNr5EQjpBzBvw8ryB8w2h7%2BWFkuyV9h3XGMzIAOSQtjnozBLn1jSqV5ok%2BG4Tjv6s%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x314105 = await httpGet(_0x2aa75f, "打卡赢水滴");
  if (_0x314105.code == 1) {
    DoubleLog("\n打卡赢水滴：参加成功");
  } else if (_0x314105.code == 1007) {
    DoubleLog("\n打卡赢水滴：已经打卡过了 不要重复完成");
  } else if (_0x314105.code == 14) {
    DoubleLog("\n领水：未登录");
  }
}
async function yj() {
  let _0xc6c8f5 = {
    "url": hostname + "/ws/activity/xiaode_garden/task_batch_reward?in=aaj5ZXuGMIC8vpDMMsLCH3zg6a0Hhx2DfMVbTSPneFdXAjw8gsPAqTNp8nUpOUsL0KNj9eA3E%2Fu7AMPs34cM32D4rK4GQIek2Ezp1o6k34egUnj0PEv529H5n6LbLyIhJ5%2Bw%2FOXjcRPDitm9PfJKbwper3eK8SBTtsHgIwmy1g71m6RJg0dx5OuQ8SC4ty3j0ld3KUQlQk7bmVT17O5eCHHXvHcZjbfz2ZJ4vXVQNYDcYwJsCP1uDRH8zeXsF63RkbWowBFigGk1Xt3aMBn9W%2BsJYGfCJzKTUr1C2fijPv2Z5xReDjm606sJmlu8IvY8HnIY9ADhoTu0PlrBmh3bJlcb8mgDcRNVZf6lEw%2BsQ0yAbSMhYD2HBmVPejiyg31hfP3eu4ufRTjsM0RNxUUvIdAodsWWkDziKzKMtjiOTFo1QB3aFv88TeycGqqQBxXEYSDgane7qPUYpl8Tq5hMIGOeje4qXdNstMsWkwRHsbHxoz0GkECEeoNCx5Ptdagii1RrLaL5OmnC4bpam%2Fo63a4H3d8rLNICpfSC%2BSH1KgOxRHUAG9FYHwbngYSXK72OxYGxX6hkanvyVOt%2BTcd5fxtEs%2Be4GPOh2GvWBPqAhODeK5S5zGH4fbMwYFeGwbqM8DPQojcY5eZIFSMo5mKijjBfBtMUUXvp%2BnumCzS01niKyuWPBLZ6xca3G398gGeamuAHE01LPiATl8dTve%2FSInzMSXl%2Fr%2FaM0eW9tbq1c1xYTzkXrUBqB5unFtNMcJ4aoaw36RNUvk%2BqG4z5PM3ixKZr2OEBFhignp6Qtv%2BQsaSgX1Qbd2tIs%2FsykAcDHQj16fbVD%2B%2FmcfNCfNKGui8ZWE715kLsyFlvtQhdfuFjvDnn6QxLNVSqgoAqIXw2DWrqpyogErA3U4vldSR8kRXOcbIlaGb2rqpScLNoxbB7uapMBA41jc8wK7nTpIciuIy0aPJFi6MinrR%2BR24X1cxm8HNX2jWlBaNBGdouA7sf21wb2HYz508k9b1vI5JtBQMh%2F%2Fm9lpVy0NJk3XswzksX6nb%2Bg%2FMxYj1k2i6jtFcy8bedX8zcCd%2BMe2syumhv%2FVkVPwAdbcbhcXo%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0xf2a41d = await httpGet(_0xc6c8f5, "一键收水滴");
  if (_0xf2a41d.code == 1) {
    DoubleLog("\n一键收取水滴：授取成功");
  } else if (_0xf2a41d.code == 112) {
    DoubleLog("\n一键收取水滴：已经领取过了 不要重复完成");
  } else if (_0xf2a41d.code == 14) {
    DoubleLog("\n一件收取：未登录");
  }
}
async function tbjx() {
  let _0x1ab03e = {
    "url": hostname + "/ws/activity/basic/task_center/report?ent=2&in=8LmbSufRp7jACIDDzUJw3cN8N9cP3%2Fc3YhdTg7hdem%2BH3vv%2BhGGS8%2FCXg9sMyodn471LK8O%2FXdDSMz3j%2Fzz0tnqTmz1b2yuYY0ZCvviUlXO7C%2B4UpMjKGVC4tFodXP2%2BsZpSSPZQCCuHbmYTe4JrL%2FMLhLrDoL52mT%2FS%2BPySUxrnXrOEuL4%2B%2BhVvUa6jjUAOC20SMDKAHMUuLN3v3a4YGWiSPX4Uy6nAHuDntnsq8zW7i576XDDKGSmIo7%2BqFe97QEqyBSBrP5N3nIM1INsjdmOKSExYqOR%2BrYuSD7nSh3ZSn4xuyj45JwW%2B4DJp%2Blxbe4WDFFWN6rFDMDSHAIoubVi%2BouEEEmBBqOxdmB1f3kZyMI%2BRqVK7B%2BzoiIbg0cl8PG%2FMLNTdemgM1HeLswuK4glBpKC1o%2FFuGhM3p%2BghttzF3Rj0ZFSAlY8PHlx6yeYjxf%2FsGPfk2ug4YvBh3dFrbYnZsi5xU%2F5lVAn3fvGFcxtH5Wcuwdg7RAhGeXuagov0r%2F7RDojpNql7EuQOEJha%2BAZxyoMU0aiCROF33RdtodOaOlTDqALqU1f7Y1stbQDhYFZBLo80I8DMWkOVRKtn03nCdl6EmdokKCFbmHDh2k5VAMDFgNPp9mioCmai2wSMt12g7w0cIq9Ch7TcJ2mteX%2Fog9cDCDXPbDfiQFD0F8Q%2FXhC6davNfEtiuVbOdT%2ByFZ1HBcG3y%2B64dM4bPpTwe9HaSo2XHcplim1%2BYPoZu76nGt1%2FroQ8k8aA0GyGN7g%2FS%2BpQ3VRKxVBUtokQTYxNULLyz%2BCsXm8qnVjairUzSLud6hXSDS%2F9Pri52D5NvLKI6pfOpbif3O192xOiD5yN3zBi2XBka9wDfIXLk6YH2jO1wT7pOV2dPEtDaV66TKPUlDgGF6eAutseBqDXppPkAQHfEu0JWoG0sCd3yAqm7Y9AhfA%2Bx8EjxzBi5XAncSDCyQR3i5sYTw%2BeEmmKDyyFqz8m8xmVKmfltDHz3DddkwCNUCLmL5tmFMUE3It3VKeV5DG4SbrTRID%2FQtkSooXd%2FgyZdTmLStKCw6fR3wUBd5%2FAVpIL8IznNdaEWyE%3D&csid=055b5616-5486-45bd-a380-8b70e94232cb",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x41404a = await httpGet(_0x1ab03e, "模拟浏览淘宝精选");
  if (_0x41404a.code == 1) {
    DoubleLog("\n模拟浏览淘宝：成功");
    await wait(5);
    await tblq();
  }
}
async function clxp() {
  let _0x4b524b = {
    "url": hostname + "/ws/activity/basic/task_center/report?ent=2&in=0XLpnnCJ6TZLoxB82MjTlvSHih0jdGxBssa8P8bcXACPdkM67Ll3VlEZfwYxOBu4kj74zz2LbR2GUzCe%2Bbhrad8Dzib6uHZQLRN%2F0UNuGABju6SF%2BiAJ9d%2BMz2pQ%2Bat6YcnHrMuwoSMcNlXEyhmqKQAiOhIYSsCL15dXgJQ4re%2FooDGaGH%2BHqYaYGEozk2ZI1OBf27sGANC%2FDSyWeBt8Kw0ivSJMG15GShGGPEeGP0DJ7vdAmkimXPhEdjQw42qEQOKqIGgkUoJfVy2V%2FyZatbt8bcJBYZsaZ0Kdr49PS127eyA41dtNp7cwgqafLenbclGVwRN7lXlT6QU7ZOYkRrCI78kilhlYLNEjy9iLNCcDBC68roAt0pjDB%2FYBhh%2BQZc8t8Yv5zKPlaGkzspNVObOOd64ATe%2BE6zP7FjauICvDa7mBe678E5sEH2KJQ%2FIf6qgWCtTJOugqjbWXnvOEFy9ENNU4Fhh62%2FF7iuqbdbmf6grctPfAlxaFGXXYcCFD4xbAXxEc9Xb4AN0yFHSZsA%2BFPl%2Bc3doshkgRRRTgP60OO8SLzRZMNtmlWOsvMMrXp%2BjNQuSF%2FqyDg%2BVhJrJa3oWBWRQn%2B7ZLlp5eR%2BFAJr3TmWu2Rk%2FjAOPMaZLaUOwqwdaP2LJxtg%2F2GxHEDF7hFsQJpEBaVWOFsv9hXS%2FEaSSx60EO20EwMDv%2FkIDDzRyULZqfTLflOcUNOCl%2F5MitmXOXGPwKn8imphKxXGglwDUAQhZnoEx%2Fe8GEKsukfrpA9oINPkDPWuC77oRKV7mBNsxyANhBYuYaXyWeNdfFWAD3xuet21Ipvy0BK0P1OoC1oFXhiK2A8CRqLnKpyNCTKpIL8cJcZqDt9rnyTs9n7n0K2WJUJDgelrJvmSsgcIdI%2B4XGSWbBrCURzj%2F3UJeMPNW8UHnMgYhQrthgTu9m7%2BC3Cc1VeqkEteSeHqSSsf%2FhYS1DPOd%2BSkMN5CGS3QKPY4BziEOwQZDUKC5dYGzeplIVp508iH%2FNvw%2Fzwd8X5qlHiS2qOEHtH87MkUmHVp9rUwxsMHI%3D&csid=ebb89c05-2a1c-4c2c-8988-1042bdb49800",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x2dec48 = await httpGet(_0x4b524b, "模拟浏览潮流新品");
  if (_0x2dec48.code == 1) {
    DoubleLog("\n模拟浏览潮流新品：成功");
    await wait(5);
    await cl();
  }
}
async function ts() {
  let _0x5c79ab = {
    "url": hostname + "/ws/activity/basic/task_center/report?in=VWBRj2cm6UWud6vB03JphpgB6jkzKB6bzRlrXzjxrBKYxylny%2BS%2B9YtoyniEwTJyE45JaSPK7zyzMvRtbgG5FIeNiQL%2BgzeTahH7w%2Bq0Y951IWoNHd53FTPda1%2B5XfzG3wCsYEO7Ao5EpYLsGQhSQn%2F%2F1R9eleP%2FVnH%2Bw9FdMNyfsPLpMMvZ7di48XU35sKJSLsR%2FGeObh2w4ADFw581m6w9Kh0EtdJIhn042GLWhDlGovqgx3wmHKigy3DnTfMXCyYM%2Fml9VMdFObhZ40H7ElyR2D44VoH1MCQJnq%2B8R3maN5GivIVXMl3t3XNLQAaidhKfdLP1ALFLrtND88ACIoCcubVvobhjIxFm4IF7QRrYU0sg8urwjQ%2FL8u6291r%2FejfZRJs%2Fc8qCO3wbRzxAbYZvJr2fUbck0sjySRccw3pDyJcAfjkw5qqWhtbohRtyWV%2BG7QaSqOz30ZeV0ztacIs6J6lCUx7kGO1Wy3Fi0H4bvxzLFRz7Bng1ZJW9y%2BnkXY0pUDX41lUZ%2BGltBbIsijUgmq6mKwW30fvGV%2B1O8L%2FzvCIu5veNKfLYwsxB5BCFSo4BtqYBmWY6Jc9%2Fq1XOqu4Pd9wLXLdt65of2RCyEaTGpmHUcL%2BZts1X6CARmkLQ2B3jTmgmIS4Ww5yteBylladUACLSj2VW30TAAmAatevqT965GLUGSzFGsdoD2NxRaqppsCIAfTZpyJPeeU09Qb2gfaNJEO6NUIPKOFPAipgY3mLqiTlde6nKmClZpSxqmfZptW1pACqRcP%2ByPbGN7YScWBrzmd14IrxRdjzTzSFjpGuDWbnXL2bLKzoWldJuCBs93sBWTwE%2FwQdWZbMxDaT3D5YUrSYUMRhPNlhZFnuFe4dtwQH8qrWFg%2FyfTMnXMa6DCkyrH3Y8aFAvcV0lIVurYZU%2BOREvs2OxX8cSPMd88WvsERgrmSXehhzaOlxOzkxlg66buO4Gi%2B%2FbKPYEJ62TgSCTRX4uTb73f606z5k2s6471443kVvyr43tKJ%2F6UzpLEioa%2BIIWq3sRB4jLiPRPnPtXzt5cZqSUHNAk7xJK3suHVntfXaD3zMy3h0%2Fj",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x548f2e = await httpGet(_0x5c79ab, "模拟探索");
  if (_0x548f2e.code == 1) {
    DoubleLog("\n模拟探索：成功");
    await wait(5);
    await ts1();
  }
}
async function rw1() {
  let _0xd6bb17 = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?in=b3xuIknIXNU3hUpXZ1vUE8xBlEK5OabDk4w0YoBWBwN0l4ZqavIQKnuj1fWqy8vHmQyjvDFM9TiuditB6SNjiufe9yoUKwxBL2Aj0o%2BpbijEsyL4NykAthj1avlcLr7RQvvJfSqP6Kn2hJ913xt8H9H%2F3cK5cvMy47ln2NVZ%2FXMB%2Bce%2BQIPqLbe%2BFJ%2FxVGFGBS7SaJKxNE8%2F%2B0YhpDP2CVFB2wSyH%2BVdvCuhVgy%2FwDoq9ezpKQuG%2BD%2BX2QGUHNB%2Fg8ZiJ46S5qhfLDaVKrr7bRmiyc5mprTB03%2FqepYKyGgyTkIV1jQa%2BH8s4P0aqJTyxv5APkpHCqzMO9WNMdR5c9KyCNNUD1rxE%2BAg%2BBJ32yrPCEy1%2B84Y%2B8xh5TkocWD%2FuZAn2xPcWD5Fg5bilLv6Qc%2FNlUtLi8zUC0LFPOFmpgLbg%2BcluwAw66EttTyWUR6Jh%2BM2ubs6U8LYGz81JZrhW6MQ0hOyNIiAdAiGDRVd%2BXcxg5UxKwZoKbylWkqyadtdWIvMUgPVJ0J%2FPu7c3goUnfZgFpiUjLrilsoqtzueSxzLXjZXDM49NZrocj0AjXgUU%2BUyAulF6QQ3PAvxnHl%2FkFsCp%2Bbxf6PuRqaNbjmFgFP68qyTH%2BPjchJtJCl0GiqXyjWFHCaZc%2BKjX0DQ%2BcigWWMWk2bvVztYuA0F8jSKFclfN6ey8HbJrGk1b4pKiCTySoz3aBOwzBBQ9VLM6EpRDieJ5T%2BK3e2DR%2FqpsBSQI3s1VOBlnxyLl71jHGIH5XDPZfb67c3K3j5d18bzMcGi1SdFae%2Fx8e8xO9skzi3nSNLv2oHIvJMD0ZCWrQDu6Zcf7bGHwbXXHifpdfmIMxs5SDs%2FdtFQJEeIY%2FwqwnAp3mwBht0B1kWW%2F4gQRfvnyXs4zH0WkaEJXm0BRsmirgKNMmvnfcDHucAKBabM31TVisl5EXE0C5L0nOtS%2BwLNkYSk46jRcNg7Ek6dVT6m5Uj2NodeJJfRWoxEkZC0nzQEN%2F97tIFNzlnRFGZojNaH47KzZT1Ic%2BoDsSzNVDVaFIeS4J1JGsvqEEPr",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x10884c = await httpGet(_0xd6bb17, "水滴任务1");
  if (_0x10884c.code == 1) {
    DoubleLog("\n水滴任务1：领取成功");
  } else if (_0x10884c.code == 140) {
    DoubleLog("\n水滴任务1：任务未完成");
  } else if (_0x10884c.code == 112) {
    DoubleLog("\n水滴任务1：已经领取过了 不要重复完成");
  } else if (_0x10884c.code == 14) {
    DoubleLog("\n水滴任务1：未登录");
  }
}
async function rw2() {
  let _0x2881ef = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?in=zhShLwWUg85cmPQErMoapz4NX%2F4CkKMqZxinIO4RJtxeA0Nkboby7RxpXnFPJphuQG8HoCTOXByUhaW99XTNjmx0D7MvXkEtDqz1%2BCjHmUwWEknQKPljxsArQJrnS5Oe9g8rI1XlA0mWnA9vZ2fcd9XVIJc5n2cRFsAjEvL6RwgykL48v3hV1fAOWO1NDPLRDyN%2BTHWwNwUW6G%2BtEpEVLRMNdtZGufW%2B1qAriPSr8wizqh%2FjVhzEzmIzyMfxFk5OYxsx%2BYrncrkX%2Fwc0BkyVfXySmyMJDY6HcXpVw13neiFP6p7i5%2BLTBtJxyL1UouKilNKrQByHvjgbgKbHtbwTpVazmp5tYtWGzef6Q773v%2FugPu2T61vQnggDiVcOPOBLdSHRuYp4t5HyzReJhMqC2W3l%2Fc1%2Fit%2FEVkVyBz6vFRt0PGQtltEv%2B%2BPlazYRm0NgbW63AgXNicoVrYs7L76B7fo4R5lMlWu6QmaVkaKvvx%2FgVdMJ2UKd%2BDSDwIy15FKdUsBluy4Xg%2BIrNuUMKse1qo65ci%2BgmYsVOJXsAwYS1z4jkcppN7EOEq8EzkfokcWSnoiULSHVXiG%2FtHjNoPlKsw7giNJuJSn1G7Cvc47eF2p0fmSbCtZzICVOm%2FWocMrqKhx%2BDVbSJfq%2B%2FNhWMs7i9ARdiaM25mjAQoFdiQw4PXeZxQ%2F3%2BH95SCckvNiOxdwhYRxXy0uAS9zbqpQWThYzA7ijTFl03LVUPPV3gEGhlCwLETLZi32nKDtLq%2FYkM%2B1QFQ5WwKx7zNkQwScaAuglZ%2BC0B7XPWvw5BtzazkxBovse3mIxHsP8%2B8ZTkUP7MS2ArHcHubibe2XRu4KusiHm1Wma1MhTlpPASsezZQ9bXp%2Bv1U8XUDN%2BxDuTD6CIWNqOr4zqXOOX9MqRKC30WsmaHSSK2RB1wHuFVK0yforHGH5KnD8VCxLd3JU%2Bp6T79XW1gdx%2FXknTlurqaQYDiAwvaS8VW8%2FvrpzBI0t2eYn9bMbAhAv2k1QCruvkWK%2FW%2BI2g6FZJfjcL%2BHB4tfInmIpiePm7W6VmAbmwelzQwZ%2FfsOg%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x142ab5 = await httpGet(_0x2881ef, "水滴任务2");
  if (_0x142ab5.code == 1) {
    DoubleLog("\n水滴任务2：领取成功");
  } else if (_0x142ab5.code == 140) {
    DoubleLog("\n水滴任务2：任务未完成");
  } else if (_0x142ab5.code == 112) {
    DoubleLog("\n水滴任务2：已经领取过了 不要重复完成");
  } else if (_0x142ab5.code == 14) {
    DoubleLog("\n水滴任务2：未登录");
  }
}
async function rw3() {
  let _0x46dc75 = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?in=QFvzyCrXdbKaBgn2lzpCH%2Ftlldzr6CsnjVqpTsTNZLZT1KgFGelQ5NfuTJmn%2F995dq%2BxJzq48AZOz%2BqnP9XyCGaffva4SNTDUWrlRldGDl2L2wLB7fqVQgiRw7in1T4LQZQHBBdK%2BUqGGLqj%2FFFxrsF16KUJyZIC7JeAIM%2BFjGGqI2Syua8Kwhtz%2F%2FkRtYLwD1JoQQ9Zp2wJDYs1ZrFWzbfx6oW4OT8%2F1NGg24gK72ZjwRcH3AIU6P6biqRO2kzyOdEIZWLJJNDhjxhQXVT0uRAjlTNbMg42ssPwfbSWkwkD%2F9FscxS2R%2F%2Ff8Qlz28AILkIwlXkdDEe1v9jfT8IIVEV33bfPNYtczBM6RYMNlZyGxkFno6deHiCP809v9JuolcsQIcxX7iandg1GWc6el2QLHu1GWd8VNY37QRt3GpZiKAzw1PqixmHLgyaoeRLYIXEAcQjDTQso5APj5Dm6Jf0Gp5r7rSq7pbCnOZdUF3mxqHanOHSX133sUib0rd9S4dlfqhgRre%2F64cgApBLRfl9th2XB6RWaIDbcsOEkfGntZrB9PakOWymgtkBHmoKUd0bmBG8QRjU5AJo7f2YBra7Z4nRh9qFUAftIfxUJmccO7V0JOFV8eSZ%2FsNer4IeVprBAya0nD45jmJH1BAB72LsIHydFDn28HMnjufXbwYAuU0ueuiDHe%2Bgsmmit7lObfFgHfRgTZR0IdNZsBQawHYFUVl3l6mrtcJB5%2BgcPilpU3O5s2G6GQwlVACXAiQlC68RUn5p8x4wOKZ0ukJXGjuQneyPrkRYJSnZRkiVzJHxaDv2x4G%2FEsbWiO4dHyXzq%2FLDcOyuAlmjYEdxzOpOK0KhVFnb4tLTk3zXd4tDCKaUlu1unM6VfknTlXzt48%2BOe0UnKlt66LD1EnwhC8d5L2oBrI4LgoGXzFawxtpfO9TgY7piKCpKDhcctZrjnYcHYIwoiuTXkg9nGv16mYMC1bsLx4C9IAWn6gLcudsnZf%2BrbDwQbNfxWx43677R5a4yXSRJzGw%3D%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x52fa12 = await httpGet(_0x46dc75, "水滴任务3");
  if (_0x52fa12.code == 1) {
    DoubleLog("\n水滴任务3：领取成功");
  } else if (_0x52fa12.code == 140) {
    DoubleLog("\n水滴任务3：任务未完成");
  } else if (_0x52fa12.code == 112) {
    DoubleLog("\n水滴任务3：已经领取过了 不要重复完成");
  } else if (_0x52fa12.code == 14) {
    DoubleLog("\n水滴任务3：未登录");
  }
}
async function cl() {
  let _0x2167db = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?ent=2&in=2E78YAbeGfQqqRuTn%2FV9oWiYai1GrFND7d7DzcX5EF4sw8hoqv2L27WtJW6DR%2BodpOFhJTJ6CBBGPX0gG%2BtRuzpUdCfeig4%2FWlUN%2BHFxgAOxfktvVn2JK0UUxDMLN0A%2FP5amy%2BQlRWsPmJOjAJ4WploTLmXaMNDupzLxV5r6LbFBcWol%2Bl1zi8XOI0CBP%2BFCrUyqc7%2FwEXDyC26ka0p7JIVc4sRyrv6BERqMXCfWMaDaef5LM6M%2F1hF3R1PO7JfIZ1wZR6cOvqYxaJ6s0tHOXD7yLRV0YcQJFa0Lac3aNzVitBxwdvROgOmQ3qR3WHf%2BfBzZNM%2F5tagCJ7bciQI%2BN8806DSc8IP%2BogirJE8bULzVITViYpqGzSfBaNRpoRkY4e3TkXp%2BVeP2H9aWddIKryFE1LPSIp0tWg53BJFW249DvefcJMhvTMD621XCerIruYluaI2PTm4N0Bo21EX02CId%2B0teAafybeDNZiWQZ3LDNHr5vU%2FVPYRFtWnjMVv%2F0LRi4cDz%2FqVVXnBGOFvLAAXb6o0FYReOEr2mLuUB5vGgJrXxS4JFwpTW%2BWk3NGBz4bEFS6z6bL6eGerOo0HGNqm7MtAlou9UTNdSefbBUEl63XAv%2BOl1jZw3wPoHUifFi%2F7Gzri46KKd0MCqN55ZSXQqof6DLYY%2FSeYxQn1DNElK4c3YUlkWouyFDe5yH74wtpqmv5dE%2FilxZRMTW2647saFd%2BqFKASDgYByTEDuiK27b3pCLDFu07iUtmAYUKGRZeo0Wz%2Bbdx7QFdxZ9iMkAhxE2N5iZYDMZGkdT0yNgNL2TGgLE0kPMx1lEN%2FgAt2u%2B72GMI5XWCxan%2Fgc%2B816qO8bpvH1ai%2Fc0HQM9TX3Jd75DGNBNUEeIFKG6Qw4fG9hEjk41MvpxG18VWglXkSYo9XcCVWt%2F35CSpFbBKAxAu8t93LukLtN2yALNBdQvm6Cc7Qk78JlvW9zVIIHnD%2F56PNdG%2FA9lGx22U8U%2Bt34itrqBmvc9%2FRX9g%3D%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x2f1042 = await httpGet(_0x2167db, "收取潮流水滴");
  if (_0x2f1042.code == 1) {
    DoubleLog("\n收取奖励：收取成功");
  } else if (_0x2f1042.code == 112) {
    DoubleLog("\n收取奖励：已经领取过了 不要重复完成");
  } else if (_0x2f1042.code == 14) {
    DoubleLog("\n收取奖励：未登录");
  }
}
async function tblq() {
  let _0xc218e8 = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?in=QddCeUyF7G6bHbG8iu5QASJAirjcXqa8Ij7nh3WVsBFc%2BRaTTLWzSHFkKIdrHLhWm%2FNdeIaqZtYSprz5GXGl4eoXP5vvG8LUZFMIUEI%2BJ9%2FgRoR6jAcqGQEt5Fui2IEmWL3JWBLOasUb7GWvrH01ExR4HHFsdZfEbW%2F%2FofGFaS5Cl3ca6VXERRT3dWeCofrW6%2BD8yAqQxysFF%2BP0JGk9qXqTbYqEulv9NMyzX8B7eeypX2PJJ6lCqigUTePq%2BtZE%2FaxafRF2PyN2QOZ4%2Fqi1j3SObDmfZ7My3%2FPfV%2BW3cW9P6er8LF8j9TGsv6UBjkENuWhwZCjJ%2FtW1wp1PaApW2AOxr1vb1WvoOI%2FsRpUfFQ23dlwzDIuR9HvRqH4Lm5oX8lW%2BlvgYsrUtSI94pTIucY9SG7ufPfVuowBcpSOh%2FTBq6dJVp%2FngBeAt%2F3uXsH4cC4jBkViFdEz29NEgSbJ519gJKlj7AszAlbKpWAUSz6sKE%2Bpm6jFo0qs9Hw3LkmpBm%2F49KNqcAJZVKDmWu%2FajTwm8dUC%2FazIfSJZPm6Y%2Bgq5GZ6Bk3YfLO34Wf5Lk8nf%2BEmBkqKWDUHM6bgPULjQ96wczO0wwgvYoO%2BB3JCrL4WMAWPZBXEVyLBUklRPCxvheAL8IwsIlbYGu8y2xP9UmTbmIkefr0mk88ZcDNVJ7tsiPfb%2B6qaD3C252ugyL5X3340SHZb0ShDDW8l%2BnX%2FAI44lOwRyD2IiiA9X8yCJbYhdW995yH6CusyhZryII7dYwukpYdel5hxPFaUuAIeoxxLT%2FnvTTDZsg478zP%2FjzcbmNpaOkKSpQdJc4LPKBCMZch2jjuxkwk90w6MRBSCkjQd5%2BROltkj1QX70xRHkevd5l9kWA27YBrhVULoMXRZ0kY3FGB5ip7XRyDZGavW3zSHEUEbXr8vV9%2Fq3mj8SM%2FFADZ96%2BdJmfDSgGQo1d%2BFPqQQmeSbKxqm8k1fU8MesRCIg%2B3VPk4Xt6V%2FJ1GMZho%2BKOAZF07m3LAbolDWIX%2Brl1p7GPwooMetvIiIOhpn1VeKYMHolGOG%2Fj",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x100884 = await httpGet(_0xc218e8, "收取淘宝精选");
  if (_0x100884.code == 1) {
    DoubleLog("\n收取奖励：收取成功");
  } else if (_0x100884.code == 112) {
    DoubleLog("\n收取奖励：已经领取过了 不要重复完成");
  } else if (_0x100884.code == 14) {
    DoubleLog("\n收取奖励：未登录");
  }
}
async function ts1() {
  let _0x2137d4 = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?in=gUaxAdpTbO7e07KXq%2BrrXBdjFkWT%2B1xzAa5CgWbxjcFLHYPKaTPNdNU6nE8MNwi3JzYiwZBnQWkOj6%2FD40jpkiDyfTx6yC1rMR9U1y6vbo4IAEAqMH0mLqsIU4MwImumdHhmAXw95sjXSnaTBA8K1W6YxehFGS44qcd7p2%2FJm8grn7hTb9hDahqtW8WCKIwZe5lr7DW0%2B8B9q4siOJF0%2FgIUwozCjQjGyWVRL6KKgA0fXZsHsfZKehvJ9sDobWsGvJVXRRLMw5aJIpIZCZB8TfIc%2FSRIVAJ%2FvP7AhHUauvrLjk%2F2PG78mgTU2iFORspOVKUZbZMAEB09Hz13wzkV6DyPyzSFTtoFOjUu9KuS6HWYI9qkP8BPuhZb%2FDGr2Dq3YJPr%2BFRyKUoAHKBz7UKZhZSTAC8LZ5RK1S2QAGn%2BLPqdHQhpxyRR1da6RNQWFyC0%2BG8iTcUV0%2B4qStBJ1snPdYY1Y9KHMohDY2Gl6ooRvtslKeZbIh72vkjIg4v8zzYpPVZbdDMGfoLo6wMWvJ3%2BV%2FsA9qHP1n2pYcw6b%2BXZv8gOYo%2BukqmnXJ3%2F1IyLI5Iv92aAF%2FuAFeSRHByv7Vj4r1KYuh6%2FwXS6nqC9yZ%2FuO%2FkRL%2BfoCoj4SfZ94lSHE6VdXf1GGsYMrZAkh47vEFmTx2oZhFi28Tob3qrVYxDVsy%2BvFSFHtksL%2BQSrCTAg4VWp377S1ULCKcqh3h57lIjVGwrODVgHWuCspcqrEVXnEX9Vl9yNZIR4SmdyRJNmdUGLD1wBFLomq8IZOliLgzYaXKkjdgCEEDr70LECSBMACL%2F62sDBUwKD92IcElrIWpNT0AS%2BygrTR5ty5gKn5WF0ngqJ76qF1iZ3Y4Ey6MuFvVeLizFIRiaXO8%2BkkMWM4NHIlt5XnZ0uAupZBJ0G3rwOg%2BctLJEsFlwl78uycvkqwZFNA5XmY6szv59a32hUZ2bA8651%2Fl7lddvc0uGNVZjN2ahwcP87zY%2FR0gjJkhd%2Fnis8ZwNsh9CFjaPQXocNV5EcSw5jPhNaOkYZyHGkPcNikOQNL%2B1jH2L9%2BEstRQ%3D%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x23a0a1 = await httpGet(_0x2137d4, "探索");
  if (_0x23a0a1.code == 1) {
    DoubleLog("\n收取奖励：收取成功");
  } else if (_0x23a0a1.code == 112) {
    DoubleLog("\n收取奖励：已经领取过了 不要重复完成");
  } else if (_0x23a0a1.code == 14) {
    DoubleLog("\n收取奖励：未登录");
  }
}
async function js() {
  let _0x43fac2 = {
    "url": hostname + "/ws/activity/xiaode_garden/watering?in=6M9%2BhSVlFE9BOliBClVe9ySY0gBe4a%2FqBx7GKmmLkfSIoKV8mNO6lk18iDFf3Z%2Fyg6BTJz9oGZ1dmIPk4X44ChWILYqpVXf57HfgidKrM7FqlcPKmIPD4jSC1jlJbsrdhxVG0mbzaH83Si8wjRXFSptUUrHtp3KPZ9BMpehivXPawZTgwqstZSWgDDIM5TnvI6Kx0mDKBb4qVgnBheel610vSZLrlpdRPPyNa5ZSJaM2B3Hjpcmy%2Fh0l13h9ZzqntA39Q1uy%2BaRBCXJPzUm2vlneenYY%2Fkv9rTg7F7Sx4XpAqPHBKLKyUY18WBzBLDakmLI7oZiLLd7fpZgKoQdzibsNK3ZhgehEgQijdEnoE%2B5vHzZ14n9SsJ5yj%2Bu4bHVTY8BYtazI%2Bt9Azsv%2FHg%2FKaVgpyjKl5YgsdOH7yQ0WO7HocFNupLmJK8wKh713PfENx%2F77LR7anmPj8kSbg5nvqr%2FA%2BRR4JY5aeGNpD84m3kELGXjuW8IgqlT%2Bdz4dLE7ocq4HJXQjNxCw3A74VdlXLfFArOosn3sY7J%2Br6%2BHoE25SrJxBD26HSxNVS1b6CkQh6hcNgL%2Fo8%2FDC%2FNlgHw2CprHtTcfPNblh0Or3jtg4L5dGf8qEcg6aYAlUpSwRY2h3%2F7urOdEYEine%2FTiJrtGxGVmbqa2OhyBk8fsUlqyPT%2FmwxSNZa1lbJ7K8i8WGn6TIrPYrtK2iTDFoZLujoQ%2FN1zn%2FYd13%2Bapj%2Fi43jb%2B8lsVqzfrh%2FFNlOZAiInp2LZ%2FboXRS3UxRw0JUFUjk0x594Q2H3YDZFRvMEf1qtsz7pLMW%2F8zwotESlbeVgpwtHYWNFv3SA5x9nBgxxB1Dt5pC%2FqsvI68s%2Bj0QRdzHDz2XNkQGyuFpzr0e2iSgFyK0mcNJmSZiw79XQgvneNUfp8%2BomAsWq1lwsU03y%2B%2Fdk8%2Bce1CZI58ss7b1RXwR9Tb4pCPVRdTwOvpU93M%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x3745db = await httpGet(_0x43fac2, "浇水");
  if (_0x3745db.code == 1) {
    DoubleLog("\n浇水：此次浇水" + _0x3745db.data.cost + "  剩余" + _0x3745db.data.left_water + "\n目标：" + _0x3745db.data.fruit_info.name + "  当前进度" + _0x3745db.data.fruit_info.finish);
  } else if (_0x3745db.code == 107) {
    DoubleLog("\n浇水：水量不足");
  } else if (_0x3745db.code == 7) {
    DoubleLog("\n浇水：失败 可能变量已过期");
  }
  {
    DoubleLog("\n浇水：⚠请手动把浇水量设置为最大\n脚本运行一次即可完成浇水任务\n");
  }
}
async function ls1() {
  let _0x16e1ca = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?in=uXIn7eUnmhuPxFr0AxWIL%2BMLao8NqyU80pv8j3GDsDmu%2FppSZydEslsjG9NebMUomv9aj0%2BfvZWFsZEUe6TBZTenHopbPWX1yt2pGH2XzXq7gD2fnG9Q6J22EhdJfLqt8PYOdh3QhhOFR%2B9GpFhrUzKS6yQXwAzIFTwnJrLNNMhq4eW4LsIeqXxC6c2S%2BIFGdQbgePRAYv5ZwDVJ2%2FIDnVF6KzKc88JUh0Pjrh0Agk0HgJZSW1JfnZp4vwFsumjKXsv6J4yc6dHmuAcLlCAKBI%2Bw9xVcUktOQqbAOyU9bCYCEeUlTopZ6LsTnGVjfJisn7D3YTP999zuzM39ZQxgFp9gDiqBBlWU4zsFzeDTx8B%2Br43K58O8nFwl%2FqW7i1aaOG44OAZ1WIuRbpTfDdcOWx1twnfhvjW0pStXAXwYtHwnOpTaDfztA7cu3tWV9c5AyweQu00fTvMh7rdGDxv0mWOk%2BKtvSsc1TIkAlbMAAfBhCDv35ULGGOWYas%2BXVKJbo%2BOISpzFbfVZRgO1FPXScrRurmLrnCir1CmvMBMRE5lUKjm0SS%2BGcICTdnWeZqcNLFTIWkx3orR9k6qNmdC0qFgQlBoe1MauF5zI7Gwib9%2FaYBbBngZ5qJYMGUF%2Bvq60LmHBRX%2FJr9tvH7SYEuhcJxRwOKwiVHa0QoGHAEqm1p%2FLu8HJrPbPaKTB9ggWeHDwpIRtOzYQ5GZTeFgpM20m6gMKRR8Ou%2FmejTVr9ddMS7PAVMP8JZB%2FeUOKqwdmIBXRPjJZAe3VmX9wM9OH7qCDinbH4ZS3o5FPzKxHDSg2K4yfiXvjKoWKNGr8ys5hjgBQNOniNdY8TxvK1EwC%2BGP%2Blq4XM4A762Xs4H1zq0Bpi8nos0rikxR4NNE82VlsDwBTo2Mt0EKtucU0BNSdwpGWw%2FEhTVYoz0WQTq69ZCgX9tz7phusDk%2BMBWCOEkPMuJCoPKlzVaYbY0rVhVvqdwznlLLWarJedWBNvnVge4bY0M9xpuSck6ThAFNg%2BFdwUJqzHVZ0Hcg%2BU%2FM%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x5c318f = await httpGet(_0x16e1ca, "浇水奖励");
  if (_0x5c318f.code == 112) {
    DoubleLog("\n浇水奖励：已经领取过了 不要重复完成");
  } else if (_0x5c318f.code == 2) {
    DoubleLog("\n浇水奖励：失败 可能变量已过期");
  } else if (_0x5c318f.code == 1) {
    DoubleLog("\n浇水奖励：领取成功");
    DoubleLog("\n尝试重复浇水");
    await wait(10);
    await js();
  }
}
async function sign1() {
  let _0x57933a = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?ent=2&in=KU7Ez5v5DD9YnQ33jo%2FEMOAg0BqlKgaAao4A9ADhwJkBuX3RNv7174d%2B7yqhl5QMRAkGjyo3CHHovrJFcC8dkzq%2Be3Ar9rTwtljLnk9EpH518PVoIe%2FLfIGFcW2ZutPRCERVnLcbxEMZ1AkB8p9kbmbudYPQJ1oY5a0%2FlbXdkPTppkwC%2BBX7HjNabMMLsloxbmlm97k8VYBpGxONnvUfVBKflWX%2F6EIXFkUEwSpVaXNSPP5TViJ8TKWTlK7Gse4X8sw7XOVTrXAPjaxSHALEUyOpqBTANqO%2BvjdqXbiJeRBuVGdifjoyhwWdT2W4wnjI%2Br%2BUfZhQYpkDzuHaWrrkgskowooXVEqPMDl9n1T2KZhq9IS8YU8a4o3JrKgprS0PnX46%2Fn%2BHp6IkIw7NG8EESa%2ByvQz4tdFztNzQpoge0aOYjIjKkuh4EpxqFRMGe8%2FqfCqdD%2FTbOZ8g3WbIHFZzCPCcrNZUszjt1hDExpIhT8xCXJU%2F2STz9%2FG9edwLrYDOuu4y9MiuFJU43G9mmVdY9AxIHaylKgb1BDukJ3uvu8i%2F5EEAFecIfnBzhEwVHHiVw0zzRqP0yx8%2BCF2jJAWvhETS27DQknWLYqzxk8ZfAs8ajZAhuEfPzRy5EBWUkfJkNiCsYOo%2B2IICbGGoEfAHKz%2BfGEFzVJfxTATQNoxlaFS2DkPcxLqL11rT%2B8HeP341w0Q7aXN3SB8TgefFw7YdRzJtuqLM8ebGcqhbEoPW5amTXCpF4BJqIFxOKqo7WQjqi7KOjZFICh8WTbhZnDfQbKeTW%2BnDOwh3CHnidjGJZQvvgFQ1Wacd2lxk3MCnROhdZyGFC%2Bh0NtEoI2u4InnLow9CDCKiv9gQjHZ3u0jXbklR%2BuaWMDJs6l7C2ZXZ5uG6KI1EtVYSdFig3em9%2FGoE9e%2FGeX1dl83JAwsyNbrmhG%2FpJrVGKjrEZQJoVEjJwnQX%2Bruu6B0WNYrg8t5Pw0rrCoWs3y2oIKzMJN2Xc79bj9hXms6NXRX7rxTBteFRZ3UFpFyo8RgJN3nFAHStlMd6W3ci9qWWZhpB&csid=513d7430-393e-4311-b125-2e10569d633a",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x554cb0 = await httpGet(_0x57933a, "签到");
  if (_0x554cb0.code == 1) {
    DoubleLog("\n签到：获得" + _0x554cb0.data.amount + "滴水");
  } else if (_0x554cb0.code == 2) {
    DoubleLog("\n签到：领取失败");
  } else if (_0x554cb0.code == 112) {
    DoubleLog("\n签到：已经签到过了 不要重复完成");
  } else if (_0x554cb0.code == 14) {
    DoubleLog("\n签到：未登录");
  }
}
async function sign() {
  let _0x14d4af = {
    "url": hostname + "/ws/activity/xiaode_garden/task_rewards?ent=2&in=baJqniF2Txs2f%2Fyna5J3nVZKSmea%2B2TfISdsT24brk2cfEcI7W5QxdLs2TdLkiQaIp4ix3QPs26jSpjOexNMJhoOeOoo6uIPKh4u1n4Xb4lbBaMK%2FQQgfXaseIVk8yVZzang5gR%2FHTqHneguBFhOkVurXzklDH0Wge36NMRgv%2B1JSPURJwm%2BOWDYXu6F5Uz1bizn4nXMGDKrXK0OlUis53zbJ4fEE3MP0j3AiMhh4XRCXoM6Z3SHZztQ%2Bo5oy9ZAoYeXkh5f8xj4%2F3S5527tGstSNZPGGVxHraZV%2F2qfLyz7hnZBmhJdIkoEwF52fHauge1X27PMJRXHemcR4%2FUyJlZyfCvYPM5qichLhH%2FSZAomLvqfky%2B74706jB8P9pRn%2B1vBUO19zuK4xFg3PbAKFJLmR84rxXiNbzSzKVeR0QQgSWQ0Ww8ujCOTQeTy3FmDVYTvSeoz6K5B45k3GBjfCqQRoZNdnQg6saHQOO579ah49zjc8F35dYKIYv%2BFFn%2BR2jdqPCZmNKZ%2Bu16UYbnoDtwyR%2BZ1lClaUEm4jHAH8wflHd%2BVBqgygOxm9gr%2FaSPzKsp4%2FyYl8r%2FfP8S74R2vsyahAla3CceLrE6PPBeup7IAhxe2vAe0E0kxKcUYhgp3z8Y7UCaVu22jWTgaViynauDv5w20%2FZjMDiPZhMwiQXyayXfxOoJoLTzhIAL6KpWXh8k%2BM%2FYbifoWhm2UKjQKHOUycFP%2FmoNYhoPlEPEnLpmEYl86fa2ycN4scXwQ6DhfGa1KNDV3j9PmgHc%2F6A6a%2BdyXOPassdoWR5owvc7a8SrW8d4hRMSHq%2FKttx2Nc6jJtX3HfMuNLlst7gFeMEwZMZQwQVfvOhsO1WWp9nOWoqCwqhvVUByFe7BHzMMqnQInb1IDGOmcgVAaJXhLt9lAJaM2qiyKWzPD1h9wghm1ycdZc8FJyU0fRx4MqKPsyn5sNrkeeLlSt5mTySU5lZeVrp%2BvSKNhslDO1RH4emgKuRew8UGbjF7Atgnjrcnp6Si%2BYFbRcHb1EG9a6OGYORW%2BYalZSNr6pYSoqrbhXQ%3D%3D&csid=f06c1f41-f6df-4688-8a89-58a8757f86c1",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x1067d5 = await httpGet(_0x14d4af, "签到领水");
  if (_0x1067d5.code == 1) {
    DoubleLog("\n签到领水：获得" + _0x1067d5.data.amount + "滴水");
  } else if (_0x1067d5.code == 112) {
    DoubleLog("\n签到领水：已经领取过了 不要重复完成");
  } else if (_0x1067d5.code == 14) {
    DoubleLog("\n签到领水：未登录");
  }
}
async function qd() {
  let _0x37b643 = {
    "url": hostname + "/ws/activity/xiaode_garden/sign_new?ent=2&in=xFQe1moT6zBNBuc0SO8rstaH5EdacE%2BE081QSWRY4IienSV6TVARopTDxnRH46Dp1SkGhwOYGD3XEUrS4Icto%2F307g1q2S4iQfEZ9b5pTxVClox75owcXmSs7JpAIhF9YEizcCYAvzYMK%2BDuGtB%2FUmwJJ1f%2FEOYl0RlyuZ8wmN6A9TGb4XLNSpd3RkrpwOO6IHvTICHZIC6in7Q6t3xMZofLkSllMW0ENcPRhWaAK0eK13NrK%2FpDs0JgKXmz9icdjtMSa5Cmg4V2engOkKa%2FbbU6jGuEHLCIecz6WTuDxp%2B86goDctHkMjYk7dVXznxXtOV9A1MbiFaScCyE5kdsPxAoNh1V8g1wktDNichkGb79G%2BI8km3AscfL6VIzJlmcADDeGPZWEiuJupoBAnI5YXI54yVLRlsp5PM4D7xUEuzLdeoi3JCPS63uU%2B7WwJne92U6i8VxB%2BmkpkAa1R%2BfSIVNa9RFV4Hr6ByxrAEsJgXjdQbAyW15ovLJ8AuDkfcDrjWpfFHHQp7Hr19PTZVgAQidInGJY%2FRo16Wkx7HwHsO5501aO5I1Ib8fZjUbzqwyDpvz5ryzcr7DpZLRdNofdeeY2oarj6QFB6Oo%2FxSVHbak4SFGIA%2FdXZ5KwIyNZE43BWTHIAt6UoEYERs8T0CI3HFjPhO%2FWAWnwTJr445RHP%2FOjEh4y6YK1QJPSFCjlcUsJ1xzWmxJbb7sXYzTxDpOLw9N48NjJmy1fncML%2BHyyWeymmxGRdb7d1cSYxLjEPT5ZCR5TCtvL39%2BOEPOhAaIgWN8h21tAaiOZg1UP0bIL3z%2FXIiiuXSy79gy7ycCp7CpPyCUdPBJMhbPJ7honmytI%2F%2B7RP7qu8WNn%2BnktVC4SRaNOdqv6qCqxNyqiKe%2B%2BCmpbihluMKuG4Kg0UfEza5WmgXvsRSxGj2Zi%2FYDfzJ5GAHkud4c1bL2pPLz5EPXYGKYBkJgotRdzQAHEB8n0T3Prh7aUb0%3D&csid=5f15afe8-a0c5-4728-93fb-8aad5b0c6fa9",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x1410e6 = await httpGet(_0x37b643, "连续签到");
  if (_0x1410e6.code == 1) {
    DoubleLog("\n连续签到：获得" + _0x1410e6.data.amount + "滴水");
  } else if (_0x1410e6.code == 112) {
    DoubleLog("\n连续签到：已经签到过了 不要重复完成");
  } else if (_0x1410e6.code == 14) {
    DoubleLog("\n连续签到：失败 可能变量失效");
  }
}
async function box() {
  let _0x3fa136 = {
    "url": hostname + "/ws/activity/xiaode_garden/rain_reward?in=lWYwTToOS6AgEbVMHC7VjhiyYDzBl2a5yaMrkHIZJNps6mmFNsbpzDL0Wb2S9f1xC9r%2BxTx74ZuLmKST6REf9VSAJzHnG6ZUxEsGKGw8e%2B39HGYOm%2FpXdJ6MxwpubgGaFPAgIeTh44ghqnc5SuZIoc57WJIqvEp%2BtdVbHxVoRvCtPBAawVrfswXEooGAMbGGFHbdJ9%2FCF7v0JujC1Pb65irvQn2oBPPeaojWCZ2MXQZbp8FSvBta2DQGgY%2BmpGFgroq9NtDbfsPnTSdDnDanTdg5laBP1iflvN%2Feyo44kXMMTqgR7LwKcR3%2F4puEmr0f3mb2G0mTD19IOO%2FnIxZLmiXVJU9bzR6LtlpcfNik0Ccl4QMLq%2BUoCr1se5rDOaR06hzT%2BEt7ZsOCXDPs%2FYy2mzg6sFx7e8w%2BdcFhoieYAULrdPEwSKxVnjOE2rCIWUUgZLMIsi3P412OTzkRu7pQ6aqyGehQfUqJ5XyNvHBNBYDmbLsKKVTE2o9kRCVm%2BNFiis0piVFHBsWbgJQ%2BKam9eE9CqCxjb0bzUKv9DCFgseMJ7OWlujXEtIuGgNmqGsMdX%2F08r%2B5nPBqdERn%2BVuxjLAc1Dgvt2CvA5%2FRwA%2BLEWvn7wq9vk5fRDovOfI%2FKvPjDU%2FtHHYDknC7J1T34hLAsHyUB3KsgoO7HLPcUoza0a2VTQi9b%2BONIE%2B0VtOsu7nb4rhwjjIvaqqQmmPiOa92UK5bia5G3O1zA9WIk11r0LJLHo1Reig4rmS7RjoBqUFAclgxAvtIHvOXWQ5%2FsazLj7GWMpatncduhvlNWw9imBEoJZWieA%2F0f7t1fdePx2WlkT3UsYPfbLNRFVgx5W2S8oYpyAaD5VW1iCsMAO0MlsxB5ljcGrGxrlXSZXMhvZYg7EGLFUjJCqVbBxXIkyPzWrGaGWWU5RpM1Kiv6e2VWZTHY35ZOg1DxYg3Py4yHmsFcT4tPqvHQ3AOUwlPz4sS06f1C4fW5y1ireeGVp0XOmYlpLitntiGq%2BQ%3D%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0xcd1a1 = await httpGet(_0x3fa136, "开箱子");
  if (_0xcd1a1.code == 1) {
    DoubleLog("\n开箱子：获得" + _0xcd1a1.data.amount + "滴水");
  } else if (_0xcd1a1.code == 112) {
    DoubleLog("\n开箱子：已经领取过了 不要重复完成");
  } else if (_0xcd1a1.code == 14) {
    DoubleLog("\n开箱子：失败 可能变量失效");
  }
}
async function ls() {
  let _0x21cdb6 = {
    "url": hostname + "/ws/activity/xiaode_garden/receive_water?in=GjHYJYatki%2FBuT3j6nWg%2BoQL8D5wLfgtWmmYqYNVExXWS0USEE20PMcHV8d2x2Ytels3cVQt0%2B563yRa47S5ChC3To0glMZYHppdU9KUXn501GvFxipQU4apghbdLhp2APYSW1gJ0vAVnNVny0z4e71z1%2ByRcN2NYVfNN%2B6U1oZtF9Z%2BbYlUcwJTY8D7zPkQ47xWLwwVQ71%2FdLEW387Uef3egBALF3pZCfG%2BszBt29ONcDKf7P%2B6HtG9cI%2F8UCmF1E8gjd7tRAL%2BNZ6u%2FEgJTrjbfXxiSBM5xGfGwbjJS70g9REsJbUnoKbOHktAuNfoQ0hLO6QQorpyaDa%2Fxk2eCZddKLgMt%2FtW96TdiqISXlLMdqszQuMkxLwNgi9IKK5xuW6u7uF9vk7yKkoRCRRS6rsvLNMe5Bxd%2BeBsPrdMGF%2Fn85uqmgGhbvAiVuX6StlA1yptu1ibgKk4PAiqMTDA%2BeuotpXDXLwP3HLhfRlogtS4pDmmQ4w5sY8Obp8T%2F1YT3WtB79DhOcqzG2l7ndwuEiqUMUnVxmCcDxk8UNha9jR6020TmOi3rd1fRp%2FLxWNxD0mKk6RZTQeHQnYnfVHlPv0XxPcTvRJpDErkoeeYg%2F28Yp4CwtdgUasIjjGa0BzEb3%2FhUQ%2FEFMEyzZZ0XRp4vca386Cq7YX1LrqEvBtQT%2FuN1DLNtbATuNWrn0FMMZIsMouKq3E1xNgcbd%2Fi8Pv0tX8RW8NivgLQqezG0gQ8JFzJCv86Lgv4EHO1yY0ILYjMRQkVnwCfj1pAc7aypnA2bTCoU7klOwYCenzITmYbBPH7faJRfXHwx1%2BytoR3WWQtiLtbbDGSddEWixWdI%2FtgkJDIG9Lyx5LmGyBMaOgNEBGABqeQx1BU2riQNqetR%2FGRvVD0SDm6Zu4U6DhrGEIPPXjTMgdN1RrbEhoQDqa4jrMi6XngMNx3VAi8GOH%2FyN60tztdBqzKn7V39yd53YW9wYV24E42eRRVK4QbTXmtVnsekrT%2Bfe9BbtaaqUMSUciXH%2F8C1A%3D%3D",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x14eb49 = await httpGet(_0x21cdb6, "领储水");
  if (_0x14eb49.code == 1) {
    DoubleLog("\n领储水：获得" + _0x14eb49.data.amount + "滴水");
  } else if (_0x14eb49.code == 131) {
    DoubleLog("\n领储水：还没到时间呢");
  } else if (_0x14eb49.code == 140) {
    DoubleLog("\n领储水：已经领取过了 不要重复完成");
  } else if (_0x14eb49.code == 14) {
    DoubleLog("\n领储水：未登录");
  }
}
async function box() {
  let _0x2a2b36 = {
    "url": hostname + "/ws/activity/xiaode_garden/rain_reward?in=8UIGX9R2BCot9iJJdZ%2B0dGOUWLiaMMuWqanuG9qxWHIUtVTDRBe%2Bfh2rUgKq8DIVfela48XJy%2FLbfJQvw1YMGZ%2BN6KDasHY79qXNj4x7b4FAyXlwWWR6a7hD9PLKYqhtKEm%2FV1gKmqORG4YV9R%2BwAf7NZNGzinTxDht5YD1kGA2Htqm%2BE8kLojDtB1%2F2doSpyOh1STBZnOVkUdzZKavldz8lc9%2FgGn5TdfNz9VQ%2FOguMiVtrl7D3vIwHqI6cuKRwQGmBcHB5V9uUclQiSQJ4yKpLSRKj0POOGS17lAgJDi9D6QbVVmjXZfFa5Bt%2FNbMR5pJJ9rNLPYPDdAXm4btS2APOu%2FyuOwkoinZ57BHz%2BeMU4rhZJiXeJb1hJyPnnzQqGBewnVC7t4zdGZ18Xj0tOM4SSiTdoDs3PbyLYXT7a1pljm4HLEY2UcZc4sjSTj%2FGgUC76NtVesF1Rm6Ag%2BYzZLsgS9Vg0R1uC2sctRiva3PkfoyEkBB%2BuLF%2BTtOMw8i1CreGqG9Zu0n0BupKh1w7HyJRIT8Z%2FIQx8042Xmniu%2BJEd5tXqO7yCX0GJLm6A6HZdd7yXaVonIj2xayOCmi8LJC2VnNark5U4nkD78MS7FbkTAVjTjksDPfZqRCXhlPSb4XkMx1gM6qALSvrkmYkBYTb7GBwzmpEqAOhUWE5JIqKRym9Xyp6YxKtixdV18mFo01gZs2%2BZY1Nto81qqp1NBPmGI%2F3F7tuUq%2BODFs3y78ZC1jBK1kiz%2B26ac%2F0Tme2cXmqj%2B2nh4%2FzuGTsGsJmf3DlPE2Uvf9O3c8lxeSjr8%2FR9ZyfB9krk%2FRyOt%2F4PIVScvTc5%2Bk7Z7bsCBsmChOkceX2EO%2BugiVyk5KIl8aAl62Ql5qsFO2CASuXYbX4908xXm2KXZhOzGAHa7BIqR3uEzlqAeGRCUjsUvpU5eKWKVIsF3kb4YpsrwKf5UH1BDnHhOZIffPYbo5oomZAlJQtFkpMtIIyeCkx0LGrwNxlPV%2BhRQo7obbrjDAkuEX8AjUz",
    "headers": {
      "Accept-Encoding": "gzip",
      "Cookie": "" + ck[0]
    }
  };
  let _0x4b916a = await httpGet(_0x2a2b36, "开箱子");
  if (_0x4b916a.code == 1) {
    DoubleLog("\n开箱子：获得" + _0x4b916a.data.amount + "滴水");
  } else if (_0x4b916a.code == 131) {
    DoubleLog("\n开箱子：还没到时间呢");
  } else if (_0x4b916a.code == 112) {
    DoubleLog("\n开箱子：已经领取过了 不要重复完成");
  } else if (_0x4b916a.code == 14) {
    DoubleLog("\n开箱子：未登录");
  }
}
function Version_Check(_0x4688f7) {
  return new Promise(_0x24aa17 => {
    let _0x5dc54a = {
      "url": "https://git.lihui.ml/https://raw.githubusercontent.com/kristallsi/JavaScript/main/" + _0x4688f7 + ".js"
    };
    $.get(_0x5dc54a, async (_0x31a588, _0x42aa05, _0x22f3b2) => {
      try {
        VersionCheck = _0x42aa05.body.match(/VersionCheck = "([\d\.]+)"/)[1];
      } catch (_0x4c9526) {
        $.logErr(_0x4c9526, _0x42aa05);
      } finally {
        _0x24aa17(VersionCheck);
      }
    }, timeout = 3);
  });
}
function Version_Check1(_0x166305) {
  return new Promise(_0x189ef4 => {
    let _0x410ff9 = {
      "url": "https://git.lihui.ml/https://raw.githubusercontent.com/kristallsi/JavaScript/main/" + _0x166305 + ".js"
    };
    $.get(_0x410ff9, async (_0x3c1c5c, _0x5f2d6c, _0x115430) => {
      try {
        Change = _0x5f2d6c.body.match(/Change = "([\u4e00-\u9fa5]+)"/)[1];
      } catch (_0x542772) {
        $.logErr(_0x542772, _0x5f2d6c);
      } finally {
        _0x189ef4(Change);
      }
    }, timeout = 3);
  });
}
_0xod4 = "jsjiami.com.v6";
async function getCks(ck, str) {
  return new Promise(resolve => {
    let ckArr = [];
    if (ck) {
      if (ck.indexOf("@") !== -1) {
        ck.split("@").forEach(item => {
          ckArr.push(item);
        });
      } else if (ck.indexOf("\n") !== -1) {
        ck.split("\n").forEach(item => {
          ckArr.push(item);
        });
      } else {
        ckArr.push(ck);
      }
      resolve(ckArr);
    } else {
      console.log(` :未填写变量 ${str}`);
    }
  });
}
async function SendMsg(message) {
  if (!message) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var notify = require("./sendNotify");
      await notify.sendNotify($.name, message);
    } else {
      $.msg(message);
    }
  } else {
    console.log(message);
  }
}
function DoubleLog(data) {
  if (data) {
    console.log(`    ${data}`);
    msg += `\n    ${data}`;
  }
}
function randomszdx(e) {
  e = e || 32;
  var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
function randomszxx(e) {
  e = e || 32;
  var t = "qwertyuioplkjhgfdsazxcvbnm1234567890",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function local_hours() {
  let myDate = new Date();
  h = myDate.getHours();
  return h;
}
function local_minutes() {
  let myDate = new Date();
  m = myDate.getMinutes();
  return m;
}
function local_year() {
  let myDate = new Date();
  y = myDate.getFullYear();
  return y;
}
function local_month() {
  let myDate = new Date();
  let m = myDate.getMonth();
  return m;
}
function local_month_two() {
  let myDate = new Date();
  let m = myDate.getMonth();
  if (m.toString().length == 1) {
    m = `0${m}`;
  }
  return m;
}
function local_day() {
  let myDate = new Date();
  let d = myDate.getDate();
  return d;
}
function local_day_two() {
  let myDate = new Date();
  let d = myDate.getDate();
  if (d.toString().length == 1) {
    d = `0${d}`;
  }
  return d;
}
function wait(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
async function httpGet(getUrlObject, tip, timeout = 3 * 1000) {
  return new Promise(resolve => {
    let url = getUrlObject;
    if (!tip) {
      let tmp = arguments.callee.toString();
      let re = /function\s*(\w*)/i;
      let matches = re.exec(tmp);
      tip = matches[1];
    }
    if (debug) {
      console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
      console.log(url);
    }
    $.get(url, async (err, resp, data) => {
      try {
        if (debug) {
          console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
          console.log(data);
          console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
          console.log(JSON.parse(data));
        }
        let result = JSON.parse(data);
        resolve(result);
      } catch (e) {} finally {
        resolve();
      }
    }, timeout);
  });
}
async function httpPost(postUrlObject, tip, timeout = 3 * 1000) {
  return new Promise(resolve => {
    let url = postUrlObject;
    if (!tip) {
      let tmp = arguments.callee.toString();
      let re = /function\s*(\w*)/i;
      let matches = re.exec(tmp);
      tip = matches[1];
    }
    if (debug) {
      console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
      console.log(url);
    }
    $.post(url, async (err, resp, data) => {
      try {
        if (debug) {
          console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
          console.log(data);
          console.log(`======`);
          console.log(JSON.parse(data));
        }
        let result = JSON.parse(data);
        resolve(result);
      } catch (e) {} finally {
        resolve();
      }
    }, timeout);
  });
}
async function httpRequest(postOptionsObject, tip, timeout = 3) {
  return new Promise(resolve => {
    let options = postOptionsObject;
    let request = require("request");
    if (!tip) {
      let tmp = arguments.callee.toString();
      let re = /function\s*(\w*)/i;
      let matches = re.exec(tmp);
      tip = matches[1];
    }
    if (debug) {
      console.log(`\n 【debug】=============== 这是 ${tip} 请求 信息 ===============`);
      console.log(options);
    }
    request(options, async (err, resp, data) => {
      try {
        if (debug) {
          console.log(`\n\n 【debug】===============这是 ${tip} 返回数据==============`);
          console.log(data);
          console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
          console.log(JSON.parse(data));
        }
        let result = JSON.parse(data);
        if (!result) return;
        resolve(result);
      } catch (e) {
        console.log(err, resp);
        console.log(`\n ${tip} 失败了!请稍后尝试!!`);
        msg += `\n ${tip} 失败了!请稍后尝试!!`;
      } finally {
        resolve();
      }
    });
    timeout;
  });
}
function debugLog(...args) {
  if (debug) {
    console.log(...args);
  }
}
function rotateRight(n, x) {
  return x >>> n | x << 32 - n;
}
function choice(x, y, z) {
  return x & y ^ ~x & z;
}
function majority(x, y, z) {
  return x & y ^ x & z ^ y & z;
}
function sha256_Sigma0(x) {
  return rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x);
}
function sha256_Sigma1(x) {
  return rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x);
}
function sha256_sigma0(x) {
  return rotateRight(7, x) ^ rotateRight(18, x) ^ x >>> 3;
}
function sha256_sigma1(x) {
  return rotateRight(17, x) ^ rotateRight(19, x) ^ x >>> 10;
}
function sha256_expand(W, j) {
  return W[j & 15] += sha256_sigma1(W[j + 14 & 15]) + W[j + 9 & 15] + sha256_sigma0(W[j + 1 & 15]);
}
var K256 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
var ihash, count, buffer;
var sha256_hex_digits = "0123456789abcdef";
function safe_add(x, y) {
  var lsw = (x & 65535) + (y & 65535);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 1779033703;
  ihash[1] = 3144134277;
  ihash[2] = 1013904242;
  ihash[3] = 2773480762;
  ihash[4] = 1359893119;
  ihash[5] = 2600822924;
  ihash[6] = 528734635;
  ihash[7] = 1541459225;
}
function sha256_transform() {
  var a, b, c, d, e, f, g, h, T1, T2;
  var W = new Array(16);
  a = ihash[0];
  b = ihash[1];
  c = ihash[2];
  d = ihash[3];
  e = ihash[4];
  f = ihash[5];
  g = ihash[6];
  h = ihash[7];
  for (var i = 0; i < 16; i++) W[i] = buffer[(i << 2) + 3] | buffer[(i << 2) + 2] << 8 | buffer[(i << 2) + 1] << 16 | buffer[i << 2] << 24;
  for (var j = 0; j < 64; j++) {
    T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
    if (j < 16) T1 += W[j];else T1 += sha256_expand(W, j);
    T2 = sha256_Sigma0(a) + majority(a, b, c);
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
  }
  ihash[0] += a;
  ihash[1] += b;
  ihash[2] += c;
  ihash[3] += d;
  ihash[4] += e;
  ihash[5] += f;
  ihash[6] += g;
  ihash[7] += h;
}
function sha256_update(data, inputLen) {
  var i,
    index,
    curpos = 0;
  index = count[0] >> 3 & 63;
  var remainder = inputLen & 63;
  if ((count[0] += inputLen << 3) < inputLen << 3) count[1]++;
  count[1] += inputLen >> 29;
  for (i = 0; i + 63 < inputLen; i += 64) {
    for (var j = index; j < 64; j++) buffer[j] = data.charCodeAt(curpos++);
    sha256_transform();
    index = 0;
  }
  for (var j = 0; j < remainder; j++) buffer[j] = data.charCodeAt(curpos++);
}
function sha256_final() {
  var index = count[0] >> 3 & 63;
  buffer[index++] = 128;
  if (index <= 56) {
    for (var i = index; i < 56; i++) buffer[i] = 0;
  } else {
    for (var i = index; i < 64; i++) buffer[i] = 0;
    sha256_transform();
    for (var i = 0; i < 56; i++) buffer[i] = 0;
  }
  buffer[56] = count[1] >>> 24 & 255;
  buffer[57] = count[1] >>> 16 & 255;
  buffer[58] = count[1] >>> 8 & 255;
  buffer[59] = count[1] & 255;
  buffer[60] = count[0] >>> 24 & 255;
  buffer[61] = count[0] >>> 16 & 255;
  buffer[62] = count[0] >>> 8 & 255;
  buffer[63] = count[0] & 255;
  sha256_transform();
}
function sha256_encode_bytes() {
  var j = 0;
  var output = new Array(32);
  for (var i = 0; i < 8; i++) {
    output[j++] = ihash[i] >>> 24 & 255;
    output[j++] = ihash[i] >>> 16 & 255;
    output[j++] = ihash[i] >>> 8 & 255;
    output[j++] = ihash[i] & 255;
  }
  return output;
}
function sha256_encode_hex() {
  var output = new String();
  for (var i = 0; i < 8; i++) {
    for (var j = 28; j >= 0; j -= 4) output += sha256_hex_digits.charAt(ihash[i] >>> j & 15);
  }
  return output;
}
function sha256_Encrypt(data) {
  sha256_init();
  sha256_update(data, data.length);
  sha256_final();
  return sha256_encode_hex();
}
function MD5Encrypt(a) {
  function b(a, b) {
    return a << b | a >>> 32 - b;
  }
  function c(a, b) {
    var c, d, e, f, g;
    return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
  }
  function d(a, b, c) {
    return a & b | ~a & c;
  }
  function e(a, b, c) {
    return a & c | b & ~c;
  }
  function f(a, b, c) {
    return a ^ b ^ c;
  }
  function g(a, b, c) {
    return b ^ (a | ~c);
  }
  function h(a, e, f, g, h, i, j) {
    return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e);
  }
  function i(a, d, f, g, h, i, j) {
    return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d);
  }
  function j(a, d, e, g, h, i, j) {
    return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d);
  }
  function k(a, d, e, f, h, i, j) {
    return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d);
  }
  function l(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) {
      b = (i - i % 4) / 4;
      h = i % 4 * 8;
      g[b] = g[b] | a.charCodeAt(i) << h;
      i++;
    }
    return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g;
  }
  function m(a) {
    var b,
      c,
      d = "",
      e = "";
    for (c = 0; 3 >= c; c++) {
      b = a >>> 8 * c & 255;
      e = "0" + b.toString(16);
      d += e.substr(e.length - 2, 2);
    }
    return d;
  }
  function n(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
    }
    return b;
  }
  var o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x = [],
    y = 7,
    z = 12,
    A = 17,
    B = 22,
    C = 5,
    D = 9,
    E = 14,
    F = 20,
    G = 4,
    H = 11,
    I = 16,
    J = 23,
    K = 6,
    L = 10,
    M = 15,
    N = 21;
  for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) {
    p = t;
    q = u;
    r = v;
    s = w;
    t = h(t, u, v, w, x[o + 0], y, 3614090360);
    w = h(w, t, u, v, x[o + 1], z, 3905402710);
    v = h(v, w, t, u, x[o + 2], A, 606105819);
    u = h(u, v, w, t, x[o + 3], B, 3250441966);
    t = h(t, u, v, w, x[o + 4], y, 4118548399);
    w = h(w, t, u, v, x[o + 5], z, 1200080426);
    v = h(v, w, t, u, x[o + 6], A, 2821735955);
    u = h(u, v, w, t, x[o + 7], B, 4249261313);
    t = h(t, u, v, w, x[o + 8], y, 1770035416);
    w = h(w, t, u, v, x[o + 9], z, 2336552879);
    v = h(v, w, t, u, x[o + 10], A, 4294925233);
    u = h(u, v, w, t, x[o + 11], B, 2304563134);
    t = h(t, u, v, w, x[o + 12], y, 1804603682);
    w = h(w, t, u, v, x[o + 13], z, 4254626195);
    v = h(v, w, t, u, x[o + 14], A, 2792965006);
    u = h(u, v, w, t, x[o + 15], B, 1236535329);
    t = i(t, u, v, w, x[o + 1], C, 4129170786);
    w = i(w, t, u, v, x[o + 6], D, 3225465664);
    v = i(v, w, t, u, x[o + 11], E, 643717713);
    u = i(u, v, w, t, x[o + 0], F, 3921069994);
    t = i(t, u, v, w, x[o + 5], C, 3593408605);
    w = i(w, t, u, v, x[o + 10], D, 38016083);
    v = i(v, w, t, u, x[o + 15], E, 3634488961);
    u = i(u, v, w, t, x[o + 4], F, 3889429448);
    t = i(t, u, v, w, x[o + 9], C, 568446438);
    w = i(w, t, u, v, x[o + 14], D, 3275163606);
    v = i(v, w, t, u, x[o + 3], E, 4107603335);
    u = i(u, v, w, t, x[o + 8], F, 1163531501);
    t = i(t, u, v, w, x[o + 13], C, 2850285829);
    w = i(w, t, u, v, x[o + 2], D, 4243563512);
    v = i(v, w, t, u, x[o + 7], E, 1735328473);
    u = i(u, v, w, t, x[o + 12], F, 2368359562);
    t = j(t, u, v, w, x[o + 5], G, 4294588738);
    w = j(w, t, u, v, x[o + 8], H, 2272392833);
    v = j(v, w, t, u, x[o + 11], I, 1839030562);
    u = j(u, v, w, t, x[o + 14], J, 4259657740);
    t = j(t, u, v, w, x[o + 1], G, 2763975236);
    w = j(w, t, u, v, x[o + 4], H, 1272893353);
    v = j(v, w, t, u, x[o + 7], I, 4139469664);
    u = j(u, v, w, t, x[o + 10], J, 3200236656);
    t = j(t, u, v, w, x[o + 13], G, 681279174);
    w = j(w, t, u, v, x[o + 0], H, 3936430074);
    v = j(v, w, t, u, x[o + 3], I, 3572445317);
    u = j(u, v, w, t, x[o + 6], J, 76029189);
    t = j(t, u, v, w, x[o + 9], G, 3654602809);
    w = j(w, t, u, v, x[o + 12], H, 3873151461);
    v = j(v, w, t, u, x[o + 15], I, 530742520);
    u = j(u, v, w, t, x[o + 2], J, 3299628645);
    t = k(t, u, v, w, x[o + 0], K, 4096336452);
    w = k(w, t, u, v, x[o + 7], L, 1126891415);
    v = k(v, w, t, u, x[o + 14], M, 2878612391);
    u = k(u, v, w, t, x[o + 5], N, 4237533241);
    t = k(t, u, v, w, x[o + 12], K, 1700485571);
    w = k(w, t, u, v, x[o + 3], L, 2399980690);
    v = k(v, w, t, u, x[o + 10], M, 4293915773);
    u = k(u, v, w, t, x[o + 1], N, 2240044497);
    t = k(t, u, v, w, x[o + 8], K, 1873313359);
    w = k(w, t, u, v, x[o + 15], L, 4264355552);
    v = k(v, w, t, u, x[o + 6], M, 2734768916);
    u = k(u, v, w, t, x[o + 13], N, 1309151649);
    t = k(t, u, v, w, x[o + 4], K, 4149444226);
    w = k(w, t, u, v, x[o + 11], L, 3174756917);
    v = k(v, w, t, u, x[o + 2], M, 718787259);
    u = k(u, v, w, t, x[o + 9], N, 3951481745);
    t = c(t, p);
    u = c(u, q);
    v = c(v, r);
    w = c(w, s);
  }
  var O = m(t) + m(u) + m(v) + m(w);
  return O.toLowerCase();
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      this.log("", `🔔${this.name}  开始!`);
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
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
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
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
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
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
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
      } else s = this.setval(t, e);
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
      } else if (this.isQuanX()) {
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
      } else if (this.isNode()) {
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
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
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
      this.log("", `🔔${this.name}  结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}