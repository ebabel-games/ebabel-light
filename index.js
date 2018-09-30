'use strict';

/**
 * `light`
 * Setup a THREE.js PointLight and add it to the scene.
 * @param {object} input - Parameters and dependencies.
 * @param {object} input.THREE - Core library of THREE.js
 * @param {object} input.scene - Scene object where the light will be added.
 * @param {hex?} input.color - Dominant color of the light in hexadecima format. Defaults to pure white 0xffffff.
 * @param {array?} input.position - 3D coordinates of where the light should be placed. Defaults to [1, 250, 1].
 * @param {string?} input.name - Name of the light. Defaults to 'main-light'.
 * @returns {object} THREE.PointLight instance.
 */
const light = (input) => {
  const {
    THREE,
    scene,
    color = 0xffffff,
    position = [1, 250, 1],
    name = 'main-light'
  } = input;

  function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  if (typeof color === 'string') {
    var isValidColor  = /^#[0-9A-F]{6}$/i.test(color);
    if (isValidColor) {
      this.color= toHex(color);
    } 
    else {
      throw new Error(`Invalid color ${color}`);
    }
  }
  else {
    this.color=color;
  }

  const mainLight = new THREE.PointLight(color);
  mainLight.name = name;
  mainLight.position.set(
    position[0],
    position[1],
    position[2]
  );
  scene.add(mainLight);


  return mainLight;
};

module.exports = light;
