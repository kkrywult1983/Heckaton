import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TodoController extends Controller {
  @tracked isDone = false;

  @action
  async toogleValue(task) {
    task.isDone = true;
    await this.args.tasks.save();
  }
}
