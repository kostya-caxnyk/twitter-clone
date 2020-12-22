export default (email: string, hash: string) => ({
  to: email,
  from: 'admin@twitter.com',
  subject: 'Вы успешно создали аккаунт в Twitter-clone',
  html: `
    <h1>Welcome</h1>
    <p>You have successfully made your account with this email - ${email}</p>
    <strong>To confirm your account click on this link</strong>
    <a href='${process.env.BASE_URL}/users/verify?hash=${hash}'>Reset the password</a>
  `,
});
