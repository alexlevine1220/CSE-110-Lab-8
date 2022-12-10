// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// phone numbers
test('expect first phone number to be true', () => {
  expect(functions.isPhoneNumber('123-456-7890').toBe(true);
});

test('expect second phone number to be true', () => {
  expect(functions.isPhoneNumber('000-000-0000').toBe(true);
});

test('expect third phone number to be false', () => {
  expect(functions.isPhoneNumber('not a phone number').toBe(false);
});

test('expect fourth phone number to be false', () => {
  expect(functions.isPhoneNumber('000').toBe(true);
});

// emails
test('expect first email to be true', () => {
  expect(functions.isPhoneNumber('email@gmail.com').toBe(true);
});

test('expect second email to be true', () => {
  expect(functions.isPhoneNumber('email@hotmail.com').toBe(true);
});

test('expect third email to be false', () => {
  expect(functions.isPhoneNumber('not an email').toBe(false);
});

test('expect fourth email to be false', () => {
  expect(functions.isPhoneNumber('email@gmail').toBe(true);
});

// passwords
test('expect first password to be true', () => {
  expect(functions.isStrongPassword('aPassword').toBe(true);
});

test('expect second password to be true', () => {
  expect(functions.isStrongPassword('another').toBe(true);
});

test('expect third password to be false', () => {
  expect(functions.isStrongPassword('1password').toBe(false);
});

test('expect fourth password to be false', () => {
  expect(functions.isStrongPassword('ab').toBe(true);
});

// dates
test('expect first date to be true', () => {
  expect(functions.isDate('12/20/2000').toBe(true);
});

test('expect second date to be true', () => {
  expect(functions.isDate('1/1/1000').toBe(true);
});

test('expect third date to be false', () => {
  expect(functions.isDate('not a date').toBe(false);
});

test('expect fourth date to be false', () => {
  expect(functions.isDate('123/1234/1').toBe(true);
});

// hex colors
test('expect first hex color to be true', () => {
  expect(functions.isHexColor('f0c').toBe(true);
});

test('expect second hex color to be true', () => {
  expect(functions.isDate('ff00cc').toBe(true);
});

test('expect third hex color to be false', () => {
  expect(functions.isDate('not a hex color').toBe(false);
});

test('expect fourth hex color to be false', () => {
  expect(functions.isDate('AA').toBe(true);
});

// TODO - Part 2
