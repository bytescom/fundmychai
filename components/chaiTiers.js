export const chaiTiers = [
    { amount: 20, type: 'Cutting Chai', vibe: 'Quick sip of support', emoji: '☕', id: 'cutting' },
    { amount: 60, type: 'Masala Chai', vibe: 'Spiced with love', emoji: '🍵', id: 'masala' },
    { amount: 150, type: 'Special Tandoor', vibe: 'Bold & smoky flavor', emoji: '🔥', id: 'tandoor' },
    { amount: 500, type: 'Royal Feast', vibe: 'The ultimate gesture', emoji: '👑', id: 'royal' },
];

// Helper to get tier info from amount
export const getTierByAmount = (amount) => {
    return chaiTiers.find((t) => t.amount === amount) || chaiTiers[0];
};

// All tier type names (for schema enum)
export const tierTypeNames = chaiTiers.map((t) => t.type);
