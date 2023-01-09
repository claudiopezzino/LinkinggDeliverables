/*----------------------------------------------------------------------------*/
function user(layout){

  switch (layout) {

    case 1:
      document.getElementById('user_img').src = 'img/user/main.jpg';
      break;

    case 2:
      document.getElementById('user_img').src = 'img/user/signup.jpg';
      break;

    case 3:
      document.getElementById('user_img').src = 'img/user/signin.jpg';
      break;

    case 4:
      document.getElementById('user_img').src = 'img/user/home.jpg';
      break;

    case 5:
      document.getElementById('user_img').src = 'img/user/choice.jpg';
      break;

    default:

      break;

  }

}
/*----------------------------------------------------------------------------*/
function staff(layout){

  switch (layout) {

    case 1:
      document.getElementById('staff_img').src = 'img/staff/main.jpg';
      break;

    case 2:
      document.getElementById('staff_img').src = 'img/staff/signup.jpg';
      break;

    case 3:
      document.getElementById('staff_img').src = 'img/staff/signin.jpg';
      break;

    case 4:
      document.getElementById('staff_img').src = 'img/staff/home.jpg';
      break;

    default:

      break;

  }

}
/*----------------------------------------------------------------------------*/
