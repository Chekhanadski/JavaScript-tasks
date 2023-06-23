/*
  Title:
    Call chain.

  Description:
    We have a ladder object that allows you to climb and descend:

      let ladder = {
        step: 0,
        up() {
          this.step++;
        },
        down() {
          this.step--;
        },
        showStep: function() { // shows the current step
          alert( this.step );
        }
      };

    Now, if we need to make several consecutive calls, we can do it like this:

      ladder.up();
      ladder.up();
      ladder.down();
      ladder.showStep(); // 1
      ladder.down();
      ladder.showStep(); // 0
    
    Change the code of the up, down and showsteps methods so that their call can be made in a chain, for example like this:

      ladder.up().up().down().showStep().down().showStep(); // show 1 then 0

    This approach is widely used in JavaScript libraries.

  Examples:  
    

  Kata Link:
    https://learn.javascript.ru/task/calculator#
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};
