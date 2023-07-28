/**
 * Example
 * =======
 *
 * This component is used to demostrate how our code should look like.
 */
class ExampleComponent {
  constructor() {
    this.something = false;
  }

  /**
   * The description of this method
   * @param {number} param The parameter that is getting passed
   *
   * @return {boolean}
   */
  someMethod(param) {
    if (param) {
      return true;
    }

    return this.something;
  }
}
