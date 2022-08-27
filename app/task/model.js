import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') description;
  @attr('boolean', { defaultValue: false }) isDone;
  @attr('date') updatedAt;
  @attr('date') createdAt;
}
