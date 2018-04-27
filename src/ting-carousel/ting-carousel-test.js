import QUnit from 'steal-qunit';
import { ViewModel } from './ting-carousel';

// ViewModel unit tests
QUnit.module('tucows-carousel-plugin/ting-carousel');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the ting-carousel component');
});
