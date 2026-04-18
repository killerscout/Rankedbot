const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rank")
        .setDescription("Set your Warzone rank"),

    async execute(interaction) {
        const ranks = [
            "Bronze 5", "Bronze 4", "Bronze 3", "Bronze 2", "Bronze 1",
            "Silver 5", "Silver 4", "Silver 3", "Silver 2", "Silver 1",
            "Gold 5", "Gold 4", "Gold 3", "Gold 2", "Gold 1",
            "Platinum 5", "Platinum 4", "Platinum 3", "Platinum 2", "Platinum 1",
            "Diamond 5", "Diamond 4", "Diamond 3", "Diamond 2", "Diamond 1",
            "Crimson", "Iridescent", "Top 250"
        ];

        const menu = new StringSelectMenuBuilder()
            .setCustomId("rank_select")
            .setPlaceholder("Choose your Warzone rank")
            .addOptions(
                ranks.map(r => ({
                    label: r,
                    value: r
                }))
            );

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            content: "Select your rank:",
            components: [row],
            ephemeral: true
        });
    }
};
