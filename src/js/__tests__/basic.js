import Character from "../characters.js";
import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from "../characters.js";

test('If name incorrect', () => {
    function throwError() {
        const result = new Character('A', 'Bowman');
        return result;
    };
    expect(throwError).toThrow(Error);
});
test('If type incorrect', () => {
    function throwError() {
        const result = new Character('Alexey', 'Bowma');
        return result;
    };
    expect(throwError).toThrow(Error);
});

test('Test bowman class', () => {
    const result = new Bowman('Alexey');
    const hero = {
        name: "Alexey",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(result).toEqual(hero);
});

test('Test swordsman class', () => {
    const result = new Swordsman('Alexey');
    const hero = {
        name: "Alexey",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(result).toEqual(hero);
});

test('Test magician class', () => {
    const result = new Magician('Alexey');
    const hero = {
        name: "Alexey",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    expect(result).toEqual(hero);
});

test('Test daemon class', () => {
    const result = new Daemon('Alexey');
    const hero = {
        name: "Alexey",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    expect(result).toEqual(hero);
});

test('Test undead class', () => {
    const result = new Undead('Alexey');
    const hero = {
        name: "Alexey",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(result).toEqual(hero);
});

test('Test zombie class', () => {
    const result = new Zombie('Alexey');
    const hero = {
        name: "Alexey",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(result).toEqual(hero);
});