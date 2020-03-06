import * as ProtoDebug from "./mods/ProtoSectionDebug";
import * as ProtoAcc from "./mods/ProtoSectionAcc";
import * as ProtoPlayer from "./mods/ProtoSectionPlayer";
import * as ProtoTurntable from "./mods/ProtoSectionTurntable";
import * as ProtoHero from "./mods/ProtoSectionHero";
import * as ProtoChat from "./mods/ProtoSectionChat";
import * as ProtoSkill from "./mods/ProtoSectionSkill";
import * as ProtoStage from "./mods/ProtoSectionStage";
import * as ProtoWeapon from "./mods/ProtoSectionWeapon";
import * as ProtoBar from "./mods/ProtoSectionBar";
import * as ProtoProperty from "./mods/ProtoSectionProperty";
import * as ProtoSign from "./mods/ProtoSectionSign";
import * as ProtoLucky from "./mods/ProtoSectionLucky";
import * as ProtoChallenge from "./mods/ProtoSectionChallenge";
import * as ProtoExchange from "./mods/ProtoSectionExchange";
import * as ProtoAchievement from "./mods/ProtoSectionAchievement";
import * as ProtoBattle from "./mods/ProtoSectionBattle";
import * as ProtoGuide from "./mods/ProtoSectionGuide";
import * as ProtoCustomerService from "./mods/ProtoSectionCustomerService";
import * as ProtoRank from "./mods/ProtoSectionRank";
import * as ProtoPet from "./mods/ProtoSectionPet";
import * as ProtoPromote from "./mods/ProtoSectionPromote";
import * as ProtoInvite from "./mods/ProtoSectionInvite";
import * as ProtoMisc from "./mods/ProtoSectionMisc";
import * as ProtoPayment from "./mods/ProtoSectionPayment";
import * as ProtoTalent from "./mods/ProtoSectionTalent";
import * as ProtoArena from "./mods/ProtoSectionArena";
import * as ProtoRole from "./mods/ProtoSectionRole";
import * as ProtoVip from "./mods/ProtoSectionVip";
import * as ProtoGiftBag from "./mods/ProtoSectionGiftBag";

export enum ProtoSection {

    debug = 9,
    acc = 10,
    player = 11,
    turntable = 12,
    hero = 13,
    chat = 14,
    skill = 21,
    stage = 22,
    weapon = 23,
    bar = 24,
    property = 25,
    sign = 26,
    lucky = 27,
    challenge = 28,
    exchange = 29,
    achievement = 30,
    battle = 31,
    guide = 32,
    customerService = 33,
    rank = 34,
    pet = 35,
    promote = 36,
    invite = 37,
    misc = 38,
    payment = 39,
    talent = 40,
    arena = 41,
    role = 42,
    vip = 43,
    giftBag = 44,
}

