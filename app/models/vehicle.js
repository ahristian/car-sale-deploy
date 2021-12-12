import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  type: validator('presence', true),
  brand: validator('presence', true),
  model: validator('presence', true),
  year: validator('number', {allowString: true, gt: 1900}),
  mileage: validator('number', {allowString: true}),
  color: validator('presence', true),
  image: validator('presence', true),
  price: validator('number', {allowString: true, gt: 0}),
  description: validator('presence', true),
  name: validator('presence', true),
  email: validator('presence', true),
  phone: validator('presence', true),

})
export default DS.Model.extend (Validations, {
  type: DS.attr('string'),
  brand: DS.attr('string'),
  model: DS.attr('string'),
  year: DS.attr('string'),
  mileage: DS.attr('string'),
  color: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('string'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),

});
