
async function onloadfile ( event ) {
  var text = await event.target.files[0].text();
  document.querySelector("textarea[id='saveFileTextArea']").value = text;

  split = text.split('#')

  saver = CryptoJS.AES.decrypt(split[0], CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b"), { iv: CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457"), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
  saver = JSON.parse(saver)
  delete saver.ascendTime
  delete saver.currentTime
  delete saver.isEarlyAccess
  delete saver.isDesignDivided
  delete saver.designID__forUI
  delete saver.distanceConsumed
  delete saver.Z_currentDistance
  delete saver.Z_distanceConsumed
  delete saver.spiralSpeedPercent
  delete saver.currentTheta
  delete saver.positionsX
  delete saver.positionsY
  delete saver.positionsZ
  delete saver.isToggleOn
  delete saver.isStoriesEnd
  delete saver.isEquationEnd
  delete saver.isInitedOmegaPrestigeIntaractableIcon
  delete saver.isNewUIs
  delete saver.isInitedNewIIcon
  delete saver.showId
  delete saver.curvesSelected
  delete saver.isUnlockCanvasLocked
  delete saver.count
  delete saver.volume
  delete saver.isSelected
  
  save = CryptoJS.AES.decrypt(split[1], CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b"), { iv: CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457"), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
  save = JSON.parse(save)
  delete save.lastTime
  delete save.birthDate
  delete save.isContinuePlay
  delete save.allTime
  delete save.SEVolume
  delete save.BGMVolume
  delete save.ascendPoint
  delete save.numbers
  delete save.isEarlyAccess
  delete save.DEBUG_FORCED_REWARDED
  delete save.notationEnum
  delete save.refundedNum
  delete save.inputDifficulties
  delete save.effectiveDigit
  delete save.isEffectiveDigitEffect
  delete save.isOfflineModePlayed
  delete save.resokutionKind
  delete save.fontSizeLevel
  delete save.toggleSave

  dto = CryptoJS.AES.decrypt(split[2], CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b"), { iv: CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457"), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
  dto = dto.replaceAll("Infinity", "10.0")
  dto = JSON.parse(dto)
  //delete dto.bigDTO
  delete dto.upgradeLevels
  delete dto.totalUpgradeLevels
  delete dto.variableUpgradeLevels
  delete dto.challengeLevels
  delete dto.IS_automation_isPurchased
  delete dto.IS_spiralDesign_isPurchased
  delete dto.spiralEquipment_isUnlocked
  delete dto.spiralEquipment_isSelected
  delete dto.spiralEquipment_level
  delete dto.achievement_isUnlocked
  delete dto.achievement_isConditionMetOnce
  delete dto.spiralEquipment_currentProgress
  delete dto.InfiniteSliderLevel
  delete dto.r
  delete dto.z
  delete dto.totalR
  delete dto.totalRforDaily
  delete dto.maxR
  delete dto.toralZ
  delete dto.maxZ
  delete dto.sphere_z
  delete dto.dailyR
  delete dto.dailyTime
  delete dto.dailyPrestige
  delete dto.prestigePoint
  delete dto.tempPrestigePoint
  delete dto.tornadoPoint
  delete dto.tempTornadoPoint
  delete dto.prestigeNum
  delete dto.tornadoPrestigeTier
  delete dto.totalPrestigePoint
  delete dto.totalTornadoPoint
  delete dto.maxPrestigePoint
  delete dto.maxTornadoPoint
  delete dto.isTornadPrestigePointGet
  delete dto.totalTime
  delete dto.timeSincePrestige
  delete dto.timeSinceTornadoPrestige
  delete dto.timeSinceOmegaPrestige
  delete dto.AccumulatedHour
  delete dto.AccumulatedMaxP
  delete dto.spiralPointConsumed
  delete dto.challengePointConsumed
  delete dto.achievementPointConsumed
  delete dto.spiralPointsConsumedFromShop
  delete dto.spiralPointsConsumedFromAd
  delete dto.spiralPointLimitFromBattleSpiral
  delete dto.achievementPointFromDailyProgress
  delete dto.spiral_active_upgrade_levels
  delete dto.spiral_passive_upgrade_levels
  delete dto.softResetNum
  delete dto.functionPoint
  delete dto.challengeKind
  delete dto.timeForSinkholeChallenge
  delete dto.currentHP
  delete dto.enemyId
  delete dto.battleState
  delete dto.enemy_defeated
  delete dto.spiralPointFromBattle
  delete dto.exp_gained
  delete dto.exp_consumed
  delete dto.battle_upgrade_levels
  delete dto.battle_equationUpgrade_unlocked
  delete dto.currentLeftTime
  delete dto.milestoneNumber
  delete dto.isBattleUnlocked
  delete dto.battle_rewards
  delete dto.dummy_battle_rewards
  delete dto.is_equation_got
  delete dto.theory_materials
  delete dto.is_onetime_reward_got
  delete dto.enemy_difficulties
  delete dto.enemy_seeds
  delete dto.enemy_progresses
  delete dto.IsAttackSpeedCapped
  delete dto.enemy_nukemode
  delete dto.enemy_scavengerMode
  delete dto.battleItemPossession
  delete dto.battleItemTimeRemaining
  delete dto.battleItemActive
  delete dto.x_value
  delete dto.c_value
  delete dto.design_levels
  delete dto.design_currentExp
  delete dto.currentDesign
  delete dto.design_isUnlocked
  delete dto.reactor_values
  delete dto.reactor_upgrade_levels
  delete dto.reactor_levels
  delete dto.reactor_exp
  delete dto.currencyConsumed
  delete dto.currencyGained
  delete dto.inspirationConsumed
  delete dto.inspiration
  delete dto.theoryDatas
  delete dto.lootDatas
  delete dto.FormulaFragmentGained
  delete dto.FormulaFragmentConsumed
  delete dto.TheoryUpgradeLevels
  delete dto.lootRewards
  delete dto.daily_seed
  delete dto.daily_counted
  delete dto.getSpiral
  delete dto.spiralPointFromDailySpiral
  delete dto.isOfflineBoost
  delete dto.spiralPointFromOfflineBonus
  delete dto.spiralPointFromAD
  delete dto.adDuration
  delete dto.spiralPointFromPurchase
  delete dto.totalPlayFromEarlyRelease
  delete dto.isSteamRestored20230901
  delete dto.isSteamRestore20230910
  delete dto.isSteamRestore20230922
  delete dto.isSteamRestore20231007
  
  bigdto = dto.bigDTO
  delete bigdto.currentHP
  delete bigdto.battle_rewards
  delete bigdto.reactor_exp
  delete bigdto.reactor_values
  delete bigdto.r
  delete bigdto.p
  delete bigdto.z
  delete bigdto.t
  delete bigdto.temp_p
  delete bigdto.temp_t
  delete bigdto.sphere_z
  delete bigdto.FormulaFragmentGained
  delete bigdto.FormulaFragmentConsumed
  delete bigdto.inspirationConsumed
  delete bigdto.inspiration
  delete bigdto.exp_consumed
  delete bigdto.theory_materials
  delete bigdto.currencyConsumed
  delete bigdto.lootDatas
  delete bigdto.lootRewards
  delete bigdto.theoryDatas
  delete bigdto.IsBigDTOApplied
  document.querySelector("textarea[id='notesTextArea']").value = JSON.stringify(bigdto, null, 2);
}