export const ProtoMsgMap = {

    2304 : ProtoDebug.DebugErrorS2C,
    2560 : ProtoAcc.AccLoginS2C,
    2562 : ProtoAcc.AccCreateS2C,
    2564 : ProtoAcc.AccEnterS2C,
    2565 : ProtoAcc.AccKickOfflineS2C,
    2566 : ProtoAcc.AccReloginS2C,
    2567 : ProtoAcc.AccServertimeS2C,
    2570 : ProtoAcc.AccBanS2C,
    2571 : ProtoAcc.AccMaintainS2C,
    2572 : ProtoAcc.AccAuthUserInfoS2C,
    2573 : ProtoAcc.AccGuestS2C,
    2574 : ProtoAcc.AccAccountS2C,
    2816 : ProtoPlayer.PlayerSelfInfoS2C,
    2817 : ProtoPlayer.PlayerFortuneS2C,
    2818 : ProtoPlayer.PlayerVigorRegainCountdownS2C,
    2819 : ProtoPlayer.PlayerOfflineDurationS2C,
    2820 : ProtoPlayer.PlayerLvlUpS2C,
    2847 : ProtoPlayer.PlayerDailyClearedS2C,
    2827 : ProtoPlayer.PlayerStatisticS2C,
    2828 : ProtoPlayer.PlayerStatisticUpdateS2C,
    2829 : ProtoPlayer.PlayerLvlRewardS2C,
    2830 : ProtoPlayer.PlayerFirstBattleS2C,
    3073 : ProtoTurntable.TurntableDrawS2C,
    3074 : ProtoTurntable.TurntableRemainS2C,
    3075 : ProtoTurntable.TurntableVideoToTicketS2C,
    5376 : ProtoSkill.SkillSlotListS2C,
    5377 : ProtoSkill.SkillDownS2C,
    5378 : ProtoSkill.SkillUpS2C,
    5379 : ProtoSkill.SkillUnlockS2C,
    5380 : ProtoSkill.SkillUpdateSlotS2C,
    5382 : ProtoSkill.SkillSkillListS2C,
    5383 : ProtoSkill.SkillUpgradeS2C,
    5384 : ProtoSkill.SkillSkillUpdateS2C,
    5385 : ProtoSkill.SkillBuySkillS2C,
    5633 : ProtoStage.StageGainBossS2C,
    5642 : ProtoStage.StageListS2C,
    5643 : ProtoStage.StageUpdateS2C,
    5644 : ProtoStage.StageRefreshS2C,
    5645 : ProtoStage.StageNewPicS2C,
    5647 : ProtoStage.StageShareAwardS2C,
    5648 : ProtoStage.StageExtraAwardS2C,
    5649 : ProtoStage.StageExtraCountS2C,
    5650 : ProtoStage.StageNewShareAwardS2C,
    5651 : ProtoStage.StageLifeCounterS2C,
    5652 : ProtoStage.StageRestoreLifeS2C,
    5653 : ProtoStage.StageAirBagS2C,
    5654 : ProtoStage.StageGainAirS2C,
    5655 : ProtoStage.StageCleanCardS2C,
    5656 : ProtoStage.StageAddCardS2C,
    5657 : ProtoStage.StageDecCardS2C,
    5658 : ProtoStage.StageFreeTimesS2C,
    5889 : ProtoWeapon.WeaponListS2C,
    5890 : ProtoWeapon.WeaponBuyWeaponS2C,
    5891 : ProtoWeapon.WeaponUseWeaponS2C,
    5892 : ProtoWeapon.WeaponUpdateS2C,
    6144 : ProtoBar.BarInfoS2C,
    6145 : ProtoBar.BarDrinkS2C,
    6146 : ProtoBar.BarClearS2C,
    6401 : ProtoProperty.PropertyPracticeS2C,
    6402 : ProtoProperty.PropertyPracticeListS2C,
    6403 : ProtoProperty.PropertyPracticeUpdateS2C,
    6404 : ProtoProperty.PropertyListS2C,
    6405 : ProtoProperty.PropertyFindS2C,
    6406 : ProtoProperty.PropertyUpdateS2C,
    6407 : ProtoProperty.PropertyUpLvlS2C,
    6408 : ProtoProperty.PropertyUpdateAllS2C,
    6657 : ProtoSign.SignInfoS2C,
    6658 : ProtoSign.SignDoS2C,
    6659 : ProtoSign.SignShareS2C,
    6660 : ProtoSign.SignShareInfoS2C,
    6661 : ProtoSign.SignAdS2C,
    6913 : ProtoLucky.LuckyInfoS2C,
    6914 : ProtoLucky.LuckyDoS2C,
    7169 : ProtoChallenge.ChallengeInfoS2C,
    7170 : ProtoChallenge.ChallengeUpdateS2C,
    7175 : ProtoChallenge.ChallengeResetS2C,
    7425 : ProtoExchange.ExchangeInfoS2C,
    7426 : ProtoExchange.ExchangeUpdateS2C,
    7427 : ProtoExchange.ExchangeGemGoldS2C,
    7428 : ProtoExchange.ExchangeGemVigorS2C,
    7681 : ProtoAchievement.AchievementListS2C,
    7682 : ProtoAchievement.AchievementUpdateS2C,
    7683 : ProtoAchievement.AchievementAwardS2C,
    7684 : ProtoAchievement.AchievementWatchedAdS2C,
    7685 : ProtoAchievement.AchievementTimesAdS2C,
    7686 : ProtoAchievement.AchievementRewardAdS2C,
    7937 : ProtoBattle.BattleReadyS2C,
    7938 : ProtoBattle.BattleFinishS2C,
    7939 : ProtoBattle.BattleGainRewardS2C,
    7940 : ProtoBattle.BattlePauseS2C,
    7941 : ProtoBattle.BattleResumeS2C,
    7942 : ProtoBattle.BattleStartS2C,
    8193 : ProtoGuide.GuidePullS2C,
    8194 : ProtoGuide.GuideUpdateS2C,
    8195 : ProtoGuide.GuideFirstS2C,
    8449 : ProtoCustomerService.CustomerServiceGainAwardS2C,
    8450 : ProtoCustomerService.CustomerServiceInfoS2C,
    8705 : ProtoRank.RankMyS2C,
    8706 : ProtoRank.RankListS2C,
    8961 : ProtoPet.PetListS2C,
    8962 : ProtoPet.PetUpdateS2C,
    8963 : ProtoPet.PetBuyS2C,
    8964 : ProtoPet.PetUpgradeS2C,
    8965 : ProtoPet.PetBattleS2C,
    8966 : ProtoPet.PetAdS2C,
    8967 : ProtoPet.PetBuyPetS2C,
    8968 : ProtoPet.PetTrialS2C,
    8969 : ProtoPet.PetTrialPetS2C,
    9217 : ProtoPromote.PromoteListS2C,
    9218 : ProtoPromote.PromoteWaitS2C,
    9219 : ProtoPromote.PromoteRewardS2C,
    9473 : ProtoInvite.InviteListS2C,
    9474 : ProtoInvite.InviteGainAwardS2C,
    9475 : ProtoInvite.InviteUpdateS2C,
    9476 : ProtoInvite.InviteGetPlayerS2C,
    9482 : ProtoInvite.InviteOffRewardS2C,
    9483 : ProtoInvite.InviteGainOffRewardS2C,
    9729 : ProtoMisc.MiscTreasureS2C,
    9730 : ProtoMisc.MiscGainAwardS2C,
    9731 : ProtoMisc.MiscUpdateS2C,
    9733 : ProtoMisc.MiscCounterListS2C,
    9734 : ProtoMisc.MiscCounterListUpdateS2C,
    9735 : ProtoMisc.MiscModifyCounterS2C,
    9736 : ProtoMisc.MiscGetCounterS2C,
    9737 : ProtoMisc.MiscEggCountS2C,
    9738 : ProtoMisc.MiscEggRewardS2C,
    9985 : ProtoPayment.PaymentInfoS2C,
    9986 : ProtoPayment.PaymentCommitOrderS2C,
    9987 : ProtoPayment.PaymentNotifyS2C,
    9988 : ProtoPayment.PaymentUpdateS2C,
    9989 : ProtoPayment.PaymentFinishOrderS2C,
    9995 : ProtoPayment.PaymentAchieveListS2C,
    9996 : ProtoPayment.PaymentAchieveUpdateS2C,
    9997 : ProtoPayment.PaymentGainAchieveS2C,
    10241 : ProtoTalent.TalentListS2C,
    10242 : ProtoTalent.TalentUpdateS2C,
    10243 : ProtoTalent.TalentPrepareS2C,
    10244 : ProtoTalent.TalentFreeCountS2C,
    10496 : ProtoArena.ArenaPraiseS2C,
    10497 : ProtoArena.ArenaMyPosS2C,
    10498 : ProtoArena.ArenaEnemyS2C,
    10499 : ProtoArena.ArenaEnemyInfoS2C,
    10500 : ProtoArena.ArenaRewardS2C,
    10501 : ProtoArena.ArenaGainRewardS2C,
    10502 : ProtoArena.ArenaPkCountS2C,
    10503 : ProtoArena.ArenaAddPkCountS2C,
    10504 : ProtoArena.ArenaBuyTimesS2C,
    10505 : ProtoArena.ArenaLocationS2C,
    10506 : ProtoArena.ArenaEnemyListS2C,
    10507 : ProtoArena.ArenaRankListS2C,
    10508 : ProtoArena.ArenaTreasureCountS2C,
    10509 : ProtoArena.ArenaTreasureUpdateS2C,
    10510 : ProtoArena.ArenaGainTreasureS2C,
    10511 : ProtoArena.ArenaPkRecordS2C,
    10753 : ProtoRole.RoleHeadListS2C,
    10754 : ProtoRole.RoleChangeHeadS2C,
    10755 : ProtoRole.RoleActiveHeadS2C,
    10756 : ProtoRole.RoleChangeNameS2C,
    10763 : ProtoRole.RoleSkinListS2C,
    10764 : ProtoRole.RoleChangeSkinS2C,
    10765 : ProtoRole.RoleUpdateSkinS2C,
    11009 : ProtoVip.VipSubscribeStatusS2C,
    11010 : ProtoVip.VipSubscribeS2C,
    11011 : ProtoVip.VipSubscribeAdS2C,
    11012 : ProtoVip.VipUpdateSubscribeAdS2C,
    11013 : ProtoVip.VipSubscribeDailyS2C,
    11014 : ProtoVip.VipSubscribeDailyTimeS2C,
    11018 : ProtoVip.VipInfiniteVigorS2C,
    11019 : ProtoVip.VipMonthCardS2C,
    11020 : ProtoVip.VipMonthS2C,
    11021 : ProtoVip.VipMonthDailyS2C,
    11022 : ProtoVip.VipMonthDailyTimeS2C,
    11265 : ProtoGiftBag.GiftBagAskS2C,
    11266 : ProtoGiftBag.GiftBagBuyS2C,
    11267 : ProtoGiftBag.GiftBagExpireInfoS2C,
};

