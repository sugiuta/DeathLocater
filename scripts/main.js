import { world } from "@minecraft/server"

world.afterEvents.entityDie.subscribe(edEvent => {
    const entity = edEvent.deadEntity;
    if (entity.typeId != "minecraft:player") return;
    const location = entity.location;
    const playerName = entity.nameTag;
    const dimentionId = entity.dimension.id;

    let dimensionName = "不明なディメンション";
    if (dimentionId === "minecraft:overworld") {
        dimensionName = "オーバーワールド";
    } else if (dimentionId === "minecraft:nether") {
        dimensionName = "ネザー";
    } else if (dimentionId === "minecraft:the_end") {
        dimensionName = "ジ・エンド";
    }

    world.sendMessage(`${playerName}が§l${dimensionName}§rで死亡しました。\n死亡地点: §4X§r=${location.x.toFixed(0)}, §1Y§r=${location.y.toFixed(0)}, §2Z§r=${location.z.toFixed(0)}`);
});