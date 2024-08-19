import Character from "../class/Character.js";

test('Ошибка в name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow(Error);
});

test('Ошибка в type', () => {
    expect(() => new Character('Char', 'Bow')).toThrow(Error);
});

test('Правильно создается объект', () => {
    const result = new Character('Alexey', 'Bowman');
    const hero = {
        name: "Alexey",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };

    expect(result).toEqual(hero);
});