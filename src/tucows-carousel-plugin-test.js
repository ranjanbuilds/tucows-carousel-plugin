import QUnit from 'steal-qunit';
import plugin from './tucows-carousel-plugin';

QUnit.module('tucows-carousel-plugin');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the tucows-carousel-plugin plugin');
});