export enum ProtoErrorCode {

    "成功" = 0,
    "未知错误" = 1,
    "房间已满" = 2,
    "房间不存在" = 3,
    "需要微信重新登陆授权" = 4,
    "失败" = 5,
    "系统错误" = 1000,
    "数据库错误" = 1001,
    "mnesia数据库错误" = 1002,
    "对象不存在" = 1003,
    "参数错误" = 1004,
    "没有权限访问" = 1005,
    "玩家数据流量超过限制" = 1006,
    "玩家数据包超过限制" = 1007,
    "请求超时" = 1008,
    "跨服服务暂不可用" = 1009,
    "工号不存在" = 1010,
    "认证失败" = 1100,
    "维护状态" = 1101,
    "需要重新登陆" = 1102,
    "时间不合法" = 1103,
    "玩家作弊" = 1104,
    "内容包含非法信息或长度不合适" = 1105,
    "名称已存在" = 1106,
    "性别不合法" = 1107,
    "玩家不存在" = 1108,
    "金币不足" = 1201,
    "经验不足" = 1202,
    "积分不足" = 1203,
    "材料不足" = 1204,
    "VIP等级不足" = 1205,
    "玩家等级不符" = 1206,
    "cd时间非法" = 1207,
    "次数不足" = 1208,
    "购买次数不足" = 1209,
    "红包已兑完" = 1210,
    "宝石不足" = 1211,
    "体力不足" = 1212,
    "代币不足" = 1212,
    "玩家满级" = 1300,
    "铜钱到达上限" = 1301,
    "金币到达上限" = 1302,
    "代金劵到达上限" = 1303,
    "背包可拓展格数已达上限" = 1304,
    "已达上限" = 1305,
    "未开启" = 1400,
    "未激活" = 1401,
    "未完成" = 1402,
    "未通过" = 1403,
    "进行中" = 1404,
    "已完成" = 1405,
    "已领取" = 1406,
    "已被其他玩家领取" = 1407,
    "条件不满足" = 1500,
    "已过期" = 1501,
    "没有符合条件的目标" = 1502,
    "对应目标不存在" = 1503,
    "对应目标已达成, 无须重复操作" = 1504,
    "不能对自己执行该操作" = 1600,
    "玩家不存在或者离线" = 1601,
    "未收到邀请" = 1602,
    "活动未开启" = 1700,
    "活动已结束" = 1701,
    "副本已结束" = 1800,
    "地图已满" = 1801,
    "已在地图内" = 1802,
    "所有地图均人满" = 1803,
    "没有房间" = 1804,
    "不在副本内" = 1805,
    "目标位置不可到达" = 1806,
    "背包已满" = 1900,
    "物品不存在" = 1901,
    "物品不可使用" = 1902,
    "物品类型不支持" = 1903,
    "物品类型不符" = 1904,
    "物品正在冷却" = 1905,
    "物品数量不足" = 1906,
    "当前已在房间中" = 2000,
    "牌局已经开始" = 2001,
    "尚未首充" = 2002,
    "本期夺宝活动已结束" = 2003,
    "房间主人已经离开" = 2004,
    "姓名不能为空" = 2100,
    "必须11位号码" = 2101,
    "地址不正确" = 2102,
    "需要回到主场景" = 2200,
    "订单重复" = 2300,
    "订单支付金额不足" = 2301,
}