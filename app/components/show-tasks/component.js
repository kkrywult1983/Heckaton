import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ShowtasksComponent extends Component {
  @tracked isDone = false;

  @action
  async toogleValue(task) {
    task.isDone = true;
    await this.args.tasks.save();
  }
}
