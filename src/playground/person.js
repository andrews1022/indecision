export const isAdult = (age) => (age >= 21 ? 'is an adult' : 'is not an adult');
export const canDrink = (age) => (age >= 21 ? 'can drink' : 'cannot drink');
const isSenior = (age) => (age >= 65 ? 'is a senior' : 'is not a senior');
export default isSenior;
