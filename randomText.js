alphabet = 'abcdefghijklmnopqrstuvwxyz';
num_attempts = 20;
word_length = 4;

function setup() {

  for (let j = 0; j < num_attempts; j++) {
    let s = '';
    for (let i = 0; i < word_length; i++) {
      let r = int(random(0, alphabet.length));
      s += alphabet.substring(r, r + 1);
    }
    print(s);
  }

}
