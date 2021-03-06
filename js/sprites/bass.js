import CharImg from '../sprite';

class Bass {
  constructor() {
    this.bass = new Image();
    this.bass.src = 'assets/bass.png';
    this.bassLeft = new Image();
    this.bassLeft.src = 'assets/bass_left.png';
    this.bassFace = new Image();
    this.bassFace.src = 'assets/bass-face.gif';
    this.animation = {
      idleAnim: new CharImg(this.bass, 0, 0, 50, 58),
      leftAnim1: new CharImg(this.bass, 302, 130, 50, 58),
      leftAnim2: new CharImg(this.bass, 245, 130, 50, 58),
      leftAnim3: new CharImg(this.bass, 188, 130, 50, 58),
      rightAnim1: new CharImg(this.bass, 0, 130, 50, 58),
      rightAnim2: new CharImg(this.bass, 60, 130, 50, 58),
      rightAnim3: new CharImg(this.bass, 120, 130, 50, 58),
      jumpAnim1: new CharImg(this.bass, 180, 65, 50, 58),
      jumpAnim2: new CharImg(this.bass, 120, 65, 50, 58),
      jumpAnim3: new CharImg(this.bass, 60, 65, 50, 58),
      shootAnim1: new CharImg(this.bass, 180, 246, 50, 58),
      shootAnim2: new CharImg(this.bass, 180, 495, 50, 58),
      shootAnim3: new CharImg(this.bass, 120, 495, 50, 58),
      shootAnim4: new CharImg(this.bass, 120, 435, 50, 58),
      leftIdleAnim: new CharImg(this.bassLeft, 300, 0, 50, 58),
      leftMoveAnim1: new CharImg(this.bassLeft, 302, 130, 50, 58),
      leftMoveAnim2: new CharImg(this.bassLeft, 245, 130, 50, 58),
      leftMoveAnim3: new CharImg(this.bassLeft, 188, 130, 50, 58),
      rightMoveAnim1: new CharImg(this.bassLeft, 0, 130, 50, 58),
      rightMoveAnim2: new CharImg(this.bassLeft, 60, 130, 50, 58),
      rightMoveAnim3: new CharImg(this.bassLeft, 120, 130, 50, 58),
      leftJumpAnim1: new CharImg(this.bassLeft, 120, 65, 50, 58),
      leftJumpAnim2: new CharImg(this.bassLeft, 180, 65, 50, 58),
      leftJumpAnim3: new CharImg(this.bassLeft, 240, 65, 50, 58),
      leftShootAnim1: new CharImg(this.bassLeft, 120, 246, 50, 58),
      leftShootAnim2: new CharImg(this.bassLeft, 120, 495, 50, 58),
      leftShootAnim3: new CharImg(this.bassLeft, 240, 495, 50, 58),
      leftShootAnim4: new CharImg(this.bassLeft, 240, 435, 50, 58),
      face: new CharImg(this.bassFace, 0, 0, 46, 54),
    };
  }
}

export default Bass;
