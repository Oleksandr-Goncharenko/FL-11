const minEmailLength = 6;
const minPasswordLength = 5;
const visitorEmail = prompt('What is your E-Mail?');
if (visitorEmail === null || visitorEmail === '') {
  alert('Canceled.');
} else if (visitorEmail.length < minEmailLength) {
  alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (visitorEmail === 'user@gmail.com' || visitorEmail === 'admin@gmail.com') {
  const visitorPass = prompt('Enter your password:');
  const USER = visitorEmail === 'user@gmail.com' && visitorPass === 'UserPass';
  const ADMIN = visitorEmail === 'admin@gmail.com' && visitorPass === 'AdminPass';
  if (visitorPass === null || visitorPass === '') {
    alert('Canceled.');
  } else if (USER || ADMIN) {
    const changeAction = confirm('Do you want to change your password?');
    if (changeAction) {
      const oldPassword = prompt('Enter your old password:');
      if (oldPassword === null || oldPassword === '') {
        alert('Canceled.');
      } else if (oldPassword === visitorPass) {
        const newPassword = prompt('Enter new password:');
        if (newPassword === null || newPassword === '') {
          alert('Canceled.');
        } else if (newPassword.length < minPasswordLength) {
          alert('It\'s too shirt password. Sorry.');
        } else {
          const confermNewPassword = prompt('Enter new password one more time:');
          if (confermNewPassword === null || confermNewPassword === '') {
            alert('Canceled.');
          } else if (confermNewPassword === newPassword) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password.');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password.');
  }
} else {
  alert('I don\'t know you.');
}