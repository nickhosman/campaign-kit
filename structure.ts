enum profType {
    LANGUAGE,
    TOOL,
    SKILL,
    SAVING_THROW,
    ARMOR,
    WEAPON,
};

type Proficiency = {
    type: profType;
    name: string;
};

enum statistic {
    STR,
    DEX,
    CON,
    INT,
    WIS,
    CHA,
};

type Bonus = {
    stat: statistic;
    value: number;
};

type Feature = {
    name: string;
    description: string;
};

type Race = {
    name: string;
    description: string;
    features: Feature[];
    proficiencies: Proficiency[];
};

enum hitDie {
    D4 = 4,
    D6 = 6,
    D8 = 8,
    D10 = 10,
    D12 = 12,
};

type Class = {
    name: string;
    description: string;
    features: Feature[];
    proficiencies: Proficiency[];
    hitDie: hitDie;
};


type Background = {
    name: string;
    description: string;
    proficiencies: Proficiency[];
    features: Feature[];
};

type Character = {
    name: string;
    race: Race;
    classes: Class[];
    level: number;
};
