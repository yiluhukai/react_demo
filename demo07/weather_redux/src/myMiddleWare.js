export const startMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log("start");
  console.log(next.toString())
  next(action)
}

export const endMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  console.log("end");
  console.log(next.toString())
  next(action)
} 
