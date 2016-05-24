// u can loop middlewares here if u want to
export default store => next => action  => {
  console.log(action)
  return next(action)
}